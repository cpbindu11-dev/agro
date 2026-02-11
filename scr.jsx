import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">🌾 Smart Agri</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/crop" className="hover:underline">Crops</Link>
        <Link to="/soil" className="hover:underline">Soil</Link>
        <Link to="/weather" className="hover:underline">Weather</Link>
        <Link to="/news" className="hover:underline">News</Link>
      </div>
    </nav>
  );
}
