import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "antd";
import Swal from "sweetalert2";
import React from "react";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = () => {
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();
  const [isLoginSucces, setIsLoginSucces] = useState(true);
  const [isLogining, setIsLogining] = useState(false);
  const [isHidePass, setIsHidePass] = useState(true);

  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleClickSubmit = async (e) => {
    e.preventDefault();
    if (account && password) {
      setIsLogining(true);
      const res = await axios.post("/api/user/signUp", {
        account: account,
        password: password,
      });
      setIsLogining(false);
      if (res.data.login) {
        const text = "Welcome " + res.data.userName;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: text,
          confirmButtonText: '<a class="fa fa-thumbs-up" href ="#"></a> OK',
        });
        setIsLoginSucces(true);
      } else setIsLoginSucces(false);
    }
  };

  return (
    <>
      <form id="form" className={cx("login")} onSubmit={handleClickSubmit}>
        <h1 className={cx("login_heading")}>Đăng nhập</h1>
        {!isLoginSucces ? (
          <p className={cx("notify")}>Tài khoản hoặc mật khẩu không đúng!</p>
        ) : (
          <></>
        )}
        <div className={cx("login_form")}>
          <label htmlFor="account" className={cx("login_label")}>
            Tên đăng nhập
          </label>

          <input
            type="email"
            id="account"
            required
            name="account"
            className={cx("login_input")}
            placeholder="user@gmail.com"
            onChange={handleChangeAccount}
          />
          <label htmlFor="password" className={cx("login_label")}>
            Mật khẩu
          </label>
          <div className={cx("password_input")}>
            <input
              type={isHidePass ? "password" : "text"}
              id="password"
              required
              name="password"
              className={cx("login_input")}
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
          <Button
            type="Call to Action"
            className={cx("login_submit")}
            onClick={handleClickSubmit}
            loading={isLogining}
          >
            {!isLogining ? "Đăng nhập" : <></>}
          </Button>
          <input type="submit" value="Submit" hidden />
        </div>
        <div className={cx("login_already")}>
          <a href="#" className={cx("forgotpass_link")}>
            Quên mật khẩu?
          </a>
          <span>Bạn chưa có tài khoản?</span>
          <a href="/Register" className={cx("register_link")}>
            Đăng ký
          </a>
        </div>
      </form>
    </>
  );
};

export default Login;
