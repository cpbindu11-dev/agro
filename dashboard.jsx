import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Crop Recommendation">
        <p>Get the best crops for your soil and weather.</p>
        <Link to="/crop" className="text-green-600 underline">Go →</Link>
      </Card>
      <Card title="Soil Data">
        <p>Upload soil data for analysis.</p>
        <Link to="/soil" className="text-green-600 underline">Go →</Link>
      </Card>
      <Card title="Weather">
        <p>Check weather updates for your farm.</p>
        <Link to="/weather" className="text-green-600 underline">Go →</Link>
      </Card>
      <Card title="Agriculture News">
        <p>Read the latest farming trends.</p>
        <Link to="/news" className="text-green-600 underline">Go →</Link>
      </Card>
    </div>
  );
}
