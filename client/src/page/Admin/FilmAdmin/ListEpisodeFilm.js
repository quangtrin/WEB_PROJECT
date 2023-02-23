import { FaSearch } from "react-icons/fa";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./FilmAdmin.module.scss";
import TableFilm from "./TableFilm/TableFilm";
import { Link, useParams } from "react-router-dom";
import HeadlessTippy from "@tippyjs/react/headless";
import FilmItem from "../../../components/Header/Search/FilmItem";

const cx = classNames.bind(styles);
const ListEpisodeFilm = () => {
  let { page } = useParams();

  const [filmName, setFilmName] = useState("");
  const [episodeID, setEpisodeID] = useState(0);
  const [episodeUrl, setEpisodeUrl] = useState("");
  // const [films, setFilms] = useState();
  // const [searchResult, setSearchResult] = useState([]);
  // const [isHasData, setIsHasData] = useState(false);

  if (page === undefined || Number(page) <= 0) page = "1";
  const [isHasData, setIsHasData] = useState(false);
  const [films, setFilms] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChangeFilmName = (e) => {
    const value = e.target.value;
    if (value[0] !== " ") {
      const res = films.filter((film) => {
        let check = true;
        const cmp = film.filmName.toUpperCase();
        for (let i = 0; i < value.length; i++) {
          if (value.toUpperCase()[i] !== cmp[i]) {
            check = false;
            break;
          }
        }
        if (check === true) return film;
      });
      setSearchResult(res);
      setFilmName(value);
    }
  };

  const handleFocusFilmName = () => {
    if (!filmName) {
      setSearchResult(films);
    }
  };

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
            <HeadlessTippy
              interactive
              visible={searchResult.length > 0}
              delay={[0, 700]}
              appendTo={document.body}
              placement="bottom-start"
              render={(attrs) => (
                <div className={cx("wrapper")}>
                  <div
                    className={cx("search-list")}
                    tapindex="-1"
                    {...attrs}
                  >
                    {searchResult.map((film, index) => {
                      if (index < 20)
                        return (
                          <FilmItem
                            key={index}
                            film={film}
                            callBack={[setFilmName, setSearchResult]}
                          ></FilmItem>
                        );
                    })}
                  </div>
                </div>
              )}
            >
              <div className={cx("input-box")}>
                <label htmlFor="filmName">Tên phim</label>
                <input
                  type="text"
                  name="filmName"
                  id="filmName"
                  placeholder="Tên phim"
                  value={filmName}
                  required
                  onChange={handleChangeFilmName}
                  onFocus={handleFocusFilmName}
                />
              </div>
            </HeadlessTippy>
            {/* <div className={cx("attendance-list")}>
              <h1>Danh sách tập phim</h1>
              <div className={cx("header-table")}>
                <div className={cx("search")}>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                    value={searchValue}
                  ></input>
                  <a href="#">
                    <FaSearch />
                  </a>
                </div>
              </div>
              <table className={cx("table")}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tập</th>
                    <th>Url</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                {isHasData ? (
                  <tbody>
                    {searchResult.map((episode, index) => {
                      if (index >= page * 30 - 30 && index <= 30 * page - 1)
                        return (
                          <TableFilm
                            key={episode.filmID}
                            id={episode.episodeID}
                            url={episode.url}
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
                      className={cx("prev")}
                      to={"/Admin/ListFilm/" + (Number(page) - 1)}
                      onClick={handleChangePage}
                    >
                      &lt;&lt;
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link
                    className={cx(
                      "page",
                      Number(page) <=
                        Number.parseInt(searchResult.length / 30) + 1 - 3
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 >
                      Number.parseInt(searchResult.length / 30) + 1
                        ? Number.parseInt(searchResult.length / 30) + 1 - 3
                        : Number(page))
                    }
                    onClick={handleChangePage}
                  >
                    {Number(page) + 3 >
                    Number.parseInt(searchResult.length / 30) + 1
                      ? Number.parseInt(searchResult.length / 30) + 1 - 3
                      : Number(page)}
                  </Link>
                  <Link
                    className={cx(
                      "page",
                      Number(page) ===
                        Number.parseInt(searchResult.length / 30) + 1 - 2
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 >
                      Number.parseInt(searchResult.length / 30) + 1
                        ? Number.parseInt(searchResult.length / 30) + 1 - 2
                        : Number(page) + 1)
                    }
                    onClick={handleChangePage}
                  >
                    {Number(page) + 3 >
                    Number.parseInt(searchResult.length / 30) + 1
                      ? Number.parseInt(searchResult.length / 30) + 1 - 2
                      : Number(page) + 1}
                  </Link>
                  <Link
                    className={cx(
                      "page",
                      Number(page) ===
                        Number.parseInt(searchResult.length / 30) + 1 - 1
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 >
                      Number.parseInt(searchResult.length / 30) + 1
                        ? Number.parseInt(searchResult.length / 30) + 1 - 1
                        : Number(page) + 2)
                    }
                    onClick={handleChangePage}
                  >
                    {Number(page) + 3 >
                    Number.parseInt(searchResult.length / 30) + 1
                      ? Number.parseInt(searchResult.length / 30) + 1 - 1
                      : Number(page) + 2}
                  </Link>
                  <Link
                    className={cx(
                      "page",
                      Number(page) ===
                        Number.parseInt(searchResult.length / 30) + 1
                        ? "active"
                        : ""
                    )}
                    to={
                      "/Admin/ListFilm/" +
                      (Number(page) + 3 >
                      Number.parseInt(searchResult.length / 30) + 1
                        ? Number.parseInt(searchResult.length / 30) + 1
                        : Number(page) + 3)
                    }
                    onClick={handleChangePage}
                  >
                    {Number(page) + 3 >
                    Number.parseInt(searchResult.length / 30) + 1
                      ? Number.parseInt(searchResult.length / 30) + 1
                      : Number(page) + 3}
                  </Link>
                  {Number(page) + 3 <
                  Number.parseInt(searchResult.length / 30) + 1 ? (
                    <Link
                      className={cx("next")}
                      to={"/Admin/ListFilm/" + (Number(page) + 1)}
                      onClick={handleChangePage}
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
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};
export default ListEpisodeFilm;
