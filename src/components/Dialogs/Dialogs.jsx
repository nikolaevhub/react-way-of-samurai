import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = '/dialogs/'+ props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name="Dimych" id="1" />
        <DialogsItem name="Andrey" id="2" />
        <DialogsItem name="Svetka" id="3" />
        <DialogsItem name="Petya" id="4" />
      </div>
      <div className={s.messages}>
        <Message message="Медленно минуты уплывают вдаль" />
        <Message message="Встречи с ними ты уже не жди" />
        <Message message="И хотя нам прошлого немного жаль" />
        <Message message="Лучшее конечно впереди" />
      </div>
    </div>
  );
};

export default Dialogs;
