import React from "react";
import BlogContainer from "../../components/blogcard/Blogcard";
import "./page.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Home({ item }) {
  return (
    <>
      <div className="container">
        <BlogContainer />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
