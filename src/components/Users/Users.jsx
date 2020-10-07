import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
                 totalUsersCount,
                 pageSize,
                 currentPage,
                 onPageChanged,
                 users,
                 followingInProgress,
                 follow, unfollow
             }) => {
    return <div>
        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
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
}

export default Users;