import axios from "axios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import userImg from "../../imgs/user_default.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Register = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [accountExist, setAccountExist] = useState(false);
  const [isHidePass, setIsHidePass] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleClickSubmit = async (e) => {
    e.preventDefault();
    if (account && userName && password) {
      const res = await axios.post("/api/user/register", {
        account: account,
        password: password,
        userName: userName,
        avatarUrl: userImg,
      });
      if (!res?.data?.register) {
        setAccountExist(true);
      } else {
        setAccountExist(false);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Đăng ký thành công",
          confirmButtonText: '<a class="fa fa-thumbs-up" href ="#"></a> OK',
        });
      }
    }
  };
  return (
    <div className={cx("background-register")}>
      <div className={cx("register")}>
        <h1 className={cx("register_heading")}>Đăng ký</h1>
        {accountExist ? (
          <p className={cx("notify")}>Tài khoản đã tồn tại</p>
        ) : (
          <></>
        )}
        <form className={cx("register_form")} onSubmit={handleClickSubmit}>
          <label htmlFor="username" className={cx("register_label")}>
            Tên người dùng
          </label>
          <input
            type="text"
            id="username"
            required
            name="username"
            className={cx("register_input")}
            minLength={3}
            maxLength={200}
            placeholder="Nguyễn Văn A"
            onChange={handleChangeUserName}
          />
          <label htmlFor="email" className={cx("register_label")}>
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            className={cx("register_input")}
            minLength={3}
            maxLength={200}
            placeholder="user@gmail.com"
            onChange={handleChangeAccount}
          />
          <label htmlFor="password" className={cx("register_label")}>
            Mật khẩu
          </label>
          <div className={cx("password_input")}>
            <input
              type={isHidePass ? "password" : "text"}
              id="password"
              required
              name="password"
              className={cx("register_input")}
              minLength={6}
              maxLength={30}
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

          {/* <label htmlFor="phone" className={cx('login_label')}>
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            required
            name="phone"
            className={cx('login_input')}
            minLength={10}
            maxLength={10}
            placeholder="0123456789"
          /> */}
          {/* <label htmlFor="adds" className={cx('login_label')}>
            Địa chỉ
          </label>
          <input
            type="text"
            id="adds"
            required
            name="adds"
            className={cx('login_input')}
            minLength={3}
            maxLength={200}
            placeholder="Name Address"
          /> */}
          {!isRegistering ? (
            <button
              className={cx(
                "register_submit",
                account && userName && password ? "primary" : ""
              )}
            >
              Đăng ký
            </button>
          ) : (
            <Button
              type="Call to Action"
              className={cx(
                "login_submit",
                account && password ? "primary" : ""
              )}
              loading
            >
              <></>
            </Button>
          )}
        </form>
        <p className={cx("register_already")}>
          <span>Bạn đã có tài khoản?</span>
          <a href="/login" className={cx("login_link")}>
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
