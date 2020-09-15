import React from "react";
import defaultAvatar from "../../assets/DefaultAvatar.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.id} onClick={(e) => props.onPageChanged(p)}
                             className={props.currentPage === p && s.selectedPage}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => {
                    return <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.photo} src={u.photos.small != null ? u.photos.small : defaultAvatar}
                                 alt=""/>
                         </NavLink>
                        </div>
                    <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": '1d2450bf-cc12-47c6-a828-8bdd69ea5641'
                                        }
                                    }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        }
                                    );
                                }
                                }>Unfollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": '1d2450bf-cc12-47c6-a828-8bdd69ea5641'
                                        }
                                    }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        }
                                    );
                                }
                                }>Follow</button>
                            }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                    </div>
                }
            )
        }
    </div>
}

export default Users;