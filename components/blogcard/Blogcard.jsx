"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getBlogData } from "../../data/blogData";
import "./blogcard.css";

function Blogcard({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <div className="custom-blog-card">
      <div className="custom-blog-img">
        <img
          id="blog-resim"
          src={item.img}
          alt="Blog Resmi"
          className="blog-img"
        />
      </div>
      <div className="padding">
        <button className="delete-btn" onClick={handleDelete}>
          ×
        </button>
        <h2 className="blog-heading">{item.title}</h2>
        <p className="blog-summary">{item.content.slice(0, 200)}...</p>
        <hr className="custom-divider" />
        <div className="comment-section">
          <div className="author-info">
            <span className="author-name">
              <img
                src="images/author-avatar.jpg"
                alt="Yazar Avatarı"
                className="author-avatar"
              />
              John Doe
            </span>
            <span className="comment-count">&#128172; 5 Yorum</span>
            <span className="publish-date">16 ocak 2004</span>
          </div>
          <Link href={`/single?id=${item.id}`} className="read-more-btn">
            <i
              id="logo"
              className="fa fa-share custom-icon"
              aria-hidden="true"
            ></i>
            <span id="ikra">Tüm yazıyı oku</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogContainer() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogData();
        setBlogData(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Veri çekme hatası:", error);
        setIsLoading(false); // Set loading to false on error as well
      }
    };

    fetchData();
  }, [blogData]);

  const handleDelete = async (itemId) => {
    try {
      await fetch(`http://localhost:3002/datablog/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Silme işlemi başarılı ise güncel verileri yeniden yükle
      const updatedDataResponse = await fetch("http://localhost:3002/datablog");
      if (!updatedDataResponse.ok) {
        throw new Error("Veri çekme hatası");
      }
      const updatedData = await updatedDataResponse.json();
      setBlogData(updatedData);
    } catch (error) {
      console.error("Veri silme hatası:", error);
    }
  };
  return (
    <div className="main-content">
      {isLoading ? ( // Display loading screen if isLoading is true
        <div className="loading-screen">Loading...</div>
      ) : (
        blogData.map((item) => (
          <Blogcard key={item.id} item={item} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
