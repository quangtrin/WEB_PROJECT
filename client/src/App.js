import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Test from "./page/test";
import Header from "./components/Header";
import Register from "./page/Register";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/Register" element = {<Register />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element = {<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
