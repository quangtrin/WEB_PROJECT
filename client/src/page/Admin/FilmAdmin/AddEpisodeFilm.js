import axios from "axios";
import Swal from "sweetalert2";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import styles from "./FilmAdmin.module.scss";
import FilmItem from "../../../components/Header/Search/FilmItem";

const cx = classNames.bind(styles);
const AddEpisodeFilm = () => {
  const [filmName, setFilmName] = useState("");
  const [filmId, setFilmId] = useState(0);
  const [episodeID, setEpisodeID] = useState(0);
  const [episodeUrl, setEpisodeUrl] = useState("");
  const [films, setFilms] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [isHasData, setIsHasData] = useState(false);
  const inputRef = useRef();

  const handleChangeFilmName = (e) => {
    const value = e.target.value;
    const res = films.filter((film) => {
      return (
        film.filmName.toUpperCase().includes(value.trim().toUpperCase()) &&
        value.trim() !== ""
      );
    });
    setSearchResult(res);
    setFilmName(value);
  };

  const handleChangeEpisode = (e) => {
    setEpisodeID(e.target.value);
  };
  const handleChangeUrl = (e) => {
    setEpisodeUrl(e.target.value);
  };

  const getDataFilms = async () => {
    setIsHasData(false);
    if (films === undefined) {
      const res = await axios.get("/api/film/getFilm");
      setFilms(res.data);
    }

    setIsHasData(true);
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    let isSuccess = true;
    if (filmId && episodeID && episodeUrl) {
      const list = await (
        await axios.get("/api/episodeFilm//getEpisodeFilm/" + filmId)
      ).data;
      console.log(list);
      for (let index = 0; index < list.length; index++) {
        console.log(list[index].episodeID == episodeID);
        if (list[index].episodeID == episodeID) {
          isSuccess = false;
          break;
        }
      }
      if (isSuccess) {
        const res = await axios.post("/api/episodeFilm//addEpisode", {
          filmID: filmId,
          episodeID: episodeID,
          url: episodeUrl,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Thêm thành công",
          confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Tập phim đã tồn tại",
          confirmButtonText: '<div class="fa fa-thumbs-up"}>OK</div>',
        });
      }
    }
  };

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
                  visible={
                    searchResult.length > 0 &&
                    inputRef.current.value.trim().length > 0
                  }
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
                          return (
                            <FilmItem
                              key={index}
                              film={film}
                              callBack={[
                                setFilmName,
                                setSearchResult,
                                setFilmId,
                              ]}
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
                      ref={inputRef}
                      value={filmName}
                      required
                      onChange={handleChangeFilmName}
                    />
                  </div>
                </HeadlessTippy>
                <div className={cx("input-box")}>
                  <label htmlFor="countEpisode">Tập Phim</label>
                  <input
                    type="number"
                    name="countEpisode"
                    id="countEpisode"
                    placeholder="Tập phim"
                    min="1"
                    required
                    onChange={handleChangeEpisode}
                  />
                </div>
                <div className={cx("input-box")}>
                  <label htmlFor="urlEpisode">Link url</label>
                  <input
                    type="text"
                    name="urlEpisode"
                    id="urlEpisode"
                    placeholder="Link url"
                    required
                    onChange={handleChangeUrl}
                  />
                </div>

                <button
                  type="submit"
                  onClick={handleClickSubmit}
                  name="sumbmit_add_film"
                >
                  Lưu
                </button>
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
export default AddEpisodeFilm;
