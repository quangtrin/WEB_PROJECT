import imgLogo from "../../imgs/logo_hqbh.png";
import imgUser from "../../imgs/user_default.png";

import {FaCaretDown} from "react-icons/fa";
import {FaPowerOff} from "react-icons/fa";

import classNames from "classnames/bind";
import styles from "./HeaderEffect.modue.scss";

const cx = classNames.bind(styles);

const HeaderEffect = ({ user, setIsSignUp }) => {
  return (
    // html
    <>
      <header className={cx("header")}>
        <a href="/">
          <img className={cx("header_logo")} src={imgLogo} alt="logo" />
        </a>
        <nav className={cx("container")}>
          <ul className={cx("header_nav_links")}>
            <li>
              <a href="#">Thiếu nhi</a>
            </li>
            <li>
              <a href="#">Comics</a>
            </li>
            <li>
              <a href="#">Anime</a>
            </li>
            <li>
              <a href="#">Phim</a>
            </li>
            <li>
              <a href="#">Âm nhạc</a>
            </li>
            <li>
              <a href="#">Thêm</a>
            </li>
          </ul>
        </nav>
        <>
          <ul className={cx("menu")}>
            <div className={cx("close-btn")}></div>
            <li className={cx("menu-item")}>
              <a className={cx("sub-btn")} href="#"><img className={cx("header_right")} src={imgUser}></img> <FaCaretDown /></a>
              <ul className={cx("sub-menu right-0")}>
                <li className={cx("sub-item")}>
                  <a href="#">
                    <img className={cx("header_right_down")} src={imgUser}></img><p>Trình Lê Hào Quang</p>
                    </a>
                </li>
                <li className={cx("sub-item")}><a href="#">Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </>
      </header>
    </>
  );
};

export default HeaderEffect;
