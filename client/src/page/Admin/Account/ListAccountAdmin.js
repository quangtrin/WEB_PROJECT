import classNames from "classnames/bind";
import styles from "./AccountAdmin.module.scss";
import { FaSearch } from "react-icons/fa";
import TableAccountAdmin from './TableAccount/TableAccountAdmin';
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
const ListAccountAdmin = () => {
  const admin = useOutletContext();
  const [listAdminAccount, setListAdminAccount] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/admin/listAdminAccount", {
      headers: {
        Authorization: admin?.token,
      },
    })
    setListAdminAccount(res.data);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Tài khoản admin</h1>
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
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {listAdminAccount.map((admin) => {
                    return <TableAccountAdmin
                      id={admin.adminID}
                      name={admin.adminName}
                      email={admin.account}
                      password={admin.password}
                      date={new Date(admin.create_at).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
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
export default ListAccountAdmin;
