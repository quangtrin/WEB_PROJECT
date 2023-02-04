import { Container, Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import HeaderAdmin from "../componentsAdmin/HeaderAdmin/HeaderAdmin";
import styles from "./HomeAdmin.module.scss";

const cx = classNames.bind(styles);
const HomeAdmin = () => {

  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
    </div>
  );
};
export default HomeAdmin;
