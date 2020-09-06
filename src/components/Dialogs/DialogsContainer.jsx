import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();
    let newMessageText = state.newMessageText;
    let dialogsPage = state.dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateNewMessageText = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    return <Dialogs updateNewMessageBody={updateNewMessageText}
                    addMessageAction={addMessage}
                    newMessageText={newMessageText}
                    dialogsPage={dialogsPage}
    />;
};

export default DialogsContainer;
