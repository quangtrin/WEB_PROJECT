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
    categoryID,
    url,
    callback
  ) => {
    var sql =
      "INSERT INTO film( filmName, status, point, year, duration, description, categoryID, url ) VALUES ?";
    const VALUES = [
      [
        filmName,
        Number(status),
        Number(point),
        Number(year),
        duration,
        description,
        Number(categoryID),
        url,
      ],
    ];
    connect.query(sql, [VALUES], (err, result) => {
      if (err) callback(err, null);
      else callback(null, true);
    });
  },
  addCategory: async (connect, category, callback) => {
    var sql =
      "INSERT INTO category_film( category ) VALUES('" + category + "')";
    connect.query(sql, (err, result) => {
      if (err) callback(err, null);
      else callback(null, true);
    });
  },
};
module.exports = adminModel;
