import {profileAPI, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 20}
    ],
    newPostText: 'Пирожок',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 11
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then(data => {
                dispatch(setUserProfile(data));
            }
        )
    }
}
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setStatus(response.data));
            }
        )
    }
}
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            }
        )
    }
}

export default profileReducer;