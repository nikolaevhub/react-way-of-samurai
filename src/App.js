import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Switch>
                            <Route exact path="/" render={() => (<Redirect to="/profile"/>)}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                            <Route path='*' render={() => <div>404 Not Found</div>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppWrapper = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

const SocialNetwork = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppWrapper/>
        </Provider>
    </BrowserRouter>
}
export default SocialNetwork;