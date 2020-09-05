import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={updateNewMessageText} ref={newMessage} value={props.dialogsPage.newMessageText}></textarea>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
