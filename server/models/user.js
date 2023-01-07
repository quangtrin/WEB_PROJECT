const userModel = {
  signUp: async (connection, account, password, callback) => {
    var sql =
      "SELECT userID, userName, avatar FROM login_user WHERE account = " +
      "'" +
      account +
      "'" +
      "AND password = " +
      "'" +
      password +
      "'";
    await connection.query(sql, (err, result, fields) => {
      if (err) callback(err, null);
      else {
        callback(null, result);
      }
    });
  },
  register: async (
    connection,
    account,
    password,
    userName,
    dateOfBirth,
    avatarUrl,
    callback
  ) => {
    var sql =
      "SELECT userID FROM login_user WHERE account = " + "'" + account + "'";
    await connection.query(sql, (err, result, fields) => {
      if (err) callback(err, null);
      else if (result[0] == null) {
        callback(null, true);
        sql =
          "INSERT INTO login_user(account, password, userName, dateOfBirth, avatar, status) VALUES " +
          "('" +
          account +
          "'," +
          "'" +
          password +
          "'," +
          "'" +
          userName +
          "'," +
          "'" +
          dateOfBirth +
          "'," +
          "'" +
          avatarUrl +
          "',0)";
        connection.query(sql, (err, result) => {
          if (err) console.log(err);
        });
      } else callback(null, false);
    });
  },
  getFilm: async (connection, callback) => {
    var sql = "SELECT * FROM film ";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
  getFilmByName: async (connection, filmName, callback) => {
    var sql = "SELECT * FROM film WHERE filmName = " + "'" + filmName + "'";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    })
  },
  addComment: async (
    connect,
    comment,
    userID,
    commentParentID,
    likeCount,
    filmID,
    episodeID,
    callback
  ) => {
    var sql =
      "INSERT INTO comment( comment, userID, commentParentID, likeCount, filmID, episodeID ) VALUES ?";
    const VALUES = [
      [
        comment,
        Number(userID),
        commentParentID ? Number(commentParentID) : null,
        Number(likeCount),
        Number(filmID),
        episodeID ? Number(episodeID) : null,
      ],
    ];
    connect.query(sql, [VALUES], (err, result) => {
      if (err) callback(err, null);
      else callback(null, true);
    });
  },
  getComment: async (connection, callback) => {
    var sql =
      "SELECT commentID, comment, comment.userID, login_user.avatar, userName, commentParentID, DATE_FORMAT(time, '%H:%i %d-%m-%Y') AS time, likeCount, filmID, episodeID FROM comment JOIN login_user ON comment.userID = login_user.userID ORDER BY comment.time DESC";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
  getEpisodeFilm: async (connection, callback) => {
    var sql = "SELECT * FROM episode_film ";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
};

module.exports = userModel;
