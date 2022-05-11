import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    let postData = [
        {id: 0, message: "hello", likesCount: 11},
        {id: 1, message: "bye", likesCount: 22}
    ]
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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}