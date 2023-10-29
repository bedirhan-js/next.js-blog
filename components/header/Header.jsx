"use client";

import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import serialize from "form-serialize";

const Header = () => {
  const [blogFormVisible, setBlogFormVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDataURL, setImageDataURL] = useState(""); // Base64 veri URL'si için state



  const openBlogForm = () => {
    setBlogFormVisible(true);
  };

  const closeForm = () => {
    setBlogFormVisible(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        // console.log("Base64 Veri URL'si:", base64Data);
        setSelectedImage(base64Data);
        setImageDataURL(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newBlog = serialize(e.target, { hash: true });


    if (newBlog.title && selectedImage && newBlog.content) {
      try {
        const response = await fetch("http://localhost:3002/datablog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...newBlog,
            img: imageDataURL, // Base64 formatında fotoğraf verisini ekleyin
          }),
        });

        if (!response.ok) {
          throw new Error("HTTP isteği başarısız!");
        }

        // İsteğin başarılı olduğunu varsayalım. Sunucudan dönen yanıtı alabilirsiniz.
        const responseData = await response.json();
        // console.log("Sunucudan gelen yanıt:", responseData);

        if (response.ok) {
          setBlogFormVisible(false);
          setSelectedImage("");
        }
        // Sunucudan dönen yanıtı kullanarak gerektiğinde başka işlemler yapabilirsiniz.
      } catch (error) {
        console.error("Hata oluştu:", error);
      }
    } else {
      alert("Lütfen blog başlığı blog içeriği ve blog resmi seçin");
    }
  };

  return (
    <React.Fragment>
      <header className="blog-header">
        <div className="header-content">
          <h1 className="blog-title">Bedirhan blog</h1>
          <p className="blog-slogan">Güncel paylaşımlar ve deneyimler</p>
          <button id="createBlogButton" onClick={openBlogForm}>
            Blog Oluştur
          </button>
          <Link href="/" className="home-btn">
            Anasayfa
          </Link>
        </div>
      </header>
      {blogFormVisible && (
        <div id="blogForm" className="modal">
          <button id="closeButton" onClick={closeForm}>
            ×
          </button>
          <h2>Resim Ekle</h2>
          <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <input
              name="img"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{ display: "block", maxWidth: "300px", height: "auto" }}
              />
            )}
            <h2>Blog Başlığı</h2>
            <input name="title" type="text" id="blogTitleInput" />
            <h2>Blog Yazısı</h2>
            <textarea
              name="content"
              id="blogContentInput"
              rows="4"
              cols="50"
            ></textarea>
            <h3>Alt Başlık</h3>
            <input name="subtitle" type="text" id="subTitleInput" />
            <h3>Alt Başlık Yazısı</h3>
            <textarea
              name="subcontent"
              id="subTitleContentInput"
              rows="4"
              cols="50"
            ></textarea>
            <h4>Alıntı</h4>
            <input name="quote" type="text" id="quoteInput" />
            <button id="saveButton">Kaydet</button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
