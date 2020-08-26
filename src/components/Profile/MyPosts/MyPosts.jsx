import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


let messagesData = [
    {id: 1, message: 'How are you?', likesCount: 15},
    {id: 2, message: 'It`s my first post', likesCount: 20}
]

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={messagesData[0].message} like={messagesData[0].likesCount}/>
                <Post message={messagesData[1].message} like={messagesData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;
