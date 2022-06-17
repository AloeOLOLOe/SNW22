import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Profile/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {HolySheetType, RootStateType} from "./redux/state";


const App:React.FC<HolySheetType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}/>}/>
                </div>


            </div>
        </BrowserRouter>
    )
};


export default App;
