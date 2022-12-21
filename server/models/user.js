const userModel = {
  signUp: async (connection, account, password, callback) => {
    var sql =
      "SELECT idLoginUser, userName FROM login_user WHERE account = " +
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
    avatarUrl,
    callback
  ) => {
    var sql =
      "SELECT idLoginUser FROM login_user WHERE account = " +
      "'" +
      account +
      "'";
    await connection.query(sql, (err, result, fields) => {
      if (err) callback(err, null);
      else if (result[0] == null) {
        callback(null, true);
        sql =
          "INSERT INTO login_user(account, password, userName, avatarUrl) VALUES " +
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
          avatarUrl +
          "')";
        connection.query(sql, (err, result) => {
          if (err) console.log(err);
        });
      } else callback(null, false);
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
