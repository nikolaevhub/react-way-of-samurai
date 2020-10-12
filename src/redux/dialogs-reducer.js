import {reset} from 'redux-form';

const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Svetka', id: 3},
        {name: 'Petya', id: 4}
    ],
    messages: [
        {id: 1, message: 'First'},
        {id: 2, message: 'Second'},
        {id: 3, message: 'Third'},
        {id: 4, message: 'Fourth'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}]
            };
        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText) => {
    return {type: ADD_MESSAGE, newMessageText}
}

export const addMessage = (newMessageText) => (dispatch) => {
    dispatch(addMessageActionCreator(newMessageText));
    dispatch(reset('dialogsAddMessage'));
}
export default dialogsReducer;