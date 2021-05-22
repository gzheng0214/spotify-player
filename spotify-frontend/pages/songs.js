import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Playlist from "../components/Playlist";

export default function Songs() {
  return (
    <Layout title="Spotify - Your Top 50 Songs" description="Your top 50 songs">
      <Hero />
      <Playlist />
    </Layout>
  );
}
