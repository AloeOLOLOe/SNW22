import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>

            <header className='header'>
                <img src=" https://static.vecteezy.com/system/resources/thumbnails/002/871/080/small/owl-birds-logo-free-vector.jpg"/>
            </header>

            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>

            <div className='content'>
                <div>
                    <img src='https://st2.depositphotos.com/1035350/7670/i/950/depositphotos_76708101-stock-photo-macon-georgia-in-spring.jpg'/>
                </div>

                <div>Ava+ decription</div>

                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>



        </div>
    )
};




export default App;
