import { FaSearch } from "react-icons/fa";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./FilmAdmin.module.scss";
import TableFilm from "./TableFilm/TableFilm";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
const ListAdmin = () => {
  let { page } = useParams();
  if (page === undefined || Number(page) <= 0) page = "1";
  const [isHasData, setIsHasData] = useState(false);
  const [films, setFilms] = useState();

  const getDataFilms = async () => {
    setIsHasData(false);
    if (films === undefined) {
      const res = await axios.get("/api/film/getFilm");
      setFilms(res.data);
    }

    setIsHasData(true);
  };

  useEffect(() => {
    getDataFilms();
  }, []);

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
          <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Danh sách phim</h1>
              <div className={cx("header-table")}>
                <div className={cx("search")}>
                  <input type="text" placeholder="Search..."></input>
                  <a href="#">
                    <FaSearch />
                  </a>
                </div>
              </div>
              <table className={cx("table")}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Tên</th>
                    <th>Thể loại</th>
                    <th>Số tập</th>
                    <th>Thời gian</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                {isHasData ? (
                  <tbody>
                    {films.map((film, index) => {
                      if (index >= page * 30 - 30 && index <= 30 * page - 1)
                        return (
                          <TableFilm
                            key={film.filmID}
                            id={film.filmID}
                            avatar={film.url}
                            name={film.filmName}
                            category={film.category}
                            countEpisode={
                              film.episodeCount +
                              "/" +
                              film.duration.split(" ")[0]
                            }
                            time={film.year}
                          ></TableFilm>
                        );
                    })}
                  </tbody>
                ) : (
                  <></>
                )}
              </table>
              {isHasData ? (
                <div className={cx("pagination")}>
                  {Number(page) > 1 ? (
                    <Link
                      class={cx("prev")}
                      to={"/Admin/ListFilm/" + (Number(page) - 1)}
                    >
                      &lt;&lt;
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link
                    class={cx(
                      "page",
                      Number(page) <= Number.parseInt(films.length / 30) + 1 - 3
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                        ? Number.parseInt(films.length / 30) + 1 - 3
                        : Number(page))
                    }
                  >
                    {Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                      ? Number.parseInt(films.length / 30) + 1 - 3
                      : Number(page)}
                  </Link>
                  <Link
                    class={cx(
                      "page",
                      Number(page) ===
                        Number.parseInt(films.length / 30) + 1 - 2
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                        ? Number.parseInt(films.length / 30) + 1 - 2
                        : Number(page) + 1)
                    }
                  >
                    {Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                      ? Number.parseInt(films.length / 30) + 1 - 2
                      : Number(page) + 1}
                  </Link>
                  <Link
                    class={cx(
                      "page",
                      Number(page) ===
                        Number.parseInt(films.length / 30) + 1 - 1
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                        ? Number.parseInt(films.length / 30) + 1 - 1
                        : Number(page) + 2)
                    }
                  >
                    {Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                      ? Number.parseInt(films.length / 30) + 1 - 1
                      : Number(page) + 2}
                  </Link>
                  <Link
                    class={cx(
                      "page",
                      Number(page) === Number.parseInt(films.length / 30) + 1
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                        ? Number.parseInt(films.length / 30) + 1
                        : Number(page) + 3)
                    }
                  >
                    {Number(page) + 3 > Number.parseInt(films.length / 30) + 1
                      ? Number.parseInt(films.length / 30) + 1
                      : Number(page) + 3}
                  </Link>
                  {Number(page) + 3 < Number.parseInt(films.length / 30) + 1 ? (
                    <Link
                      class={cx("next")}
                      to={"/Admin/ListFilm/" + (Number(page) + 1)}
                    >
                      &gt;&gt;
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ListAdmin;
