
let state={
    profilePage:{
        posts: [
            {id: 1, message: 'How are you?', likesCount: 15},
            {id: 2, message: 'It`s my first post', likesCount: 20}
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likesCount: 11
    }
    state.profilePage.posts.push(newPost);
}

export default state;