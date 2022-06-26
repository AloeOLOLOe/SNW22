import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>;
    addPostCallBack: (postMessage: string) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
        }

        // @ts-ignore
        newPostElement.current.value = ''

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