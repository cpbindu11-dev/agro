import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CropRecommendation from "./pages/CropRecommendation";
import SoilUpload from "./pages/SoilUpload";
import Weather from "./pages/Weather";
import News from "./pages/News";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crop" element={<CropRecommendation />} />
          <Route path="/soil" element={<SoilUpload />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
}
