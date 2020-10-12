import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validarors/validators";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialogs;
    let messages = props.dialogsPage.messages;

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message} key={m.id}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <NewMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageText'}
                   component={Textarea}
                   placeholder={'Enter new message'}
                   validate={[required, maxLength50]}> </Field>
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
