import React from "react";
import s from "./FormsControls.module.css";

const FormControl = FormControl => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <FormControl {...input} {...props} />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

export const Textarea = FormControl('textarea');

export const Input = FormControl('input')