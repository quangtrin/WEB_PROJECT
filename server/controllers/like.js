import { connect } from "../db.js";

const likeController = {
  likeComment: async (req, res) => {
    const { liked, commentID, userID } = req.body;
    if (liked) {
      const sql = "INSERT INTO like_comment(commentID, userID) VALUES (?,?)";
      try {
        const [result] = await connect.query(sql, [commentID, userID]);
        res.json({ msg: "Đã thích" });
      } catch (error) {
        console.log(error);
      }
    } else {
      const sql = "DELETE FROM like_comment WHERE commentID=? AND userID=?";
      try {
        const [result] = await connect.query(sql, [commentID, userID]);
        res.json({ msg: "Xóa thành công" });
      } catch (error) {
        console.log(error);
      }
    }
  },

  getLikeComment: async (req, res) => {
    const { commentID, userID } = req.params;
    var result;
    const sql =
      "SELECT COUNT(like_comment.commentID) as likeCount FROM like_comment WHERE commentID=?";
    try {
      [result] = await connect.query(sql, [commentID]);
    } catch (error) {
      console.log(error);
    }
    if (userID) {
      const sql =
        "SELECT userID as userLiked FROM like_comment WHERE commentID=? AND userID=?";
      try {
        const [result1] = await connect.query(sql, [commentID, userID]);
        result[0] = {
          ...result[0],
          userLiked: result1[0] ? true : false,
        };
      } catch (error) {
        console.log(error);
      }
    }
    res.json(result);
  },
};

export default likeController;
