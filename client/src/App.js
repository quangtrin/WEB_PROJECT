import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Test from "./page/test";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./page/Register";
import "./App.css";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/Register" element = {<Register />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element = {<Test />}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
