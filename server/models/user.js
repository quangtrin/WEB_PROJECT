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
  comment: async (
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
  getThongTin: async (connection, callback) => {
    var sql = "SELECT * FROM login_user";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      } else callback(null, result);
    });
  },
};

module.exports = userModel;
