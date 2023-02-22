import classNames from "classnames/bind";
import styles from "./InputBox.module.scss";
const cx = classNames.bind(styles);

const InputBox = (props) => {
    return (
        <div className={cx("input-box")}>
            <span className={cx("details")}>{props.title}<span className={cx("text-placeholder")}>{props.warning}</span></span>
            <input type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} />
        </div>
    );
}

export default InputBox;