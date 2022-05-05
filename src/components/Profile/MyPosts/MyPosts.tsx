import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
                <button>Delete</button>
            </div>
            <div>

            </div>
            <div className={s.post}>
                <Post message='Hi,how are you'/>
                <Post message='Its my first post'/>
            </div>
        </div>
    )
}