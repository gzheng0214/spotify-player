import React from "react";
import styles from "../styles/Playlist.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Song from "./Song";

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date Added</th>
            <th>
              <AiOutlineClockCircle />
            </th>
          </tr>
        </thead>
        <tbody>
          <Song
            number="1"
            singer="ITZY"
            title="DALLA DALLA"
            album="IT'z Different"
            date="Nov 27, 2020"
            time="3:19"
          />
          <Song
            number="1"
            singer="ITZY"
            title="DALLA DALLA"
            album="IT'z Different"
            date="Nov 27, 2020"
            time="3:19"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
