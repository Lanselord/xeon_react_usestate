import "./Header.scss";
import homelogo from "../img/homeLogo.png";
import headerlogo from "../img/headerLogo.png";
import headerBTN from "../img/headerBTN.png";

// JSX
// class => className

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="visually-hidden">Welcome to XEON</h1>
          <div className="header__info">
            <a className="img__link" href="#link">
              <img
                className="homelogo"
                src={homelogo}
                alt="homelogo"
                width={31}
                height={31}
              />
              <img
                className="headerlogo"
                src={headerlogo}
                alt="headerlogo"
                width={91}
                height={30}
              />
            </a>

            <ul className="header__list">
              <li className="list__item">
                <a className="header__link" href="#link">
                  About
                </a>
              </li>

              <li className="list__item">
                <a className="header__link" href="#link">
                  Blog
                </a>
              </li>

              <li className="list__item">
                <a className="header__link" href="#link">
                  Agency
                </a>
              </li>

              <li className="list__item">
                <a className="header__link" href="#link">
                  Featured
                </a>
              </li>

              <li className="list__item">
                <a className="header__link" href="#link">
                  Price
                </a>
              </li>
            </ul>

            <button className="header__btn">
              <img src={headerBTN} alt="headerBTN" width={30} height={14.34} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
