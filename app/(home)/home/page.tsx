import Carousel from "./components/Carousel";
import CardOne from "./components/CardModelOne";
import { CardModelTwo } from "./components/CardModelTwo";
import { CardModelThree } from "./components/CardModelThree";
import { cardModelOneData } from "@/helpers/data";

export default function HomePage() {
  return (
    <div className="max-w-6xl m-auto">
      <Carousel className="p-4" thumbnails={[
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-1_v2.jpg?alt=media&token=4d432a51-e1e3-400a-8f89-50a618e21baf",
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-2_v2.jpg?alt=media&token=f8ad3108-04b6-44c4-8a64-27f9f49d21b0",
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-3_v2.jpg?alt=media&token=3b606ce8-77cc-45b7-8545-9b18ee03dba5"
      ]} />

      <CardOne data={cardModelOneData[0]} />
      <CardOne data={cardModelOneData[1]} />
      <CardModelTwo />
      <CardModelThree />
      <div className="flex flex-row justify-evenly flex-wrap">
        <CardOne forceMobile={true} data={cardModelOneData[2]} />
        <CardOne forceMobile={true} data={cardModelOneData[3]} />
      </div>
    </div>
  );
}
