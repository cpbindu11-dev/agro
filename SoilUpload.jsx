import { useState } from "react";
import api from "../api";

export default function SoilUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await api.post("/upload-soil", formData);
      alert("File uploaded successfully!");
    } catch {
      alert("Upload failed!");
    }
  };

  return (
    <div className="max-w-lg mx-auto card mt-10">
      <h2 className="text-xl font-bold mb-4">Upload Soil Data</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button className="bg-green-600 text-white p-2 rounded mt-4 w-full">Upload</button>
      </form>
    </div>
  );
}
