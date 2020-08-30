import {rerenderTree} from "../render";

let state={
    profilePage:{
        posts: [
            {id: 1, message: 'How are you?', likesCount: 15},
            {id: 2, message: 'It`s my first post', likesCount: 20}
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
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
        newMessageText: 'messagetext'
    }
}

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 11
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText=newText;
    rerenderTree(state);
}

export default state;