import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Playlist from "../components/Playlist";
import { useRouter } from "next/router";

const url =
  "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50&offset=0";

export default function Songs() {
  const [time, setTime] = useState(0);
  const [token, setToken] = useState(null);
  const [tracks, setTracks] = useState([]);
  const router = useRouter();

  const getTopTracks = async (accessToken) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
    const data = await res.json();
    setTracks(data.items);
    let totalTime = 0;
    data.items.forEach((track) => {
      totalTime += track.duration_ms;
    });
    setTime(totalTime);
  };

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    getTopTracks(_token);
  }, []);

  return (
    <Layout title="Spotify - Your Top 50 Songs" description="Your top 50 songs">
      <Hero time={time} />
      <Playlist tracks={tracks} />
    </Layout>
  );
}
