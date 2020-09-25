import {getAuthUserData} from "./auth-reducer";

const SET_USER_DATA = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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

export const setInitializedSuccess = () => {
    return {type: SET_USER_DATA}
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        // let promise2 = dispatch(someThank);
        Promise.all([promise]).then(()=> {
            dispatch(setInitializedSuccess())
        })
    }
}

export default appReducer;