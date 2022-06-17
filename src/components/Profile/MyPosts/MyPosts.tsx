import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";


export const MyPosts: React.FC<ProfilePageType> = (props) => {


    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button>Delete</button>
            </div>
            <div>

            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}