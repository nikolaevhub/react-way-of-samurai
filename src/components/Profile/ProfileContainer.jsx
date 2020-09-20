import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileStatus, getUserProfile, setUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '11507'
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status = {this.props.status}
                     updateProfileStatus = {this.props.updateProfileStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile,getProfileStatus,updateProfileStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


