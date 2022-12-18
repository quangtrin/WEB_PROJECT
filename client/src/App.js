import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Test from "./page/test";
function App() {
  return (
    <div>
      alo
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/test" element = {<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
