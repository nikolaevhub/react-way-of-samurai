import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post like='15'/>
        <Post like='20'/>
      </div>
    </div>
  );
};

export default MyPosts;
