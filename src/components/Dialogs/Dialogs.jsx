import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};
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
]

let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id}/>);
let messageElements = messages.map( m => <Message message={m.message}/>);


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
