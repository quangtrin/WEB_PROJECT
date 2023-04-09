import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/Admin//HeaderAdmin/HeaderAdmin";
import NavAdmin from "../../components/Admin//NavAdmin/NavAdmin";

import { Outlet } from "react-router-dom";


const Admin = ({ admin }) => {
  const navigate = useNavigate();
  if (admin?.token === null) {
    navigate("/AdminLogin");
  }
  return (
    <div>
      <Outlet context={admin} />
      <HeaderAdmin></HeaderAdmin>
      <NavAdmin admin={admin}></NavAdmin>
    </div>
  );
};
export default Admin;
