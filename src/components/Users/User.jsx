import React from "react"
import defaultAvatar from "../../assets/DefaultAvatar.png"
import styles from "./Users.module.css"
import {NavLink} from "react-router-dom"

let User = ({user, follow, unfollow, followingInProgress}) => {
    return (
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={styles.photo} src={user.photos.small != null
                        ? user.photos.small
                        : defaultAvatar}
                         alt=""/>
                </NavLink>
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some((id) => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button> :
                    <button disabled={followingInProgress.some((id) => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>Follow</button>
                }
            </div>
        </div>)
}

export default User