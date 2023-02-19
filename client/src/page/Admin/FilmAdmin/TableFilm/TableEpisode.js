import classNames from "classnames/bind";
import styles from "./TableFilm.module.scss";

const cx = classNames.bind(styles);
const TableEpisode = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td><img className={cx("list_img")} src={props.avatar}></img></td>
            <td>{props.nameEpisode}</td>
            <td>{props.description}</td>
            <td>{props.episode}</td>
            <td>{props.time}</td>
            <td className={cx("interactive")}><button>Sửa</button> <button>Xóa</button></td>
        </tr>
    );
};
export default TableEpisode;