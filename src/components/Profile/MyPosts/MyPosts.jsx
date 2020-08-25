import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

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
                <Post like='15'/>
                <Post like='20'/>
            </div>
        </div>
    );
};

export default MyPosts;
