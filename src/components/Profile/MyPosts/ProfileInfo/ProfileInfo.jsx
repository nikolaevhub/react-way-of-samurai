import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../../ProfileStatusWithHooks";
import defaultAvatar from "../../../../assets/DefaultAvatar.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(setEditMode(false))
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || defaultAvatar} alt="Avatar"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={profile}
                                   goToEditMode={() => setEditMode(true)}
                                   isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status}
                                        updateProfileStatus={updateProfileStatus}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && <div>My professional skills: {profile.lookingForAJobDescription}</div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {
            Object.keys(profile.contacts)
                .map(key => <Contact key={key} contactTitle={key}
                                     contactValue={profile.contacts[key]}/>)}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;