import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>2023 Bed All Rights Reserved.</p>
      </div>
      {/* <div className="footer-center">
        <p>Ortadaki Yazı</p>
    </div> */}
      <div className="footer-right">
        <a href="#" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
