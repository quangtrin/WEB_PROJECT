import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Category = ({ categoryHome, categoryName }) => {
    return (
        <li>
            <Link to={"/?Category=" + categoryName} className={categoryName === categoryHome ? cx("category", "active") : cx("category")}>{categoryName}</Link>
        </li>
    )
}

export default Category;