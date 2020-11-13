import {profileAPI} from "../api/api";
import {stopSubmit, reset} from "redux-form";
import {PhotosType, PostType, ProfileType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


const initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 20}
    ] as Array<PostType>,
    newPostText: 'Пирожок' as string,
    profile: null as null | ProfileType,
    status: ''
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 57,
                message: action.newPostText,
                newPostText: 'Пирожок',
                likesCount: 11,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}

        default:
            return state;
    }
}

type ActionsTypes =
    addPostActionCreatorType
    | setUserProfileType
    | setStatusType
    | deletePostType
    | savePhotoSuccessType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


type addPostActionCreatorType = {
    type: typeof ADD_POST;
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => {
    return {type: ADD_POST, newPostText}
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
}

type setStatusType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusType => {
    return {type: SET_STATUS, status}
}

type deletePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export const deletePost = (postId: number): deletePostType => ({type: DELETE_POST, postId})

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const addPost = (newPostText: string) => (dispatch: any) => {
    dispatch(addPostActionCreator(newPostText))
    dispatch(reset('ProfileAddNewPostForm'))
}

export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateProfileStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}))
    }
}

export default profileReducer;