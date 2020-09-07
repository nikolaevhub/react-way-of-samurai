const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Svetka', id: 3},
        {name: 'Petya', id: 4}
    ],
    messages: [
        {id: 1, message: 'Медленно минуты уплывают вдаль'},
        {id: 2, message: 'Встречи с ними ты уже не жди'},
        {id: 3, message: 'И хотя нам прошлого немного жаль'},
        {id: 4, message: 'Лучшее конечно впереди'}
    ],
    newMessageText: 'Вишенка'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: text}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer;