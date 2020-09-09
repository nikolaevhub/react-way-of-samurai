import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let old_store = {
    // _state: {
    //     profilePage: {
    //         posts: [
    //             {id: 1, message: 'How are you?', likesCount: 15},
    //             {id: 2, message: 'It`s my first post', likesCount: 20}
    //         ],
    //         newPostText: 'Пирожок'
    //     },
    //     dialogsPage: {
    //         dialogs: [
    //             {name: 'Dimych', id: 1},
    //             {name: 'Andrey', id: 2},
    //             {name: 'Svetka', id: 3},
    //             {name: 'Petya', id: 4}
    //         ],
    //         messages: [
    //             {id: 1, message: 'Медленно минуты уплывают вдаль'},
    //             {id: 2, message: 'Встречи с ними ты уже не жди'},
    //             {id: 3, message: 'И хотя нам прошлого немного жаль'},
    //             {id: 4, message: 'Лучшее конечно впереди'}
    //         ],
    //         newMessageText: 'Вишенка'
    //     },
    //     sidebar: {}
    // },
    _callSubscriber() {
        console.log('State was changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default old_store;
window.store = old_store;