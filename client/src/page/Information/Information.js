import classNames from "classnames/bind";
import userDefault from "../../imgs/user_default.png";

import styles from "./Information.module.scss";


const cx = classNames.bind(styles);

const Information = () => {

    return (
        <div>
            <div className={cx("body")}>
                <div className={cx("container")}>
                    <div className={cx("title")}>Thông tin người dùng</div>
                    <div className={cx("avatar_user")}>
                        <div className={cx("image")}>
                            <img src={userDefault} alt="" className={cx("profile-img")} />
                        </div>
                        <div className={cx("text-data")}>
                            <span className={cx("name")}>Xin chào, Trịnh Ngọc Bình !</span>
                        </div>
                    </div>
                    <div className={cx("content")}>
                        <form action="#">
                            <div className={cx("user-details")}>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Họ và Tên</span>
                                    <input type="text" placeholder="Trịnh Ngọc Bình" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Tên người dùng</span>
                                    <input type="text" placeholder="binhtrinh812" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Email</span>
                                    <input type="email" placeholder="binhtrinh8122002@gmail.com" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Số điện thoại<span className={cx("text-placeholder")}> (*)Hiện tại chưa cập nhật!</span></span>
                                    <input type="number" placeholder="0374989546" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Địa chỉ<span className={cx("text-placeholder")}> (*)Hiện tại chưa cập nhật!</span></span>
                                    <input type="text" placeholder="Hà Nội" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Ngày sinh</span>
                                    <input type="date" />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Giới tính<span className={cx("text-placeholder")}> (*)Hiện tại chưa cập nhật!</span></span>
                                    <select name="gender" id="gender">
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                        <option value="other">Khác</option>
                                    </select>
                                </div>
                            </div>
                            <div className={cx("gender-details")}>
                                <div className={cx("category")}>
                                    <input type="checkbox" name="checked" defaultValue="commit" />
                                    <label htmlFor="checked"> Bạn cam kết chịu trách nhiệm trước những thông tin bạn đã đăng ký !</label><br />
                                </div>
                            </div>
                            <div className={cx("button")}>
                                <button type="submit" value="submit" >Thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Information;
