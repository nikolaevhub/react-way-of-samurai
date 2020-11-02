import {maxLengthCreator, required} from "../../../utils/validarors/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React, {FC} from "react";

const maxLength50 = maxLengthCreator(50);

const MessageForm =  (props) => {
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

export const MessageFormRedux = reduxForm({
    form: 'dialogsAddMessage'
})(MessageForm);