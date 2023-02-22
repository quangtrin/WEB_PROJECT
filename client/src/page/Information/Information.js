import classNames from "classnames/bind";
import userDefault from "../../imgs/user_default.png";
import { FaPen } from "react-icons/fa";
import InputBox from "./InputBox/InputBox";
import styles from "./Information.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

const Information = ({ user, setIsSignUp }) => {
    const { filmName } = useParams();
    const [isHasData, setIsHasData] = useState(false);
    const [film, setFilm] = useState();
    const [episodeFilm, setEpisodeFilm] = useState();
    const [hide, setHide] = useState(true);

    const getDataUser = async () => {
        setIsHasData(false);
        const res = await axios.get("/api/film/getFilm/" + filmName);
        setFilm(res.data);
    };

    const getDataEpisodeFilm = async () => {
        if (film) {
            const res2 = await axios.get("/api/episodeFilm/getEpisodeFilm/" + film?.filmID);
            setEpisodeFilm(res2.data);
            setIsHasData(true);
        }
    };

    useEffect(() => {
        getDataFilms();
        document.title = filmName;
    }, []);

    useEffect(() => {
        getDataEpisodeFilm();
    }, [film]);
    return (
        <div>
            <Header user={user} setIsSignUp={setIsSignUp}></Header>
            <div className={cx("body")}>
                <div className={cx("information")}>
                    <div className={cx("container")}>
                        <div className={cx("title")}>Thông tin người dùng</div>
                        <div className={cx("avatar_user")}>
                            <div className={cx("image")}>
                                <img src={userDefault} alt="" className={cx("profile-img")} />
                            </div>
                            <div className={cx("update_avatar")}>
                                <a href="#"><FaPen /></a>
                            </div>
                            <div className={cx("text-data")}>
                                <span className={cx("name")}>Xin chào, Trịnh Ngọc Bình !</span>
                            </div>
                        </div>
                        <div className={cx("content")}>
                            <form action="#">
                                <div className={cx("user-details")}>
                                    <InputBox title={"Họ và Tên"} type={"text"} name={"fullname"}></InputBox>
                                    <InputBox title={"Tên người dùng"} type={"text"} name={"username"}></InputBox>
                                    <InputBox title={"Email"} type={"email"} name={"email"} ></InputBox>
                                    <InputBox title={"Ngày sinh"} type={"date"} name={"dateofbirth"} ></InputBox>
                                    <InputBox title={"Số điện thoại"} type={"number"} name={"phone"} warning={" (*)Chưa cập nhật!"} ></InputBox>
                                    <InputBox title={"Địa chỉ"} type={"text"} name={"adds"} warning={" (*)Chưa cập nhật!"} ></InputBox>
                                    <InputBox title={"Giới tính"} type={"text"} name={"gender"} warning={" (*)Chưa cập nhật!"} ></InputBox>
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
            <Footer></Footer>
        </div>
    );
};
export default Information;
