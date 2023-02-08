import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import LoginPage from "./components/Login/Login";
//
type PropsType = {}

function App(props: PropsType) {

    return (
        <div className="appWrapper">
            <HeaderConteiner/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                {/*<Route path='/profile/*'
                           element={<ProfileContainer/>}
                    />*/}
                <Route path='/users'
                       render={() => <UsersContainer/>}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>

            </div>
        </div>


    );
}

export default App;
