import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "./types/types";
import {Dispatch} from "redux";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number> //Array of user's id
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number)  => {
        return {type: 'FOLLOW', userId} as const
    },
    unfollowSuccess: (userId: number)  => {
        return {type: 'UNFOLLOW', userId} as const
    },
    setUsers: (users: Array<UserType>) => {
        return {type: 'SET_USERS', users} as const
    },
    setCurrentPage: (currentPage: number) => {
        return {type: 'SET_CURRENT_PAGE', currentPage} as const
    },
    setTotalUsersCount: (totalCount: number) => {
        return {type: 'SET_TOTAL_USERS_COUNT', count: totalCount} as const
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {type: 'TOGGLE_IS_FETCHING', isFetching} as const
    },
    toggleFollowingProgress: (isFetching: boolean, userId: number) => {
        return {type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const
    }
}


type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


export const getUsersThunkCreator = (page: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.toggleIsFetching(false))
        let response = await usersApi.getUsersRequest(page, pageSize)
        dispatch(actions.setUsers(response.data.items))
        dispatch(actions.setTotalUsersCount(response.data.totalCount))
    }

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) =>
                                       ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersApi.followRequest.bind(usersApi), actions.followSuccess);
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersApi.unfollowRequest.bind(usersApi), actions.unfollowSuccess);
}

export default usersReducer