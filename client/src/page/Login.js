import axios from "axios";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Alert } from "react-bootstrap";
import { Button } from "antd";
import Swal from "sweetalert2";

const useStyle = createUseStyles({
  login: {
    padding: "50px 75px",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "15px",
  },

  login_heading: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#373941",
    textAlign: "center",
    marginBottom: "35px",
  },

  login_label: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#373941",
    marginBottom: "10px",
    display: "inline-block",
    cursor: "pointer",
  },

  login_input: {
    display: "block",
    width: "100%",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "#f2f3f5",
    outline: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    marginBottom: "30px",
    border: "1px solid white",
    boxShadow: "0 5px 10px 0 rgba(55, 57, 65, 0.5)",
  },

  login_submit: {
    fontSize: "18px",
    color: "white",
    width: "100%",
    height: "50px",
    borderRadius: "15px",
    backgroundColor: "#82c91e",
  },

  login_already: {
    textAlign: "center",
    fontSize: "16px",
    color: "#999",
  },

  register_link: {
    color: "#2979ff",
    textDecoration: "none",
  },

  login_link: {
    color: "red",
    textDecoration: "none",
  },
});
const Login = () => {
  const classes = useStyle();
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();
  const [isLoginSucces, setIsLoginSucces] = useState(true);
  const [isLogining, setIsLogining] = useState(false);
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
  useEffect(() => {}, []);

  return (
    <>
      {!isLoginSucces ? (
        <Alert variant="danger">Tài khoản hoặc mật khẩu không đúng!</Alert>
      ) : (
        <></>
      )}
      <form id="form" className={classes.login} onSubmit={handleClickSubmit}>
        <h1 className={classes.login_heading}>Đăng nhập</h1>
        <div className={classes.login_form}>
          <label htmlFor="email" className={classes.login_label}>
            Tên đăng nhập
          </label>
          <input
            type="text"
            id="account"
            required
            name="account"
            className={classes.login_input}
            placeholder="user@gmail.com"
            onChange={handleChangeAccount}
          />
          <label htmlFor="password" className={classes.login_label}>
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            required
            name="password"
            className={classes.login_input}
            placeholder="*********"
            onChange={handleChangePassword}
          />
          <Button
            type="Call to Action"
            className={classes.login_submit}
            onClick={handleClickSubmit}
            loading={isLogining}
          >
            {!isLogining ? <>Đăng nhập</> : <></>}
          </Button>
          <input type="submit" value="Submit" hidden />
        </div>
        <p className={classes.login_already}>
          <span>Bạn chưa có tài khoản?</span>
          <a href="/Register" className={classes.register_link}>
            Đăng ký
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
