import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogs;
    let messages = props.messages;

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);
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
