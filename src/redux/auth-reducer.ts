import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

// export type initialStateType2 = {
//     userId: number | null,
//     login: string | null,
//     email: string | null,
//     isAuth: boolean,
//     isFetching: boolean,
//     captchaUrl: string | null
// }

let initialState = {
    userId: null as number | null,
    login: null as number | null,
    email: null as number | null,
    isAuth: false as boolean,
    isFetching: false as boolean,
    captchaUrl: null as string|null
}

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type authUserDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type authUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: authUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): authUserDataActionType => {
    return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
}

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
    }
}


export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;