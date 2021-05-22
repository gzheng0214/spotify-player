import React from "react";
import styles from "../styles/Playlist.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import Song from "./Song";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const Playlist = ({ tracks }) => {
  const renderedTracks = tracks
    ? tracks.map((track, index) => {
        const date = new Date();
        return (
          <Song
            number={index + 1}
            singer={track.artists[0].name}
            title={track.name}
            album={track.album.name}
            imgUrl={track.album.images[2].url}
            date={
              date.toLocaleString("default", { month: "short" }) +
              " " +
              date.getDate() +
              ", " +
              date.getFullYear()
            }
            time={millisToMinutesAndSeconds(track.duration_ms)}
            key={index}
          />
        );
      })
    : null;
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
        <tbody>{renderedTracks}</tbody>
      </table>
    </div>
  );
};

export default Playlist;
