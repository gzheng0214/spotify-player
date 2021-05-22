import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
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
          <span>Spotify</span> &#183; 100 songs, 5 hr 38 min
        </p>
      </div>
    </div>
  );
};

export default Hero;
