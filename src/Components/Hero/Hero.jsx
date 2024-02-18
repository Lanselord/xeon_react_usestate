import React, { useState } from "react";

import "./Hero.scss";
import FIT from "../img/f,i,t.svg";
import heroGlavni from "../img/hero_glavni.png";
import yellow from "../img/yellow.png";
import black from "../img/black.png";
import chernel from "../img/chenel.png";
import strelka from "../img/strelka.svg";

const todolist = [
  {
    id: 1,
    img: yellow,
    text: "Comfort Lounge Chair",
  },
  {
    id: 2,
    img: black,
    text: "Comfort Launge Chairs",
  },
  {
    id: 3,
    img: chernel,
    text: "Comfort Launge Chairs",
  },
];

function Hero() {
  const [glavni, setGlavni] = useState(heroGlavni);

  const handleImageChange = (img) => {
    setGlavni(img);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <div className="hero__div1">
              <p className="hero__text1">100% Quality Guranty</p>
              <h2 className="hero__h2">
                Find Classy Furnitures <br /> For Your Comfort
              </h2>
              <p className="hero__text2">
                All the Lorem Ipsum generators on the Internet tend to
                predefined <br /> chunks this the first true generator on the
                Internet.{" "}
              </p>
              <p className="hero__text3">Start From</p>
              <h3 className="hero__h3">102.99 USD</h3>
              <button className="hero__btn">Buy Now</button>
              <a
                className="FIT"
                href="https://www.youtube.com/watch?v=6bzd99AhU34"
              >
                <img src={FIT} alt="FIT" width={19.98} height={143.56} />
              </a>
            </div>

            <div className="hero__div2">
              <div className="hero__div22">
                <div className="hero__divvv">
                  <img
                    className="dimg2"
                    src={glavni}
                    alt="img"
                    width={586.53}
                    height={600.81}
                  />
                </div>

                <div className="span__div">
                  <span className="text__span">Popular shades</span>
                  <span className="sp1"></span>
                  <span className="sp2"></span>
                  <span className="sp3"></span>
                  <span className="sp4"></span>
                </div>
              </div>

              <div className="hero__div23">
                {todolist.map((item) => (
                  <li key={item.id} className="map__item">
                    <button
                      className="imges"
                      onClick={() => handleImageChange(item.img)}
                    >
                      <img src={item.img} alt="img" />
                    </button>
                    <p className="chair__tetx">{item.text}</p>
                  </li>
                ))}

                <button className="chair__btn">
                  <img src={strelka} alt="strelka" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
