import classNames from "classnames/bind";
import styles from "./AccountAdmin.module.scss";
import { FaSearch } from "react-icons/fa";
import TableAccountUser from './TableAccount/TableAccountUser';
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
const ListAccountUser = () => {
  const admin = useOutletContext();
  const [listUser, setListUser] = useState([]);
  const getDataUser = async () => {
    const res = await axios.get("/api/admin/listUserAccount", {
      headers: {
        Authorization: admin?.token,
      },
    })
    setListUser(res.data);
  }
  useEffect(() => {
    getDataUser();
  }, [])
  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Tài khoản người dùng</h1>
              <div className={cx("header-table")}>
                <div className={cx("search")}>
                  <input type="text" placeholder="Search..."></input>
                  <a href='#'>
                    <FaSearch />
                  </a>
                </div>
              </div>
              <table className={cx("table")}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên người dùng</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ngày sinh</th>
                    <th>Thời gian đăng ký</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {listUser.map((user) => {
                    return <TableAccountUser
                      id={user.userID}
                      name={user.userName}
                      email={user.account}
                      password={user.password}
                      date={new Date(user.dateOfBirth).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                      dateRegister={new Date(user.create_at).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                    />
                  })
                  }
                </tbody>
              </table>
              <div className={cx("pagination")}>
                <a class="active" href="#">1</a>
                <a href="#">2</a>
                <span>...</span>
                <a href="#">3</a>
                <a href="#">4</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ListAccountUser;
