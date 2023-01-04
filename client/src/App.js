import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home/Home";
import ListEpisode from "./page/ListEpisode/ListEpisode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ListEpisode" element={<ListEpisode />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
