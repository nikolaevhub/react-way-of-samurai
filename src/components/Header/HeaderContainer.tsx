import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/auth-reducer'
import {AppStateType} from '../../redux/redux-store'

type MapStateToPropsType = {
    isAuth: boolean
    loginInfo: string | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props}/>

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    loginInfo: state.auth.email
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {logout})(HeaderContainer)