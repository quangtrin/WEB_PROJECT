import axios from "axios";
import Swal from "sweetalert2";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import styles from "./FilmAdmin.module.scss";
import FilmItem from "../../../components/Header/Search/FilmItem";


import { FaSearch } from "react-icons/fa";
import TableFilm from "./TableFilm/TableFilm";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);
const ListEpisodeFilm = () => {
  let { page } = useParams();
  if (page === undefined || Number(page) <= 0) page = "1";

  const [searchValue, setSearchValue] = useState("");

  const [filmName, setFilmName] = useState("");
  const [episodeID, setEpisodeID] = useState(0);
  const [episodeUrl, setEpisodeUrl] = useState("");
  const [films, setFilms] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [isHasData, setIsHasData] = useState(false);

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

  const handleSearch = (e) => {
    if (e.target.value[0] !== " ") setSearchValue(e.target.value);
  };

  const handleChangePage = () => {
    window.scroll(0, 0);
  };


  useEffect(() => {
    getDataFilms();
  }, []);

  useEffect(() => {
    if (films) {
      if (searchValue !== "") {
        const result = films.filter((film) => {
          let checked = true;
          for (let i = 0; i < searchValue.length; i++) {
            if (
              searchValue.toUpperCase()[i] !== film.filmName.toUpperCase()[i]
            ) {
              checked = false;
            }
          }
          if (checked) return film;
        });
        setSearchResult(result);
      } else setSearchResult(films);
    }
  }, [searchValue]);

  return (
    <div>
      {isHasData ? (
        <div className={cx("main-container")}>
          <div className={cx("card")}>
            <section className={cx("attendance")}>
              <form action="#" className={cx("form")}>
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
                        tapindex="0"
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
              </form>
              <div className={cx("attendance-list")}>
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
                    <th>Tên phim</th>
                    <th>Tập</th>
                    <th>Url</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                {isHasData ? (
                  <tbody>
                    {searchResult.map((film, index) => {
                      if (index >= page * 30 - 30 && index <= 30 * page - 1)
                        return (
                          <TableFilm
                            key={film.filmID}
                            name={film.filmName}
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
            </div>
            </section>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ListEpisodeFilm;