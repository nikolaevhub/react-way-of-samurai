import React from 'react';
import s from './Header.module.css';
import headerLogo from '../../assets/React-logo.png'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
        <div className={s.logoContainer}>
            <img src={headerLogo} alt={'logo'}/>
        </div>
        <h3>React Social Network Experience</h3>
        <div className={s.loginBlock}>
            {props.isAuth ? <div><Button onClick={props.logout} variant="contained">Log out</Button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;