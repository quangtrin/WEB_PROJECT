import classNames from "classnames/bind";
import HeaderAdmin from "../../page/Admin/componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../page/Admin/componentsAdmin/NavAdmin/NavAdmin";
import ListFilmAdmin from "./FilmAdmin/ListFilmAdmin";
import AddFilmAdmin from "./FilmAdmin/AddFilmAdmin";

import ListAccountAdmin from "./Account/ListAccountAdmin";
import ListAccountUser from "./Account/ListAccountUser";
import AddAccountAdmin from "./Account/AddAccountAdmin";
import AddEpisodeFilm from "./FilmAdmin/AddEpisodeFilm";


const cx = classNames.bind();
const Admin = () => {

    return (
        <div>
            <AddFilmAdmin></AddFilmAdmin>
            <AddEpisodeFilm></AddEpisodeFilm>
            <ListFilmAdmin></ListFilmAdmin>
            <ListAccountAdmin></ListAccountAdmin>
            <ListAccountUser></ListAccountUser>
            <AddAccountAdmin></AddAccountAdmin>
            <HeaderAdmin></HeaderAdmin>
            <NavAdmin></NavAdmin>
        </div>
    );
};
export default Admin;
