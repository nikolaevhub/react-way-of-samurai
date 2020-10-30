import {getAuthUserData} from "./auth-reducer";

const SET_USER_DATA = 'SET_INITIALIZED';

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export type initializedSuccessActionType = {
    type: typeof SET_USER_DATA
}

export const setInitializedSuccess = (): initializedSuccessActionType => {
    return {type: SET_USER_DATA}
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then(() => {
            dispatch(setInitializedSuccess())
        })
    }
}

export default appReducer;