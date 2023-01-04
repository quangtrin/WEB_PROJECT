const adminModel = {
  addEpisode: async (connect, filmID, episodeID, url, callback) => {
    var sql = "INSERT INTO episode_film( filmID, episodeID, url ) VALUES ?";
    const VALUES = [[Number(filmID), Number(episodeID), url]];
    connect.query(sql, [VALUES], (err, result) => {
      if (err) callback(err, null);
      else callback(null, true);
    });
  },
  addFilm: async (
    connect,
    filmName,
    status,
    point,
    year,
    duration,
    description,
    category,
    url,
    callback
  ) => {
    var sql =
      "INSERT INTO film( filmName, status, point, year, duration, description, category, url ) VALUES ?";
    const VALUES = [
      [
        filmName,
        Number(status),
        Number(point),
        Number(year),
        duration,
        description,
        category,
        url,
      ],
    ];
    connect.query(sql, [VALUES], (err, result) => {
      if (err) callback(err, null);
      else callback(null, true);
    });
  },
};
module.exports = adminModel;
