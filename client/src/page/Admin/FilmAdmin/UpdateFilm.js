import classNames from "classnames/bind";
import styles from "./UpdateFilm.module.scss";
import { useOutletContext } from "react-router-dom";

const cx = classNames.bind(styles);
const UpdateAdmin = () => {
    const adminToken = useOutletContext();
    return (
        <div>
            <div className={cx("body")}>
                <div className={cx("container")}>
                    <div className={cx("title")}>Sửa Phim</div>
                    <div className={cx("content")}>
                        <form action="#">
                            <div className={cx("user-details")}>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Tên Phim</span>
                                    <input
                                        type="text"
                                        name="filmName"
                                        id="filmName"
                                        placeholder="Tên phim"
                                        required
                                    />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Avatar</span>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        required
                                        accept="image/*"
                                    />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Mô tả</span>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Mô tả"
                                        required
                                    />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Thời lượng</span>
                                    <input
                                        type="text"
                                        name="duration"
                                        id="duration"
                                        placeholder="Thời lượng"
                                        required
                                    />
                                </div>
                                <div className={cx("input-box")}>
                                    <span className={cx("details")}>Năm sản xuất</span>
                                    <input
                                        type="number"
                                        name="year"
                                        id="year"
                                        max="2023"
                                        placeholder="Năm sản xuất"
                                        required
                                    />
                                </div>
                            </div>
                            <span className={cx("details")}>Thể loại</span>
                            <div className={cx("select-box")}>
                                <div className={cx("input1")}>
                                    <input
                                        type="checkbox"
                                        id="category1"
                                        name="category1"
                                        value="Hành động"
                                    />
                                    <label htmlFor="category1">Hành động </label>
                                </div>
                                <div className={cx("input1")}>
                                    <input
                                        type="checkbox"
                                        id="category2"
                                        name="category2"
                                        value="Hài hước"
                                    />
                                    <label htmlFor="category2">Hài hước </label>
                                </div>
                                <div className={cx("input1")}>
                                    <input
                                        type="checkbox"
                                        id="category3"
                                        name="category3"
                                        value="Phưu lưu"
                                    />
                                    <label htmlFor="category3">Phưu lưu </label>
                                </div>
                                <div className={cx("input1")}>
                                    <input
                                        type="checkbox"
                                        id="category4"
                                        name="category4"
                                        value="Tiên Hiệp"
                                    />
                                    <label htmlFor="category4">Tiên Hiệp </label>
                                </div>
                                <div className={cx("input1")}>
                                    <input
                                        type="checkbox"
                                        id="category5"
                                        name="category5"
                                        value="Học đường"
                                    />
                                    <label htmlFor="category5">Học đường </label>
                                </div>
                            </div>
                            <div className={cx("radio-box")}>
                                <label>Trạng thái</label>
                                <fieldset className={cx("fieldset")}>
                                    <div className={cx("input")}>
                                        <input
                                            type="radio"
                                            name="status"
                                            id="status1"
                                            value="Hoàn thành"
                                            required
                                        />
                                        <label htmlFor="status1" className={cx("radio-label")}>Hoàn thành</label>
                                    </div>
                                    <br />
                                    <div className={cx("input")}>
                                        <input
                                            type="radio"
                                            name="status"
                                            id="status2"
                                            value="Chưa hoàn thành"
                                            required
                                        />
                                        <label htmlFor="status2" className={cx("radio-label")}>Đang cật nhật</label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className={cx("button")}>
                                <input type="submit" defaultValue="Lưu" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpdateAdmin;
