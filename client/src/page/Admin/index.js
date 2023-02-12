import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../page/Admin/componentsAdmin/HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../page/Admin/componentsAdmin/NavAdmin/NavAdmin";

import { Outlet } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind();
const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState();
  if (!location.state) {
    navigate("/AdminLogin");
  }
  return (
    <div>

      <Outlet />
      <HeaderAdmin></HeaderAdmin>
      <NavAdmin></NavAdmin>
    </div>
  );
};
export default Admin;
