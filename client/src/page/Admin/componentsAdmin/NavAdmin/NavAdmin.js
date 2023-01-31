import classNames from "classnames/bind";
import styles from "./NavAdmin.module.scss";

import {FaDesktop} from "react-icons/fa";
import {FaFilm} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaEye} from "react-icons/fa";

import {FaUser} from "react-icons/fa";
import {FaUsers} from "react-icons/fa";
import {FaUserTie} from "react-icons/fa";

import {FaImage} from "react-icons/fa";



import imgUser from "../../../../imgs/user_default.png";

const cx = classNames.bind(styles);

const NavAdmin = () => {
  return (
    <>
      <div className={cx("sidebar")}>
        <div className={cx("sidebar-menu")}>
          <center className={cx("profile")}>
            <img src={imgUser} alt="" />
            <p>Cục Đá</p>
          </center>
          <li className={cx("item")}>
            <a href="#" className={cx("menu-btn")}>
              <FaDesktop/><span>Trang chủ</span>
            </a>
          </li>
          <li className={cx("item")} id="film">
            <a href="#film" className={cx("menu-btn")}>
              <FaFilm/><span>Phim <i className="fas fa-chevron-down drop-down" /></span>
            </a>
            <div className={cx("sub-menu")}>
              <a href="#"><FaPlus/><span>Thêm mới phim</span></a>
              <a href="#"><FaPlus/><span>Thêm mới tập phim</span></a>
              <a href="#"><FaEye/><span>Tổng quan</span></a>
            </div>
          </li>
          <li className={cx("item")} id="account">
            <a href="#account" className={cx("menu-btn")}>
              <FaUser/><span>Tài khoản <i className="fas fa-chevron-down drop-down" /></span>
            </a>
            <div className={cx("sub-menu")}>
              <a href="#"><FaUsers/><span>Người dùng</span></a>
              <a href="#"><FaUserTie/><span>Quản trị viên</span></a>
            </div>
          </li>
          <li className={cx("item")}>
            <a href="#" className={cx("menu-btn")}>
              <FaImage/><span>Banner</span>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavAdmin;
