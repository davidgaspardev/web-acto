import { OurUnitys } from "./components/OurUnitys";
import { HealthMap } from "./components/HealthMap";
import { ExclusiveProducts } from "./components/ExclusiveProducts";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <OurUnitys />
      <HealthMap />
      <ExclusiveProducts />
    </div>
  );
}
