import axios from "axios";
import Swal from "sweetalert2";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import styles from "./FilmAdmin.module.scss";
import FilmItem from "../../../components/Header/Search/FilmItem";

const cx = classNames.bind(styles);
const ListEpisodeFilm = () => {
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
  //   e.preventDefault();
  //   setSearchResult([]);
  //   let isSuccess = true;
  //   let id;
  //   if (filmName && episodeID && episodeUrl) {
  //     for (let i = 0; i < films.length; i++) {
  //       if (filmName === films[i].filmName) {
  //         id = films[i].filmID;
  //       }
  //     }

  //     if (id) {
  //       const list = await (
  //         await axios.get("/api/episodeFilm/getEpisodeFilm/" + id)
  //       ).data;
  //       for (let index = 0; index < list.length; index++) {
  //         if (list[index].episodeID == episodeID) {
  //           isSuccess = false;
  //           break;
  //         }
  //       }

  //       if (isSuccess) {
  //         const res = await axios.post("/api/episodeFilm/addEpisode", {
  //           filmID: id,
  //           episodeID: episodeID,
  //           url: episodeUrl,
  //         });
  //         Swal.fire({
  //           icon: "success",
  //           title: "Success",
  //           text: "Thêm thành công",
  //           confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "ERROR",
  //           text: "Tập phim đã tồn tại",
  //           confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
  //         });
  //       }
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "ERROR",
  //         text: "Tên phim không chính xác",
  //         confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
  //       });
  //     }
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "ERROR",
  //       text: "Yêu cầu nhập đủ thông tin",
  //       confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
  //     });
  //   }
  // };

  useEffect(() => {
    getDataFilms();
  }, []);

  return (
    <div>
      {isHasData ? (
        <div className={cx("main-container")}>
          <div className={cx("card")}>
            <section className={cx("container")}>
              <form action="#" className={cx("form")}>
                <h1>Thêm tập</h1>
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