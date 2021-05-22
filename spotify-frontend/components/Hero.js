import React, { useState } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

function millisecondsToHoursAndMinutes(millis) {
  var hours = Math.floor(millis / (1000 * 60 * 60));
  var minutes = ((millis % (1000 * 60 * 60)) / (1000 * 60)).toFixed(0);

  return hours + " hr " + minutes + " min";
}

const Hero = ({ time }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/topsongs.png" layout="fill" />
      </div>
      <div className={styles.text}>
        <span>Playlist</span>
        <h1>Your Top Songs</h1>
        <p>The songs you loved most, all wrapped up.</p>
        <p>
          <span>Spotify</span> &#183; 50 songs,{" "}
          {millisecondsToHoursAndMinutes(time)}
        </p>
      </div>
    </div>
  );
};

export default Hero;
