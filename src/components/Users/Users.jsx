import React from "react";
import defaultAvatar from "../../assets/DefaultAvatar.png";
import s from "./Users.module.css";


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
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : defaultAvatar} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
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