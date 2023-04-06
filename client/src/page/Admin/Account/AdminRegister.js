import axios from "axios";
import { useState, useEffect } from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./AccountAdmin.module.scss";
import { useOutletContext } from "react-router-dom";
import FormData from 'form-data';

const cx = classNames.bind(styles);
const AddAccountAdmin = () => {
  const admin = useOutletContext();
  const [adminName, setAdminName] = useState();
  const [account, setAccount] = useState();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isHidePass, setIsHidePass] = useState(true);
  const [isHideRePass, setIsHideRePass] = useState(true);
  const [isChanging, setIsChanging] = useState(false);
  const [isEqualPassword, setIsEqualPassword] = useState(true);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const handleChangeAdminName = (e) => {
    setAdminName(e.target.value);
  };
  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  const handleChangeAvatar = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    if (account && password && rePassword && adminName && file) {
      if (password !== rePassword) {
        setIsEqualPassword(false);
        return;
      }
      setIsChanging(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      formData.append("adminName", adminName);
      formData.append("account", account);
      formData.append("password", password);
      try {
        const res = await axios.post("/api/admin/uploadAvatarAdmin", formData, {
          headers: {
            Authorization: admin.token
          }
        });
        if (res.data.change) { 
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thêm tài khoản Admin thành công",
            confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
          });
        }else{
          Swal.fire({
            title: "Thêm Admin thất bại, xin hãy thử lại",
            icon: "warning",
            showCloseButton: true,
          });
        }
      } catch (ex) {
        console.log(ex);
      };
      setIsChanging(false);
    }
  };
  useEffect(() => {
    document.title = "AdminRegister";
  }, []);

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("container")}>
            <form action="#" className={cx("form")} onSubmit={handleClickSubmit} >
              <h1>Thêm tài khoản Admin</h1>

              <div className={cx("input-box")}>
                <label>Tên người dùng</label>
                <input
                  type="text"
                  id="adminName"
                  required
                  name="adminName"
                  placeholder="Nguyễn Văn A"
                  onChange={handleChangeAdminName}
                />
              </div>

              <div className={cx("input-box")}>
                <label>Email</label>
                <input type="email"
                  id="email"
                  required
                  name="email"
                  placeholder="admin@gmail.com"
                  onChange={handleChangeAccount} />
              </div>

              <div className={cx("input-box")}>
                <label>Mật khẩu</label>
                <input type={isHidePass ? "password" : "text"}
                  id="password"
                  required
                  name="password"
                  className={cx("register_input")}
                  placeholder="*********"
                  onChange={handleChangePassword}
                />
                <div className={cx("hide_icon")}>
                  {isHidePass ? (
                    <EyeFilled onClick={() => setIsHidePass(false)} />
                  ) : (
                    <EyeInvisibleFilled onClick={() => setIsHidePass(true)} />
                  )}
                </div>
              </div>

              {!isEqualPassword ? (
                <p className={cx("notify")}>Mật khẩu phải giống nhau!</p>
              ) : (
                <></>
              )}
              <div className={cx("input-box")}>
                <label >
                  Nhập lại mật khẩu
                </label>
                <input
                  type={isHideRePass ? "password" : "text"}
                  id="rePassword"
                  required
                  name="rePassword"
                  placeholder="*********"
                  onChange={handleChangeRePassword}
                />
                <div className={cx("hide_icon")}>
                  {isHideRePass ? (
                    <EyeFilled onClick={() => setIsHideRePass(false)} />
                  ) : (
                    <EyeInvisibleFilled onClick={() => setIsHideRePass(true)} />
                  )}
                </div>
              </div>

              <div className={cx("input-box")}>
                <label>Avatar</label>
                <input
                  type="file"
                  id="file"
                  required
                  name="file"
                  onChange={handleChangeAvatar}
                />
              </div>

              <button type="submit" name="sumbmit_add_film">Lưu</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AddAccountAdmin;
