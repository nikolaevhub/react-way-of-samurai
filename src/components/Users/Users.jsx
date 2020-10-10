import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css"

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow}) => {
    return <div>
        <div className={styles.paginatorContainer}>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
        </div>
        <div className={styles.usersContainer}>
            {
                users.map(user => {
                        return <User user={user}
                                     followingInProgress={followingInProgress}
                                     follow={follow}
                                     unfollow={unfollow}
                                     key={user.id}
                        />
                    }
                )
            }
        </div>

    </div>
}

export default Users;