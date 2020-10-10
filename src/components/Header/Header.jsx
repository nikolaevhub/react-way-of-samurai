import React from 'react';
import styles from './Header.module.css';
import headerLogo from '../../assets/React-logo.png'
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={headerLogo} alt={'logo'}/>
        </div>
        <h3>React Social Network Experience</h3>
        <div className={styles.loginBlock}>
            {props.isAuth ? <div className={styles.loginBlockContainer}>
                    <Button onClick={props.logout} variant="contained" size={'small'}>Log out</Button>
                    <div>{props.login}</div>
            </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;