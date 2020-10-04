import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({status, profile, updateProfileStatus, store, isOwner, savePhoto,saveProfile}) => {

    return <div className={s.content}>
        <ProfileInfo profile={profile}
                     status={status}
                     updateProfileStatus={updateProfileStatus}
                     isOwner={isOwner}
                     savePhoto={savePhoto}
                     saveProfile={saveProfile}
        />
        <MyPostsContainer store={store}/>
    </div>
}

export default Profile;