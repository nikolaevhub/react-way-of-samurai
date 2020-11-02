import React, {FC} from 'react'
import styles from './Header.module.css'
import headerLogo from '../../assets/React-logo.png'
import Button from "@material-ui/core/Button"
import {NavLink} from 'react-router-dom'

type PropsType = {
    isAuth: boolean
    loginInfo: string | null
    logout: () => void
}

const Header: FC<PropsType> = ({isAuth, loginInfo, logout}) => {
    return <header className={styles.header}>
        <div className={styles.logoContainer}>
            <img src={headerLogo} alt={'logo'}/>
        </div>
        <h3>React Social Network Experience</h3>
        <div className={styles.loginBlock}>
            {isAuth ? <div className={styles.loginBlockContainer}>
                    <Button onClick={logout} variant="contained" size={'small'}>Log out</Button>
                    <div>{loginInfo}</div>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;