import {reset} from 'redux-form';
import {DialogType, MessageType} from "./types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Svetka', id: 3},
        {name: 'Petya', id: 4}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'First'},
        {id: 2, message: 'Second'},
        {id: 3, message: 'Third'},
        {id: 4, message: 'Fourth'}
    ] as Array<MessageType>
};

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}],
            };
        default:
            return state;
    }
}

type addMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}

export const addMessageActionCreator = (newMessageText:string):addMessageActionCreatorType => {
    return {type: ADD_MESSAGE, newMessageText}
}

export const addMessage = (newMessageText:string) => (dispatch:any) => {
    dispatch(addMessageActionCreator(newMessageText));
    dispatch(reset('dialogsAddMessage'));
}
export default dialogsReducer;