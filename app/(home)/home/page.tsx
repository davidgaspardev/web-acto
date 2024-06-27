import { OurUnitys } from "./components/OurUnitys";
import { HealthMap } from "./components/HealthMap";

export default function HomePage() {
  return (
    <div className="h-screen">
      <h1>Home Page</h1>

      <OurUnitys />
      <HealthMap />
    </div>
  );
}
