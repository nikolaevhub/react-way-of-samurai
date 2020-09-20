import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => {
    return {type: SET_USER_DATA, userId, login, email}
}

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, login, email))
                }
            }
        );
    }
}

export default authReducer;