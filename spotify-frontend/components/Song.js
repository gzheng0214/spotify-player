import React from "react";
import styles from "../styles/Song.module.css";
import Image from "next/image";

const Song = ({ number, title, singer, album, date, time }) => {
  return (
    <tr className={styles.song}>
      <td>{number}</td>
      <td>
        <div>
          <div className={styles.image}>
            <Image src="/images/dalla.png" layout="fill" />
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
