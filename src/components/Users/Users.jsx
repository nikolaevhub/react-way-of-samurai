import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import defaultAvatar from '../../assets/DefaultAvatar.png'

class Users extends React.Component {

     componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {
        return <div>
            {
                this.props.users.map(u => {
                        return <div key={u.id}>
                <span>
                    <div>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : defaultAvatar} alt=""/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
        </div>;
    }
}

export default Users;
