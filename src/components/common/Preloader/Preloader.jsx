import React from "react";
import styles from "../../common/Preloader/Preloader.module.css";
import preloader from "../../../assets/images.png";

let Preloader = (props) => {
    return <div>
        <img className={styles.preloader} src={preloader}/>
    </div>
}

export default Preloader;