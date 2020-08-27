import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Svetka', id: 3},
    {name: 'Petya', id: 4}
];
let messages = [
    {id: 1, message: 'Медленно минуты уплывают вдаль'},
    {id: 2, message: 'Встречи с ними ты уже не жди'},
    {id: 3, message: 'И хотя нам прошлого немного жаль'},
    {id: 4, message: 'Лучшее конечно впереди'}
];
let posts = [
    {id: 1, message: 'How are you?', likesCount: 15},
    {id: 2, message: 'It`s my first post', likesCount: 20}
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
