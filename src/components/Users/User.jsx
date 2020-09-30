import React from "react";
import defaultAvatar from "../../assets/DefaultAvatar.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.photo} src={user.photos.small != null ? user.photos.small : defaultAvatar}
                                 alt=""/>
                         </NavLink>
                        </div>
                    <div>
                            {user.followed ?
                                <button disabled={followingInProgress}
                                        onClick={() => {
                                            unfollow(user.id);
                                        }}>Unfollow</button> :
                                <button disabled={followingInProgress}
                                        onClick={() => {
                                            follow(user.id);
                                        }}>Follow</button>
                            }
                    </div>
                </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
    </div>
}

export default User;