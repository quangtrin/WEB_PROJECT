const userModel = {
  signUp: (connection, account, password, callback) => {
    var sql = "SELECT idLoginUser, userName FROM login_user WHERE account = " + "'" +account+"'" + "AND password = " + "'" +password+"'";
    connection.query(sql, (err, result, fields) => {
      if(err) callback(err,null);
      else{
        callback(null, result);
      }
    })
  },
  getThongTin: async (connection, callback) => {
    var sql = "SELECT * FROM login_user";
    await connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      }
      else callback(null, result);
    });
  },
};

module.exports = userModel;
