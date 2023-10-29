"use client";

import React, { useEffect, useState } from "react";
import { blogData, getBlogData } from "../../../data/blogData";
import "./singleblog.css";

function SingleBlog() {
  // Bu bileşende kullanılacak olan state değişkenlerini tanımlayın.
  const [blogItem, setBlogItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogData();

      const searchBlog = new URLSearchParams(window.location.search);
      const blogId = searchBlog.get("id");

      const foundBlogItem = blogData.find((item) => item.id === Number(blogId));

      // Bulunan blog öğesini state'e kaydedin.
      setBlogItem(foundBlogItem);
    };

    fetchData();
  }, [window.location.search]);
  return (
    <div>
      {blogItem ? (
        <div className="container-single">
          <div className="kapsama">
            <img
              src={blogItem.img}
              alt="Yazı Resmi"
              className="yazi-fotografi"
            />

            <div className="author-profile">
              <div className="author-details">
                <div className="user-avatar">
                  <img
                    className="user-avatar-img"
                    src="images/author-avatar.jpg"
                    alt="User Avatar"
                  />
                </div>
                <div className="user-info">
                  <h6 className="user-name">Kullanıcı İsmi</h6>
                  <small className="user-title">Ünvan</small>
                </div>
              </div>
              <div className="user-actions">
                <a href="#" className="btn">
                  Bütün Yazılar
                </a>
              </div>
            </div>

            <div className="user-bottom">
              <div className="user-description">
                Kendisi hakkında kısa bir açıklama metni burada yer alabilir.
              </div>
              <div className="user-social-links">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <h2 className="yazi-basligi">{blogItem.title}</h2>

            <p className="yazi-icerigi">{blogItem.content}</p>
            {blogItem.subtitle ? (
              <h2 className="sub-title">
                <i className="fa fa-space-shuttle" aria-hidden="true"></i>{" "}
                {blogItem.subtitle}
              </h2>
            ) : null}
            {blogItem.subcontent ? (
              <p className="sub-yazi-icerigi">{blogItem.subcontent}</p>
            ) : null}

            {blogItem.quote ? (
              <div className="yazi-alinti">{blogItem.quote}</div>
            ) : null}

            <h3>Diğer Blog Yazıları</h3>

            <div className="diger-bloglar">
              <div className="diger-blog-card">
                <img
                  src="images/software.jpg"
                  alt="Diğer Blog Resmi"
                  className="diger-blog-img"
                />
                <div className="other-blog-content">
                  <hr />

                  <h4 className="other-blog-title">
                    Yazılım Testleri: Bir Geliştiricinin En İyi Arkadaşı
                  </h4>
                  <p className="other-blog-date">15 Ağustos 2023</p>
                </div>
              </div>
              <div className="diger-blog-card">
                <img
                  src="images/nmap.jpg"
                  alt="Diğer Blog Resmi"
                  className="diger-blog-img"
                />
                <div className="other-blog-content">
                  <hr />

                  <h4 className="other-blog-title">
                    Ağ Keşfi ve Güvenlik Analizi için Nmap Kullanım Rehberi
                  </h4>
                  <p className="other-blog-date">20 Ağustos 2023</p>
                </div>
              </div>
              <div className="diger-blog-card">
                <img
                  src="images/seo2.jpg"
                  alt="Diğer Blog Resmi"
                  className="diger-blog-img"
                />
                <div className="other-blog-content">
                  <hr />

                  <h4 className="other-blog-title">
                    Etkili İnternet Reklamcılığı Stratejileri
                  </h4>
                  <p className="other-blog-date">20 Ağustos 2023</p>
                </div>
              </div>
              <div className="diger-blog-card">
                <img
                  src="images/api.jpg"
                  alt="Diğer Blog Resmi"
                  className="diger-blog-img"
                />
                <div className="other-blog-content">
                  <hr />

                  <h4 className="other-blog-title">
                    API'lar 101: Temel API Kavramları ve Kullanım Senaryoları
                  </h4>
                  <p className="other-blog-date">20 Ağustos 2023</p>
                </div>
              </div>
            </div>
            <div className="yorumlar">
              <h3>Yorumlar</h3>
              <ul className="yorum-listesi">
                <li className="yorum">
                  <div className="yorum-yazar">Ahmet</div>
                  <div className="yorum-tarih">12 Ağustos 2023</div>
                  <div className="yorum-icerik">Harika yazı! Teşekkürler.</div>
                </li>
                <li className="yorum">
                  <div className="yorum-yazar">Ayşe</div>
                  <div className="yorum-tarih">13 Ağustos 2023</div>
                  <div className="yorum-icerik">
                    Eksiksiz ve bilgilendirici bir yazı olmuş.
                  </div>
                </li>
              </ul>
              <form className="yorum-ekleme-formu">
                <h4>Yorum Yap</h4>
                <input
                  type="text"
                  id="yorum-yazar"
                  name="yorum-yazar"
                  required
                  placeholder="İsminiz"
                />
                <br />
                <br />
                <textarea
                  id="yorum-icerik"
                  name="yorum-icerik"
                  rows="4"
                  required
                  placeholder="Bloga dair yorumunuz...."
                ></textarea>
                <button type="submit">Yorumu Gönder</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p>Blog bulunamadı.</p>
      )}
    </div>
  );
}

export default SingleBlog;
