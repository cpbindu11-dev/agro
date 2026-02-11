export default function Card({ title, children }) {
  return (
    <div className="card">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}
