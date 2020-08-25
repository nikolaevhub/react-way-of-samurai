import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog+ ' '+s.active}>Dimich</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Svetka</div>
        <div className={s.dialog}>Petya</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Медленно минуты уплывают вдаль</div>
        <div className={s.message}>Встречи с ними ты уже не жди</div>
        <div className={s.message}>И хотя нам прошлого немного жаль</div>
        <div className={s.message}>Лучшее конечно впереди</div>
      </div>
    </div>
  );
};

export default Dialogs;
