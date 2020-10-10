import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validarors/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo((props) => {

    let posts = props.posts;
    let postsElements = posts.map(p => <Post message={p.message} key={p.id} like={p.likesCount}/>)

    let addPost = (value) => {
        props.addPost(value.newPostText);
    }
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <NewPostFormRedux onSubmit={addPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
})

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Add new post'} name={'newPostText'} component={Textarea} validate={[required, maxLength10]}></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const NewPostFormRedux = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

export default MyPosts;
