import classNames from "classnames/bind";
import styles from "./CardFilm.module.scss";
const cx = classNames.bind(styles);
const CardFilm = (props) => {
  return (
    <div className={cx("film-card")}>
      <div className={cx("content-card")}>
        <button className={cx("practice")}>{props.episode}/{props.duration}</button>
      </div>
      <div className={cx("image-card")}>
        <img src={props.imgUrl} alt="" className={cx("film-img")} />
      </div>
      <div className={cx("text-card")}>
        <span className={cx("name")}>{props.name}</span>
      </div>
    </div>
  );
};

export default CardFilm;