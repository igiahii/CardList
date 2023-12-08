import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import AboutUs from "./routes/about-us/about-us.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
