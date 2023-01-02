const userModel = {
  signUp: async (connection, account, password, callback) => {
    var sql =
      "SELECT userID, userName FROM login_user WHERE account = " +
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
      "SELECT commentID, comment, userID, commentParentID, DATE_FORMAT(time, '%H:%i %d-%m-%Y') AS time, likeCount, filmID, episodeID FROM comment";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
  getEpisodeFilm: async (connection, callback) => {
    var sql = "SELECT * FROM main.episode_film ";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
};

module.exports = userModel;
