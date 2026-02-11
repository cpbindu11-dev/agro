import { useState, useEffect } from "react";
import api from "../api";

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await api.get("/news");
        setArticles(res.data);
      } catch {
        alert("Failed to load news!");
      }
    }
    loadNews();
  }, []);

  return (
    <div className="max-w-3xl mx-auto card mt-10">
      <h2 className="text-xl font-bold mb-4">Agriculture News</h2>
      <ul className="space-y-2">
        {articles.map((a, i) => (
          <li key={i}>
            <a href={a.url} target="_blank" className="text-green-700 underline">
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
