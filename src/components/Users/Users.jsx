import React from "react";
import defaultAvatar from "../../assets/DefaultAvatar.png";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/api";

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
                            {
                                u.followed ?
                                    <button disabled={props.followingInProgress}
                                            onClick={() => {
                                                props.toggleFollowingProgress(true);
                                                usersApi.unfollowRequest(u.id).then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.unfollow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false)
                                                    }
                                                );
                                            }
                                            }>Unfollow</button> :
                                    <button disabled={props.followingInProgress}
                                            onClick={() => {
                                                props.toggleFollowingProgress(true);
                                                usersApi.followRequest(u.id).then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(u.id)
                                                        }
                                                        props.toggleFollowingProgress(false)
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