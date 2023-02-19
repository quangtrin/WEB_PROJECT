import classNames from "classnames/bind";
import styles from "./PaginationAdmin.module.scss";

const cx = classNames.bind(styles);
const PaginationAdmin = () => {
    return (
        <div className={cx("pagination")}>
            <a class="active" href="#">1</a>
            <a href="#">2</a>
            <span>...</span>
            <a href="#">3</a>
            <a href="#">4</a>
        </div>
    );
};
export default PaginationAdmin;