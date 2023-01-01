import classNames from "classnames/bind";
import styles from "./CommentChild.module.scss";


const cx = classNames.bind(styles);

function CommentChild({ data }) {
  return (
    <div className={cx("comment_child")}>
      <div className={cx("comment_child-avatar")}>
        <img src={data.commentAvartar} alt="Avatar" />
      </div>
      <div className={cx("comment_child-body")}>
        <div className={cx("comment_child-body_message")}>
          <span className={cx("comment_child-message-name")}>
            {data.commentName}
          </span>
          <span className={cx("comment_child-message-main")}>
            {data.commentName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentChild;
