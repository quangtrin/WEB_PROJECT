import imgLogo from "../imgs/logo-pops.png";
import imgIconSearch from "../imgs/search.png";

import "./Header.css";

const Header = () => {
    return (
        // html
        <>
            <header className="header">
                <img src={imgLogo} alt="logo" />
                <nav className="container">
                    <ul className="header_nav_links">
                        <li>
                            <a href="#">Thiếu nhi</a>
                        </li>
                        <li>
                            <a href="#">Comics</a>
                        </li>
                        <li>
                            <a href="#">Anime</a>
                        </li>
                        <li>
                            <a href="#">Phim</a>
                        </li>
                        <li>
                            <a href="#">Âm nhạc</a>
                        </li>
                        <li>
                            <a href="#">Thêm</a>
                        </li>
                    </ul>
                </nav>
                <form className="header_form" action="#">
                    <input className="header_search" type="text" placeholder="Search..." />
                    <button type="submit">
                        <img src={imgIconSearch} alt="" />
                    </button>
                </form>
                <a className="cta" href="#">
                    <button className="header_register">ĐĂNG KÝ</button>
                </a>
                <a className="cta" href="#">
                    <button className="header_login">ĐĂNG NHẬP</button>
                </a>
            </header>
        </>
    )
}

export default Header;