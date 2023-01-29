import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./FilmAdmin.module.scss";

const cx = classNames.bind(styles);
const AddFilm = () => {

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("card")}>
                    <section className={cx("attendance")}>
            <div className={cx("attendance-list")}>
              <h1>Thêm mới</h1>
          <form name="" id="" method="" action="" encType="multipart/form-data">
            <div classname={cx("form-group")}>
              <label>Avatar</label>
              <input type="file" required name="image" id="image" multiple="multiple" />
            </div>
            <div className={cx("form-group")}>
              <label>Tên phim<span className={cx("text-danger")}>*</span></label>
              <input type="text" className={cx("form-control")} name="name" id="name" required minLength={3} maxLength={200} placeholder="Tên phim" />
            </div>
            <div className={cx("form-group")}>
              <label>Tập phim <span className={cx("text-danger")}>*</span></label>
              <input type="text" className={cx("form-control")} name="episode" id="episode" required minLength={3} maxLength={200} placeholder="Tập phim" />
            </div>
            <div className={cx("form-group")}>
              <label>Thể loại <span className="text-danger">*</span></label>
              <select className={cx("form-control")} name="category" id="category">
                <option value="hanhdong">Hành Động
                </option>
                <option value="phieuluu">Phiêu Lưu
                </option>
              </select>
            </div>
            <div className={cx("form-group")}>
              <label>Trạng thái</label>
              <label className={cx("radio-inline")}>
                <input type="radio" name="status" id="status_onl" defaultValue={1} defaultChecked /> Online
              </label>
              <label className={cx("radio-inline")}>
                <input type="radio" name="status" id="status_off" defaultValue={0} /> Offline
              </label>
            </div>
            <button type="submit" className={cx("btn btn-primary")} name="submit_add_account">Lưu</button>
          </form>
        </div>
        </section>
        </div>
      </div>
    </div>
  );
};
export default AddFilm;
