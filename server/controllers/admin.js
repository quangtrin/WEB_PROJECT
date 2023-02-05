import { connect } from "../db.js";
import filmData from "../FILE_URL/film.json"  assert { type: "json" };
import episodeData from "../FILE_URL/episodeFilm.json"  assert { type: "json" };
import * as dotenv from 'dotenv';
dotenv.config();
const adminController = {
  addEpisode: async (req, res) => {
    const { filmID, episodeID, url } = req.body;
    var sql = "INSERT INTO episode_film( filmID, episodeID, url ) VALUES (?,?,?)";
    try {
      const [result] = await connect.query(sql, [filmID, episodeID, url]);
      res.json(true);
    } catch (error) {
      console.log(error);
      res.json(false);
    }
  },

  addFilm: async (req, res) => {
    const {
      filmName,
      status,
      point,
      year,
      duration,
      description,
      category,
      url,
    } = req.body;

    var sql = "INSERT INTO film( filmName, status, point, year, duration, description, category, url ) VALUES (?,?,?,?,?,?,?,?)";
    try {
      const [result] = await connect.query(sql, [filmName, status, point, year, duration, description, category, url]);
      res.json(true);
    } catch (error) {
      console.log(error);
      res.json(false);
    }
  },
  autoUpdateFilm: async (req, res) => {
    if (req.params.passwordUpdate === process.env.PASSWORD_INSERT) {
      var valuesEpisodeNull = [];
      var valuesFilmNull = [];
      var sql = "SELECT film.filmID, episode_film.episodeID, film.filmName FROM film LEFT JOIN episode_film ON film.filmID = episode_film.filmID";
      try {
        const [film] = await connect.query(sql);
        filmData.map((newFilm) => {
          const findFilm = film.find((oldFilm) => {
            return oldFilm.filmName === newFilm.filmName;
          })
          if (!findFilm) {
            const checkExist = valuesFilmNull.find((fi) => {
              return fi[0] === newFilm.filmName;
            })
            if (!checkExist)
              valuesFilmNull.push([newFilm.filmName, newFilm.status, newFilm.point, newFilm.year, newFilm.duration, newFilm.description, newFilm.category, newFilm.url]);
          }
        })
        if (valuesFilmNull[0] != null) {
          try {
            sql = "INSERT INTO film( filmName, status, point, year, duration, description, category, url ) VALUES ?";
            const [statusInsertFilm] = await connect.query(sql, [valuesFilmNull]);
          } catch (error) {
            console.log(error)
          }
        }
        episodeData.map((episode) => {
          const check = film.find((fi) => {
            return fi.filmName === episode.filmName && Number(fi.episodeID) === Number(episode.episodeID);
          })
          if (!check) {
            const findFilm = film.find((fi) => {
              return fi.filmName === episode.filmName;
            })
            if (findFilm) {
              const checkExist = valuesEpisodeNull.find((newEpisode) => {
                return Number(newEpisode[1]) === Number(episode.episodeID) && Number(newEpisode[0]) === Number(findFilm.filmID);
              })
              if (!checkExist) valuesEpisodeNull.push([findFilm.filmID, episode.episodeID, episode.url]);
            }
          }
        })
        sql = "INSERT INTO episode_film(filmID, episodeID, url) VALUES ?"
        try {
          if (valuesEpisodeNull[0] != null) {
            const [statusInsertEpisode] = await connect.query(sql, [valuesEpisodeNull]);
          }
        } catch (error) {
          console.log(error);
        }
        res.json("Update thành công");
      } catch (error) { console.log(error) };
    } else res.json("Bạn không có quyền truy cập trang web này");
  },
};
export default adminController;
