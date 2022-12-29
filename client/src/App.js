import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Test from "./page/test";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListEpisode from "./page/ListEpisode/index";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/ListEpisode" element={<ListEpisode />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
