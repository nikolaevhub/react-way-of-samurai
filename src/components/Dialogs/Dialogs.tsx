import React, {FC} from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validarors/validators";
import {DialogType, MessageType} from "../../redux/types/types";
import {MessageFormRedux} from "./MessageForm/MessageForm";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (text: string) => void
}

const Dialogs: FC<PropsType> = ({dialogs, messages, addMessage}) => {

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values: any) => {
        addMessage(values.newMessageText);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <MessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;
