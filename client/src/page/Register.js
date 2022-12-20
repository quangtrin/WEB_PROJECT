import { createUseStyles } from "react-jss";
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
    padding: "25px",
    color: "white",
    fontSize: "18px",
    textAlign: "center",
    border: "0",
    outline: "none",
    display: "inline-block",
    width: "100%",
    borderRadius: "15px",
    backgroundColor: "#82c91e",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 5px 10px 0 rgba(130, 201, 30, 0.5)",
    marginTop: "25px",
    marginBottom: "15px",
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
const Register = () => {
  const classes = useStyle();
  return (
    <>
      <form className={classes.login}>
        <h1 className={classes.login_heading}>Đăng ký</h1>
        <form action="#" className={classes.login_form}>
          <label htmlFor="username" className={classes.login_label}>
            Tên người dùng
          </label>
          <input
            type="text"
            id="username"
            required
            name="username"
            className={classes.login_input}
            minLength={3}
            maxLength={200}
            placeholder="Nguyễn Văn A"
          />
          <label htmlFor="email" className={classes.login_label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            className={classes.login_input}
            minLength={3}
            maxLength={200}
            placeholder="user@gmail.com"
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
            minLength={6}
            maxLength={30}
            placeholder="*********"
          />
          <label htmlFor="phone" className={classes.login_label}>
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            required
            name="phone"
            className={classes.login_input}
            minLength={10}
            maxLength={10}
            placeholder="0123456789"
          />
          <label htmlFor="adds" className={classes.login_label}>
            Địa chỉ
          </label>
          <input
            type="text"
            id="adds"
            required
            name="adds"
            className={classes.login_input}
            minLength={3}
            maxLength={200}
            placeholder="Name Address"
          />
          <button className={classes.login_submit}>Đăng nhập</button>
        </form>
        <p className={classes.login_already}>
          <span>Bạn đã có tài khoản?</span>
          <a href="/login" className={classes.login_link}>
            Đăng ký
          </a>
        </p>
      </form>
    </>
  );
};

export default Register;
