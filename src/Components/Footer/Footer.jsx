import "./Footer.scss";
import footerImg from "../img/footerImg.png";
import footerLogo from "../img/footerLogo.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <img className="footerImg" src={footerImg} alt="footerImg" />

            <div className="footer__div">
              <h3 className="footer__h3">Luxury & Fancy Chair</h3>
              <p className="div__text">
                All the Lorem Ipsum generators on the Internet tend to
                predefined chunks this the first true generator on the Internet.{" "}
              </p>
              <hr className="div__line" />
            </div>

            <div className="footer__div2">
              <ul className="div2__list">
                <li className="item1">
                  <h3 className="div2__h3">20K+</h3>
                  <p className="item1__text">People Visiting this year</p>
                </li>

                <li className="item1">
                  <h3 className="div2__h32">15</h3>
                  <p className="item1__text1">Years Experience</p>
                </li>
              </ul>

              <div className="div2__info">
                <img src={footerLogo} alt="footerLogo" />
                <span className="div2__line"></span>

                <div className="nav__div">
                  <h4 className="nav__h4">Trust Members</h4>
                  <p className="nav__text">
                    More than 50k peoples integrate with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
