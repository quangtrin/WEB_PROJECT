import classNames from "classnames/bind";
import HeaderAdmin from "../../page/Admin/componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../page/Admin/componentsAdmin/NavAdmin/NavAdmin";
import { Outlet } from "react-router-dom";

const cx = classNames.bind();
const Admin = () => {
  return (
    <div>
      <Outlet />
      <HeaderAdmin></HeaderAdmin>
      <NavAdmin></NavAdmin>
    </div>
  );
};
export default Admin;
