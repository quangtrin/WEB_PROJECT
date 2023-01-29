import Table from 'react-bootstrap/Table';
import classNames from "classnames/bind";
import styles from "./FilmAdmin.module.scss";

import imgLogo from "../../../imgs/logo_hqbh.png";

import TableFilm from './TableFilm/TableFilm';

const cx = classNames.bind(styles);
const ListAdmin = () => {

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Danh sách phim</h1>
              <table className={cx("table")}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Tên</th>
                    <th>Thể loại</th>
                    <th>Thời gian</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <TableFilm
                    id={1}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={2}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={3}
                    name={"Nobita và vương quốc chó mèo"}
                    category={"Phiêu lưu"}
                    time={"11:54"}>
                  </TableFilm>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ListAdmin;
