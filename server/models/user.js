const userModel = {
  signUp: (connection) => {
    connection.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
      var sql =
        "INSERT INTO login_user(account, password, userName, avatarUrl) VALUES ('quangtrinh', '04112002', 'quang', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvnexpress.net%2Fgiai-tri%2Fphim%2Fthu-vien-phim%2Favatar-2-the-way-of-water-528&psig=AOvVaw0L6bTNrMiJw7Z7337PnHO3&ust=1671379503324000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKC-7_6DgfwCFQAAAAAdAAAAABAE')";
      connection.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("1 record inserted");
      });
    });
  },
  getThongTin: (connection, callback) => {
    var sql = "SELECT * FROM login_user";
    var data;
    connection.query(sql, (err, result, fields) => {
      if (err) {
        callback(err, null);
      }
      else callback(null, result);
    });
    return data;
  },
};

module.exports = userModel;
