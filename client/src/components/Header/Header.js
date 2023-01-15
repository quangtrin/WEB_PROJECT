import imgLogo from "../../imgs/logo_hqbh.png";
import { useState, useEffect } from "react";
import axios from "axios";

import User from "./User/User";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "./Search";

const cx = classNames.bind(styles);

const Header = ({ user, setIsSignUp }) => {
  const [films, setFilms] = useState();
  const [isHasData, setIsHasData] = useState(false);

  const getDataFilms = async () => {
    setIsHasData(false);
    const res = await axios.get("/api/user/getFilm");
    setFilms(res.data);
    setIsHasData(true);
  };

  useEffect(() => {
    getDataFilms();
  }, []);

  return (
    // html
    <>
      <header className={cx("header")}>
        <a href="/">
          <img src={imgLogo} alt="logo" />
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
        {isHasData ? (
          <Search films={films}></Search>
        ) : <></>}
        {user?.userId ? (
          <User user={user} setIsSignUp={setIsSignUp}></User>
        ) : (
          <>
            <a className={cx("cta")} href="/Register">
              <button className={cx("header_register")}>ĐĂNG KÝ</button>
            </a>
            <a className={cx("cta")} href="/Login">
              <button className={cx("header_login")}>ĐĂNG NHẬP</button>
            </a>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
