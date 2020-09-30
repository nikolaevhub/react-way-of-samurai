const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id:8, message: body}]
            };
        default:
            return state;
    }
}
export const addMessageActionCreator = (newMessageText) => {return {type: ADD_MESSAGE, newMessageText}}

export default dialogsReducer;