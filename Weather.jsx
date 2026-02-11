import { useState } from "react";
import api from "../api";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await api.get(`/weather?city=${city}`);
      setData(res.data);
    } catch {
      alert("Failed to fetch weather!");
    }
  };

  return (
    <div className="max-w-lg mx-auto card mt-10">
      <h2 className="text-xl font-bold mb-4">Weather Info</h2>
      <input type="text" placeholder="Enter City" className="w-full border p-2 rounded"
        value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={handleSearch} className="bg-green-600 text-white w-full mt-3 p-2 rounded">Get Weather</button>
      {data && (
        <div className="mt-4">
          <p>Temperature: {data.temp}°C</p>
          <p>Condition: {data.condition}</p>
        </div>
      )}
    </div>
  );
}
