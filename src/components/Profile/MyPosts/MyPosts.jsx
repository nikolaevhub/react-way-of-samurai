import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
    let posts = props.posts;
    let postsElements = posts.map(p => <Post message={p.message} like={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea> </textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
