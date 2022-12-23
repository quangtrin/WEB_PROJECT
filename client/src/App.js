import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Test from "./page/test";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
