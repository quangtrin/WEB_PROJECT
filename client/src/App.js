import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Test from "./page/test";
import Register from "./page/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/Register" element = {<Register />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element = {<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
