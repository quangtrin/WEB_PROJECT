import classNames from "classnames/bind";
import HeaderAdmin from "../../page/Admin/componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../page/Admin/componentsAdmin/NavAdmin/NavAdmin";
import ListFilmAdmin from "./FilmAdmin/ListFilmAdmin";
import AddFilmAdmin from "./FilmAdmin/AddFilmAdmin";


const cx = classNames.bind();
const Admin = () => {

    return (
        <div>
            <AddFilmAdmin></AddFilmAdmin>
            <ListFilmAdmin></ListFilmAdmin>
            <HeaderAdmin></HeaderAdmin>
            <NavAdmin></NavAdmin>
        </div>
    );
};
export default Admin;
