import { Container, Row, Col } from "react-bootstrap";
import TextInformation from "../../components/Text/TextInformation";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import classNames from "classnames/bind";
import styles from "./WatchFilm.module.scss";
import Footer from "../../components/Footer/Footer";

const cx = classNames.bind(styles);
const WatchFilm = ({ user, setIsSignUp }) => {
  return (
    <div>
      <Header user={user} setIsSignUp={setIsSignUp} ></Header>
      <div className={cx("layout")}>
        <div className={cx("layout_video", "container")}>
          <iframe className={cx("video")} src="https://suckplayer.xyz/video/08913a2e8cbcc8bf302a8554782add46"></iframe>
        </div>
        <div className={cx("layout_up")}>
          <Container style={{ paddingLeft: "10%" }}>
            <div className={cx("title_films")}>
              One Piece S20 - <span>Tập 921</span>
            </div>
            <div className={cx("under_line")}></div>
            <div className={cx("describe")}>
              <Row>
                <Col
                  xs={9}
                  style={{ paddingRight: "100px" }}
                >
                  <TextInformation
                    title="Mô tả: "
                    text="One Piece là bộ truyện tranh dành cho thiếu niên của tác giả
                    nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một
                    series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở
                    đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước
                    khi chết ông đã tiết lộ rằng mình có một kho báu..."
                    color="white"
                  />
                </Col>

                <Col xs={3}>
                  <div>
                    <TextInformation
                      title="Tên khác: "
                      text="Đảo Hải Tặc"
                      color="white"
                    />
                    <TextInformation
                      title="Thể Loại: "
                      text="Phiêu Lưu"
                      color="#ea6016"
                    />
                    <TextInformation
                      title="Năm Phát Hành: "
                      text="1999"
                      color="white"
                    />
                    <TextInformation
                      title="Chuyển Ngữ: "
                      text="Lồng tiếng"
                      color="white"
                    />
                    <TextInformation
                      title="Xếp Hạng: "
                      text="13+"
                      color="white"
                    />
                    <TextInformation
                      title="Phát Sóng: "
                      text="Tập mới mỗi Thứ 3, Thứ 5, Thứ 7 và Chủ nhật"
                      color="white"
                    />
                    <TextInformation
                      title="Danh Mục: "
                      text="Anime"
                      color="#ea6016"
                    />
                    <TextInformation
                      title="Nội Dung Bởi: "
                      text="TOEI Animation"
                      color="white"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Navbar className={cx("navbar")}></Navbar>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WatchFilm;
