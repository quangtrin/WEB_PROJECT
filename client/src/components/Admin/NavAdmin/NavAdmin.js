import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  FaDesktop,
  FaFilm,
  FaPlus,
  FaEye,
  FaUser,
  FaUsers,
  FaUserTie,
  FaImage,
} from "react-icons/fa";

import { useOutletContext } from "react-router-dom";
import styles from "./NavAdmin.module.scss";
import imgUser from "../../../imgs/user_default.png";
import axios from "axios";

const cx = classNames.bind(styles);

const NavAdmin = ({admin}) => {
  // const admin = useOutletContext();
  const handleAutoUpdate = async () => {
    const res = await axios.get("/api/admin/autoUpdateFilm", {
      headers: {
        Authorization: admin.token,
      },
    });
    console.log(res);
  };

  return (
    admin ?
    <>
      <div className={cx("sidebar")}>
        <div className={cx("sidebar-menu")}>
          <center className={cx("profile")}>
            <img src={admin.avatar} alt="" />
            <p>{admin.name}</p>
          </center>
          <li className={cx("item")}>
            <Link to="/Admin/Home" className={cx("menu-btn")}>
              <FaDesktop />
              <span>Trang chủ</span>
            </Link>
          </li>
          <li className={cx("item")} id="film">
            <Link to="/Admin/ListFilm" className={cx("menu-btn")}>
              <FaFilm />
              <span>
                Phim <i className="fas fa-chevron-down drop-down" />
              </span>
            </Link>
            <div className={cx("sub-menu")}>
              <Link to="/Admin/AddFilm" className={cx("sub-menu-btn")}>
                <FaPlus />
                <span>Thêm mới phim</span>
              </Link>
              <Link to="/Admin/AddEpisodeFilm" className={cx("sub-menu-btn")}>
                <FaPlus />
                <span>Thêm mới tập phim</span>
              </Link>
              <Link to="/Admin/ListFilm" className={cx("sub-menu-btn")}>
                <FaEye />
                <span>Tổng quan</span>
              </Link>
              <div
                to="/Admin/ListFilm"
                className={cx("sub-menu-btn")}
                onClick={handleAutoUpdate}
              >
                <FaPlus />
                <span>Auto Update</span>
              </div>
            </div>
          </li>
          <li className={cx("item")} id="account">
            <Link to="/Admin/AddAccountAdmin" className={cx("menu-btn")}>
              <FaUser />
              <span>
                Tài khoản <i className="fas fa-chevron-down drop-down" />
              </span>
            </Link>
            <div className={cx("sub-menu")}>
              <Link to="/Admin/ListAccountUser" className={cx("sub-menu-btn")}>
                <FaUsers />
                <span>Người dùng</span>
              </Link>
              <Link to="/Admin/ListAccountAdmin" className={cx("sub-menu-btn")}>
                <FaUserTie />
                <span>Quản trị viên</span>
              </Link>
            </div>
          </li>
          <li className={cx("item")}>
            <Link to="#" className={cx("menu-btn")}>
              <FaImage />
              <span>Banner</span>
            </Link>
          </li>
        </div>
      </div>
    </> : null
  );
};

export default NavAdmin;
