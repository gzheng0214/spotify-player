import React from "react";
import Head from "next/head";

const Layout = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "Spotify Player",
  description: "Get your Top 50 most played songs",
};

export default Layout;
