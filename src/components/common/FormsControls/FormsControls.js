import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = FormControl => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <FormControl {...input} {...props} />
            {hasError && <span> {error} </span>}
        </div>
    );
};

export const Textarea = FormControl('textarea');

export const Input = FormControl('input')

export const createField = (placeholder, name, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder}
                   component={component}
                   name={name}
                   validate={validators}
                   {...props}
            />{text}
        </div>
    )
}