import { useState } from "react";
import api from "../api";

export default function CropRecommendation() {
  const [soil, setSoil] = useState("");
  const [climate, setClimate] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/predict", { soil, climate });
      setResult(res.data.crop);
    } catch {
      alert("Prediction failed!");
    }
  };

  return (
    <div className="max-w-lg mx-auto card mt-10">
      <h2 className="text-xl font-bold mb-4">Crop Recommendation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Soil Type" className="w-full border p-2 rounded"
          value={soil} onChange={(e) => setSoil(e.target.value)} />
        <input type="text" placeholder="Climate" className="w-full border p-2 rounded"
          value={climate} onChange={(e) => setClimate(e.target.value)} />
        <button className="bg-green-600 text-white w-full p-2 rounded">Predict</button>
      </form>
      {result && <p className="mt-4 font-bold">Recommended Crop: {result}</p>}
    </div>
  );
}
