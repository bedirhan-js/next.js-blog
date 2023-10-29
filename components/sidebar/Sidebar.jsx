import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sticky" style={{ position: "sticky", top: "0px" }}>
        <div className="search">
          <input type="text" placeholder="Arama yap..." />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="categories">
          <h3>Kategoriler</h3>
          <ul>
            <li style={{ borderBottom: "none" }}>
              <a href="#">Teknoloji</a>
              <span style={{ marginLeft: "57px" }}> (12) </span>
            </li>
            <li>
              <a href="#">Gezi</a>
              <span style={{ marginLeft: "57px" }}> (3) </span>
            </li>
            <li style={{ borderTop: "none" }}>
              <a href="#">Yemek Tarifleri</a>
              <span style={{ marginLeft: "57px" }}> (5) </span>
            </li>
          </ul>
        </div>
        <div className="other-blogs">
          <h3>Diğer Blog Yazıları</h3>
          <div className="other-blog-card">
            <img
              src="images/node.png"
              alt="Diğer Blog Resmi"
              className="other-blog-img"
            />
            <div className="other-blog-content">
              <h4 className="other-blog-title">
                <a href="#">Node.js ile server nasıl kurulur?</a>
              </h4>
              <p className="other-blog-date">15 Ağustos 2023</p>
            </div>
          </div>
          <div className="other-blog-card">
            <img
              src="images/seo-hizmeti.jpg"
              alt="Diğer Blog Resmi"
              className="other-blog-img"
            />
            <div className="other-blog-content">
              <h4 className="other-blog-title">
                <a href="#">İyi bir seo için gereklilikler</a>
              </h4>
              <p className="other-blog-date">20 Ağustos 2023</p>
            </div>
          </div>
          {/* <!-- Diğer blog yazıları HTML içeriği --> */}
        </div>
        <div className="tags">
          <h3>Etiketler</h3>
          <div className="tag-list">
            <a href="#" className="tag">
              Teknoloji
            </a>
            <a href="#" className="tag">
              Gezi
            </a>
            <a href="#" className="tag">
              Yemek Tarifleri
            </a>
            <a href="#" className="tag">
              Sanat ve Tasarım
            </a>
            <a href="#" className="tag">
              Sağlık
            </a>
            <a href="#" className="tag">
              Finans
            </a>
            <a href="#" className="tag">
              Müzik ve Eğlence
            </a>
            <a href="#" className="tag">
              Film
            </a>
            <a href="#" className="tag">
              Doğa ve Çevre
            </a>
          </div>
        </div>
        <div className="archives">
          <h3>Arşivler</h3>
          <ul>
            <li>
              <a href="#">
                <i
                  className="fa fa-chevron-right"
                  style={{ color: "black" }}
                ></i>
                Temmuz 2023
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa fa-chevron-right"
                  style={{ color: "black" }}
                ></i>
                Haziran 2023
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fa fa-chevron-right"
                  style={{ color: "black" }}
                ></i>
                Mayıs 2023
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
