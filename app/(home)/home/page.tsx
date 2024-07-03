import Carousel from "./components/Carousel";
import CardOne from "./components/CardModelOne";
import { CardModelTwo } from "./components/CardModelTwo";
import { CardModelThree } from "./components/CardModelThree";
import { cardModelOneData } from "@/helpers/data";

export default function HomePage() {
  return (
    <div className="max-w-6xl m-auto">
      <Carousel className="p-4" thumbnails={[
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-1.png?alt=media&token=42e78ca0-270a-4af7-9c2f-3c63c90a6599",
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-2.png?alt=media&token=467070ac-4672-4c00-b47f-7d547589ebb5",
        "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fcarousel-3.png?alt=media&token=c5d552de-6a33-4753-8f23-62717fa635cf"
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
