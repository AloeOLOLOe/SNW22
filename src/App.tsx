import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Profile/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


const App: React.FC<RootStateType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogsPage.dialogs}
                                                                  messages={props.dialogsPage.messages}/>}/>
                </div>


            </div>
        </BrowserRouter>
    )
};


export default App;
