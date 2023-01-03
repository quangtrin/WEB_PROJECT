import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { SendOutlined } from "@ant-design/icons";

import styles from "./Navbar.module.scss";
import CardFilm from "./cardFilm";
import Comment from "./Comment";
import axios from "axios";

const cx = classNames.bind(styles);

function Navbar() {
  const [key, setKey] = useState("comment");
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  const getComment = async () => {
    try {
      const res = await (await axios.get("/api/user/comment")).data;
      setComments(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSendComment = async (comment) => {
    if (comment.trim()) {
      const req = await axios.post("/api/user/comment", {
        userID: 6,
        comment: comment,
        filmID: 10,
        likeCount: 0,
      });
      setComments((prev) => [...prev, req]);
      setUserComment("");
    }
  };

  const commentChilds = [
    {
      id: 1,
      commentAvartar:
        "https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png",
      commentName: "Con",
      commentMessage: "Comment Con",
      time: "21h",
      likes: 1,
    },
  ];

  const Films = [
    {
      href: "#",
      id: 1,
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemon_t_p_m_i_xem_ngay-1152f671c7e3-1667616000071-RwrJYn8Z.png?v=0&maxW=300&format=webp",
      name: "Doraemon",
      time: 1979,
      rate: "7+",
      product: "TV Asashi VN",
      des: "Doraemon được mua bản quyền và được cập nhật phát sóng mới nhất trên ứng dụng giải trí POPS. Đây là bộ phim hoạt hình chuyển thể từ truyện tranh hấp dẫn nhất Nhật Bản: Doraemon của tác giả Fujiko Fujio sáng tác từ năm 1969.Bộ truyện kể về một chú mèo máy tên Doraemon đến từ thế kỉ 22 để giúp một cậu bé lớp 5 hậu đậu tên là Nobi Nobita. Sewashi (Nobito), cháu ba đời của Nobita gửi Doraemon về quá khứ nhằm giúp đỡ ông mình, qua đó cải thiện được hoàn cảnh của con cháu Nobita sau này. Các tập phim Doraemon thường xoay quanh những rắc rối hay xảy ra với cậu bé Nobita. Cốt truyện thường gặp nhất là Nobita trở về nhà khóc lóc với Doraemon vì những rắc rối mà cậu gặp phải ở trường học hoặc với bạn bè. Sau khi bị cậu van nài hoặc thúc giục, Doraemon sẽ lấy ra một bảo bối trong chiếc túi thần kỳ trước bụng để giúp Nobita giải quyết rắc rối của mình.Nhưng Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon. Cậu thường lấy sự ưu việt của bảo bối để trêu ghẹo mọi người nên cuối cùng bị phản tác dụng, bị bảo bối gây phiền phức. Có đôi khi những người bạn của Nobita, thường là Suneo hoặc Jaian lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Kết thúc mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, từ đó khán giả sẽ rút ra được bài học cho riêng mình. Doraemon là bộ phim hoạt hình thiếu nhi mang lại cho khán giả những tràng cười thoải mái, những tình huống vui nhộn cùng những bài học giáo dục đầy ý nghĩa. Phim được lồng tiếng với chất lượng hình ảnh sắc nét mang lại trải nghiệm xem phim tuyệt vời. Xem trọn bộ Doraemon full HD ngay tại POPS bạn nhé.",
    },
    {
      href: "#",
      id: 2,
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemon_t_p_m_i_xem_ngay-1152f671c7e3-1667616000071-RwrJYn8Z.png?v=0&maxW=300&format=webp",
      name: "Doraemon",
      time: 1979,
      rate: "7+",
      product: "TV Asashi VN",
      des: "Doraemon được mua bản quyền và được cập nhật phát sóng mới nhất trên ứng dụng giải trí POPS. Đây là bộ phim hoạt hình chuyển thể từ truyện tranh hấp dẫn nhất Nhật Bản: Doraemon của tác giả Fujiko Fujio sáng tác từ năm 1969.Bộ truyện kể về một chú mèo máy tên Doraemon đến từ thế kỉ 22 để giúp một cậu bé lớp 5 hậu đậu tên là Nobi Nobita. Sewashi (Nobito), cháu ba đời của Nobita gửi Doraemon về quá khứ nhằm giúp đỡ ông mình, qua đó cải thiện được hoàn cảnh của con cháu Nobita sau này. Các tập phim Doraemon thường xoay quanh những rắc rối hay xảy ra với cậu bé Nobita. Cốt truyện thường gặp nhất là Nobita trở về nhà khóc lóc với Doraemon vì những rắc rối mà cậu gặp phải ở trường học hoặc với bạn bè. Sau khi bị cậu van nài hoặc thúc giục, Doraemon sẽ lấy ra một bảo bối trong chiếc túi thần kỳ trước bụng để giúp Nobita giải quyết rắc rối của mình.Nhưng Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon. Cậu thường lấy sự ưu việt của bảo bối để trêu ghẹo mọi người nên cuối cùng bị phản tác dụng, bị bảo bối gây phiền phức. Có đôi khi những người bạn của Nobita, thường là Suneo hoặc Jaian lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Kết thúc mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, từ đó khán giả sẽ rút ra được bài học cho riêng mình. Doraemon là bộ phim hoạt hình thiếu nhi mang lại cho khán giả những tràng cười thoải mái, những tình huống vui nhộn cùng những bài học giáo dục đầy ý nghĩa. Phim được lồng tiếng với chất lượng hình ảnh sắc nét mang lại trải nghiệm xem phim tuyệt vời. Xem trọn bộ Doraemon full HD ngay tại POPS bạn nhé.",
    },
    {
      href: "#",
      id: 3,
      img: "https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemon_t_p_m_i_xem_ngay-1152f671c7e3-1667616000071-RwrJYn8Z.png?v=0&maxW=300&format=webp",
      name: "Doraemon",
      time: 1979,
      rate: "7+",
      product: "TV Asashi VN",
      des: "Doraemon được mua bản quyền và được cập nhật phát sóng mới nhất trên ứng dụng giải trí POPS. Đây là bộ phim hoạt hình chuyển thể từ truyện tranh hấp dẫn nhất Nhật Bản: Doraemon của tác giả Fujiko Fujio sáng tác từ năm 1969.Bộ truyện kể về một chú mèo máy tên Doraemon đến từ thế kỉ 22 để giúp một cậu bé lớp 5 hậu đậu tên là Nobi Nobita. Sewashi (Nobito), cháu ba đời của Nobita gửi Doraemon về quá khứ nhằm giúp đỡ ông mình, qua đó cải thiện được hoàn cảnh của con cháu Nobita sau này. Các tập phim Doraemon thường xoay quanh những rắc rối hay xảy ra với cậu bé Nobita. Cốt truyện thường gặp nhất là Nobita trở về nhà khóc lóc với Doraemon vì những rắc rối mà cậu gặp phải ở trường học hoặc với bạn bè. Sau khi bị cậu van nài hoặc thúc giục, Doraemon sẽ lấy ra một bảo bối trong chiếc túi thần kỳ trước bụng để giúp Nobita giải quyết rắc rối của mình.Nhưng Nobita sẽ lại thường đi quá xa so với dự định ban đầu của Doraemon. Cậu thường lấy sự ưu việt của bảo bối để trêu ghẹo mọi người nên cuối cùng bị phản tác dụng, bị bảo bối gây phiền phức. Có đôi khi những người bạn của Nobita, thường là Suneo hoặc Jaian lại lấy trộm những bảo bối và sử dụng chúng không đúng mục đích. Kết thúc mỗi câu chuyện, những ai sử dụng sai mục đích bảo bối sẽ phải chịu hậu quả do mình gây ra, từ đó khán giả sẽ rút ra được bài học cho riêng mình. Doraemon là bộ phim hoạt hình thiếu nhi mang lại cho khán giả những tràng cười thoải mái, những tình huống vui nhộn cùng những bài học giáo dục đầy ý nghĩa. Phim được lồng tiếng với chất lượng hình ảnh sắc nét mang lại trải nghiệm xem phim tuyệt vời. Xem trọn bộ Doraemon full HD ngay tại POPS bạn nhé.",
    },
  ];

  useEffect(() => {
    getComment();
  }, [comments]);

  // useEffect(() => {
  //   handleSendComment();
  // }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("Tabs")}>
        <div
          className={cx("Tab", key === "more" ? "active" : "")}
          onClick={() => setKey("more")}
        >
          <span className={cx("Label")}>Xem thêm</span>
        </div>
        <div
          className={cx("Tab", key === "comment" ? "active" : "")}
          onClick={() => setKey("comment")}
        >
          <span className={cx("Label")}>Bình luận ({comments.length})</span>
        </div>
      </div>

      <div className={cx("container")}>
        {key === "more" ? (
          Films.map((film) => {
            return <CardFilm key={film.id} props={film}></CardFilm>;
          })
        ) : (
          <div>
            <div className={cx("user-comment")}>
              <div className={cx("user-comment-avatar")}>
                <img
                  src="https://products.popsww.com/api/v2/containers/file2/profiles/Adult-01.png"
                  alt="Avatar"
                />
              </div>
              <div className={cx("user-comment-input")}>
                <input
                  type="text"
                  placeholder="Gửi bình luận"
                  onChange={(e) => setUserComment(e.target.value)}
                  value={userComment}
                />
              </div>
              <div className={cx("user-comment-send_icon")}>
                <SendOutlined
                  className={cx(userComment.trim() ? "active" : "")}
                  style={{ transform: "rotate(-45deg)" }}
                  onClick={
                    userComment.trim()
                      ? () => handleSendComment(userComment)
                      : null
                  }
                />
              </div>
            </div>

            {/* List comment */}
            <div className={cx("list-container")}>
              {comments.map((comment) => {
                return (
                  <Comment
                    key={comment.commentID}
                    data={comment}
                    // commentChilds={commentChilds}
                  ></Comment>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
