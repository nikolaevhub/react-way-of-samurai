import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs;
    let messages = props.state.messages;

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);

    let newMessage = React.createRef();
    let addMesage = () => {
        let text = newMessage.current.value;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea ref={newMessage}></textarea>
                <div>
                    <button onClick={addMesage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
