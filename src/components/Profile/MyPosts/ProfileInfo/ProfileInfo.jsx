import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import defaultAvatar from "../../../../assets/DefaultAvatar.png";

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || defaultAvatar} alt="Avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateProfileStatus={updateProfileStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;