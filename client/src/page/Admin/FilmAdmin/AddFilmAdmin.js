import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./FilmAdmin.module.scss";

const cx = classNames.bind(styles);
const AddFilm = () => {
  const [filmName, setFilmName] = useState("");
  const [point, setPoint] = useState("");
  const [year, setYear] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [avatar, setAvatar] = useState();

 

  const handleChangeAvatar = (e) => {
    // console.log(e.target.files[0]);
    setAvatar(e.target.files[0]);
  };

  const handleChangeFilmName = (e) => {
    setFilmName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePoint = (e) => {
    setPoint(e.target.value);
  };

  const handleChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const handleChangeCategorys = (e) => {
    const check = categorys.indexOf(e.target.value);
    if (check < 0) setCategorys((prev) => [...prev, e.target.value]);
    else
      setCategorys((prev) =>
        prev.filter((value, index) => {
          if (index !== check) return value;
        })
      );
  };

  return (
    <div>
      <div className={cx("main-container")}>
        <div className={cx("add-film")}>
          <div className={cx("card")}>
            <section className={cx("container")}>
              <form action="#" className={cx("form")}>
                <h1>Thêm mới phim</h1>
                <div className={cx("input-box")}>
                  <label>Avatar</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    required
                    accept="image/*"
                    onChange={handleChangeAvatar}
                  />
                </div>
                <div className={cx("input-box")}>
                  <label>Tên phim</label>
                  <input
                    type="text"
                    name="filmName"
                    id="filmName"
                    placeholder="Tên phim"
                    onChange={handleChangeFilmName}
                    required
                  />
                </div>
                <div className={cx("select-box")}>
                  <input
                    type="checkbox"
                    id="category1"
                    name="category1"
                    value="Hành động"
                    onChange={handleChangeCategorys}
                  />
                  <label htmlFor="category1">Hành động </label>
                  <input
                    type="checkbox"
                    id="category2"
                    name="category2"
                    value="Hài hước"
                    onChange={handleChangeCategorys}
                  />
                  <label htmlFor="category2">Hài hước </label>
                  <input
                    type="checkbox"
                    id="category3"
                    name="category3"
                    value="Phưu lưu"
                    onChange={handleChangeCategorys}
                  />
                  <label htmlFor="category3">Phưu lưu </label>
                  <input
                    type="checkbox"
                    id="category4"
                    name="category4"
                    value="Tiên Hiệp"
                    onChange={handleChangeCategorys}
                  />
                  <label htmlFor="category4">Tiên Hiệp </label>
                  <input
                    type="checkbox"
                    id="category5"
                    name="category5"
                    value="Học đường"
                    onChange={handleChangeCategorys}
                  />
                  <label htmlFor="category5">Học đường </label>
                </div>
                <div className={cx("input-box")}>
                  <label>Mô tả</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Mô tả"
                    onChange={handleChangeDescription}
                    required
                  />
                </div>
                <div className={cx("input-box")}>
                  <label>Điểm</label>
                  <input
                    type="number"
                    name="point"
                    id="point"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="Điểm"
                    onChange={handleChangePoint}
                    required
                  />
                </div>
                <div className={cx("input-box")}>
                  <label>Thời lượng</label>
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    placeholder="Thời lượng"
                    onChange={handleChangeDuration}
                    required
                  />
                </div>
                <div className={cx("input-box")}>
                  <label>Năm sản xuất</label>
                  <input
                    type="number"
                    name="year"
                    id="year"
                    max="2023"
                    placeholder="Năm sản xuất"
                    onChange={handleChangeYear}
                    required
                  />
                </div>
                <button type="submit" name="sumbmit_add_film">
                  Lưu
                </button>
              </form>
            </section>
          </div>
          {avatar ? (
            <div className={cx("preview")}>
              <img src={URL.createObjectURL(avatar)} alt="preview-avatar" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default AddFilm;
