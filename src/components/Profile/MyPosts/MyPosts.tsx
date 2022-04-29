import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My post
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete</button>
            <div>
                New post
            </div>
            <div className={s.post}>
                <Post message='Hi,how are you'/>
                <Post message='Its my first post'/>
            </div>
        </div>
    )
}