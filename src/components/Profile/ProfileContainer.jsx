import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileStatus,
    getUserProfile,
    setUserProfile,
    updateProfileStatus,
    savePhoto,
    saveProfile
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        if (this.props.isAuth) this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateProfileStatus={this.props.updateProfileStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getUserProfile,
        getProfileStatus,
        updateProfileStatus,
        savePhoto,
        saveProfile
    }),
    withRouter
)(ProfileContainer);


