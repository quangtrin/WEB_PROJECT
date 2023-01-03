import classNames from "classnames/bind";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";


import imgBanner1 from "../../imgs/conan.jpg";
import imgBanner2 from "../../imgs/doraemonbanner.jpg";
import imgBanner3 from "../../imgs/conan.jpg";
import imgBanner4 from "../../imgs/doraemonbanner.jpg";

import imgAdds from "../../imgs/adds.jpg";
import imgCard from "../../imgs/doraemon.jpg";

import imgSlideUp1 from "../../imgs/down.png";
import imgSlideUp2 from "../../imgs/down.png";
import imgSlideUp3 from "../../imgs/down.png";
import imgSlideUp4 from "../../imgs/down.png";
import imgSlideUp5 from "../../imgs/down.png";
import imgSlideUp6 from "../../imgs/down.png";

const cx = classNames.bind(styles);
const Home = () => {
  const [checkedRadio, setCheckedRadio] = useState("");
  const [countSlide, setCountSlide] = useState(1);
  const slideEffect = () => {
    setTimeout(function () {
      setCountSlide(countSlide + 1);
      setCheckedRadio("radio" + countSlide);
      if (countSlide > 4) {
        setCountSlide(1);
      }
    }, 5000);
  };
  useEffect(()=>{slideEffect()}, [countSlide]);
  return (
    <div>
      <Header></Header>
      <div className={cx("home")}>
        <div className={cx("slider")}>
          <div className={cx("slides-drop")}>
          <input
              type="radio"
              name="radio-btn"
              id={cx("radio1")}
              checked={checkedRadio === "radio1"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio2")}
              checked={checkedRadio === "radio2"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio3")}
              checked={checkedRadio === "radio3"}
            />
            <input
              type="radio"
              name="radio-btn"
              id={cx("radio4")}
              checked={checkedRadio === "radio4"}
            />

            <div className={cx("slide","first")}>
              <img src={imgBanner1} alt="" />
              <div className={cx("slider-text")}>
                <div className={cx("container")}>
                  <div className={cx("text-heading")}>
                    <h3>Doraemon: Cuộc phiêu lưu của Yasuo và Yone!</h3>
                  </div>
                  <div className={cx("text-description")}>
                    <p>Năm phát hành: <span>1998</span></p>
                  </div>
                  <button className={cx("button-slider")}>CHI TIẾT</button>
                </div>
              </div>
            </div>

            <div className={cx("slide")}>
              <img src={imgBanner2} alt="" />
              <div className={cx("slider-text")}>
                <div className={cx("container")}>
                  <div className={cx("text-heading")}>
                    <h3>Doraemon: Cuộc phiêu lưu của Yasuo và Yone!</h3>
                  </div>
                  <div className={cx("text-description")}>
                    <p>Năm phát hành: <span>1999</span></p>
                  </div>
                  <button className={cx("button-slider")}>CHI TIẾT</button>
                </div>
              </div>
            </div>

            <div className={cx("slide")} >
              <img src={imgBanner3} alt="" />
              <div className={cx("slider-text")}>
                <div className={cx("container")}>
                  <div className={cx("text-heading")}>
                    <h3>Doraemon: Cuộc phiêu lưu của Yasuo và Yone!</h3>
                  </div>
                  <div className={cx("text-description")}>
                    <p>Năm phát hành: <span>1997</span></p>
                  </div>
                  <button className={cx("button-slider")}>CHI TIẾT</button>
                </div>
              </div>
            </div>

            <div className={cx("slide")}>
              <img src={imgBanner4} alt="" />
              <div className={cx("slider-text")}>
                <div className={cx("container")}>
                  <div className={cx("text-heading")}>
                    <h3>Doraemon: Cuộc phiêu lưu của Yasuo và Yone!</h3>
                  </div>
                  <div className={cx("text-description")}>
                    <p>Năm phát hành: <span>1996</span></p>
                  </div>
                  <button className={cx("button-slider")}>CHI TIẾT</button>
                </div>
              </div>
            </div>

            <div className={cx("navigation-manual" , "container")}>
              <ul>
                <li><label htmlFor="radio1" className={cx("manual-btn")}> </label></li>
                <li><label htmlFor="radio2" className={cx("manual-btn")}> </label></li>
                <li><label htmlFor="radio3" className={cx("manual-btn")}> </label></li>
                <li><label htmlFor="radio4" className={cx("manual-btn")}> </label></li>
              </ul>
            </div>

            <div className={cx("navigation-auto","container")}>
              <ul>
                <li>
                  <div className={cx("auto-btn1")} />
                </li>
                <li>
                  <div className={cx("auto-btn2")} />
                </li>
                <li>
                  <div className={cx("auto-btn3")} />
                </li>
                <li>
                  <div className={cx("auto-btn4")} />
                </li>
              </ul>
            </div>
          </div>

          <div className={cx("slider-up","container")}>
            <div className={cx("text-hot-series")}>
              <h3><button /><span>Hot Series</span></h3>
            </div>
            <div className={cx("img-hot-series")}>
              <div className={cx("mySlides")}>
                <img className={cx("mySlides-img")} src={imgSlideUp1} />
                <img className={cx("mySlides-img")} src={imgSlideUp2} />
                <img className={cx("mySlides-img")} src={imgSlideUp3} />
                <img className={cx("mySlides-img")} src={imgSlideUp4} />
                <img className={cx("mySlides-img")} src={imgSlideUp5} />
                <img className={cx("mySlides-img")} src={imgSlideUp6} />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("adds","container")}>
          <img src={imgAdds} />
        </div>

        <div className={cx("content","container")}>
          <div className={cx("text-content")}>
            <h3><button /><span>Phim Mới</span></h3>
          </div>
          <div className={cx("mySlides","card-content")}>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
          </div>
          <div className={cx("mySlides","card-content")}>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>
            <div className={cx("film-card")}>
              <div className={cx("content-card")}>
                <button className={cx("practice")}>50/50</button>
              </div>
              <div className={cx("image-card")}>
                <img src={imgCard} alt="" className={cx("film-img")} />
              </div>
              <div className={cx("text-card")}>
                <span className={cx("name")}>One Piece</span>
              </div>
            </div>

          </div>
          <div className={cx("pagination")}>
            <a href="#">&lt;&lt;</a>
            <a className={cx("active")} href="#">1</a>
            <a href="#">2</a>
            <span>...</span>
            <a href="#">3</a>
            <a href="#">&gt;&gt;</a>
          </div>
        </div>
      </div>
      {/* {
        var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 5000);
      } */}
      <Footer></Footer>
    </div>
  );
};
export default Home;