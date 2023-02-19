import { FaSearch } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./FilmAdmin.module.scss";
import TableFilm from './TableFilm/TableEpisode';
import Select from 'react-select';


const films = [
  { value: 'Doraemon', label: 'Doraemon' },
  { value: 'OnePiece', label: 'One Piece' },
  { value: 'Conan', label: 'Conan' }
]

const cx = classNames.bind(styles);
const ListEpisodeAdmin = () => {
  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Danh sách tập phim: Doraemon</h1>
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
                    <th>Avatar tập</th>
                    <th>Tên tập</th>
                    <th>Mô tả</th>
                    <th>Tập</th>
                    <th>Thời gian</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <TableFilm
                    id={1}
                    // avatar={}
                    nameEpisode={"Chong chóng tre"}
                    description={"Nobita và vương quốc chó mèo"}
                    episode={1}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={2}
                    // avatar={}
                    nameEpisode={"Cánh cửa thần kỳ"}
                    description={"Nobita và vương quốc chó mèo"}
                    episode={2}
                    time={"11:54"}>
                  </TableFilm>
                  <TableFilm
                    id={3}
                    // avatar={}
                    nameEpisode={"Cánh cửa thần kỳ"}
                    description={"Nobita và vương quốc chó mèo"}
                    episode={3}
                    time={"11:54"}>
                  </TableFilm>
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
          <div className={cx("select_films")}>
          <Select options={films} />
        </div>
        </div>
      </div>
    </div>
  );
};
export default ListEpisodeAdmin;
