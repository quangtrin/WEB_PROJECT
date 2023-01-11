import { connect } from "../db.js";

const adminController = {
  addEpisode: async (req, res) => {
    const { filmID, episodeID, url } = req.body;
    var sql = "INSERT INTO episode_film( filmID, episodeID, url ) VALUES (?,?,?)";
    try{
    const [result] = await connect.query(sql, [filmID, episodeID, url]);
    res.json(true);
    }catch(error){
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
};
export default adminController;
