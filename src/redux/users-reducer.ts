import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "./types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number> //Array of user's id
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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


type followSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId: number):followSuccessActionType => {
    return {type: FOLLOW, userId}
}
type unfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId: number):unfollowSuccessActionType => {
    return {type: UNFOLLOW, userId}
}
type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>):setUsersActionType => {
    return {type: SET_USERS, users}
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number):setCurrentPageActionType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setTotalUsersCount = (totalCount: number):setTotalUsersCountActionType => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalCount}
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):toggleIsFetchingActionType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number):toggleFollowingProgressActionType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}


export const getUsersThunkCreator = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(false));
    let response = await usersApi.getUsersRequest(page, pageSize)
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersApi.followRequest.bind(usersApi), followSuccess);
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, usersApi.unfollowRequest.bind(usersApi), unfollowSuccess);
}

export default usersReducer;