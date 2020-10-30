import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css"
import {UserType} from "../../redux/types/types";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (userId:number) => void,
    unfollow: (userId:number) => void
}

const Users: FC<PropsType> = ({totalUsersCount,
                                  pageSize,
                                  currentPage,
                                  onPageChanged, users,
                                  followingInProgress,
                                  follow, unfollow,
                              ...props}) => {
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