import React from "react";
import styles from "../styles/Song.module.css";

const Song = ({ number, title, singer, album, date, time, imgUrl }) => {
  return (
    <tr className={styles.song}>
      <td>{number}</td>
      <td>
        <div>
          <div className={styles.image}>
            <img src={imgUrl} />
          </div>
          <div className={styles.title}>
            <span>{title}</span>
            <span>{singer}</span>
          </div>
        </div>
      </td>
      <td>{album}</td>
      <td>{date}</td>
      <td>{time}</td>
    </tr>
  );
};

export default Song;
