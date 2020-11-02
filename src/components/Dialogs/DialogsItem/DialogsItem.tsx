import React, {FC} from 'react'
import styles from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogType} from "../../../redux/types/types";

const DialogsItem: FC<DialogType> = ({id, name}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={styles.dialog + " " + styles.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

export default DialogsItem;
