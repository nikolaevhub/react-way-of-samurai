import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="data:image/png;base64,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"
        alt="Аватар"
      />
        {props.message}
      <div>{props.like} Like</div>
    </div>
  );
};

export default Post;
