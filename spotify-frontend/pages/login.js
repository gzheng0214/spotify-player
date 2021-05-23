import React, { useState, useEffect } from "react";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const client_id = process.env.CLIENT_ID; // Your client id
const redirect_uri = "http://localhost:3000/playlist"; // Your redirect uri
const scopes = "user-top-read";

const login = () => {
  const [token, setToken] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push(`/playlist/${token}`);
    }
  });
  return (
    <Layout title="Login" description="Login">
      <div className={styles.login}>
        <button>
          <a
            className="btn btn--loginApp-link"
            href={
              "https://accounts.spotify.com/authorize" +
              "?response_type=token" +
              "&client_id=" +
              client_id +
              (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
              "&redirect_uri=" +
              redirect_uri +
              "&show_dialog=true"
            }
          >
            Login with Spotify
          </a>
        </button>
      </div>
    </Layout>
  );
};

export default login;
