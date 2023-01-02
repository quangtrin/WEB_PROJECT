import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import ListEpisode from "./page/ListEpisode/index";

function App() {
  return (
    <Routes>
      <Route path="/ListEpisode" element={<ListEpisode />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
