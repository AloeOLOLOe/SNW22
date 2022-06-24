import React from 'react';
import './index.css';
import {state} from "./redux/state";
import {rerenderEntireTree} from "./render";

/*export let rerenderEntireTree=()=>{
ReactDOM.render(
    <BrowserRouter>
    <App state={state}  addPostCallBack={addPost} />,

    </BrowserRouter>,document.getElementById('root')
);}*/
rerenderEntireTree(state)