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
let dialogsData = [
    {name: 'Dimych', id: 1},
    {name: 'Andrey', id: 2},
    {name: 'Svetka', id: 3},
    {name: 'Petya', id: 4}
];
let messagesData = [
    {id: 1, message: 'Медленно минуты уплывают вдаль'},
    {id: 2, message: 'Встречи с ними ты уже не жди'},
    {id: 3, message: 'И хотя нам прошлого немного жаль'},
    {id: 4, message: 'Лучшее конечно впереди'}
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
};

export default Dialogs;
