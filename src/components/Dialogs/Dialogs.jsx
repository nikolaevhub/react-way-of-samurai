import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.addMessageAction(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <NewMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageText'} component={'textarea'} placeholder={'Enter new message'}> </Field>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const NewMessageFormRedux = reduxForm({
    form: 'dialogsAddMessage'
})(NewMessageForm);

export default Dialogs;
