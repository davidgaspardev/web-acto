import Carousel from "./components/Carousel";
import CardOne from "./components/CardModelOne";
import { CardModelTwo } from "./components/CardModelTwo";
import { CardModelThree } from "./components/CardModelThree";
import { cardModelOneData } from "@/helpers/data";

export default function HomePage() {
  return (
    <div className="max-w-6xl m-auto">
      <Carousel className="p-4" thumbnails={[
        'https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-banner-01.png?alt=media&token=7f7dd4f8-1825-4e43-83c0-233dc0ccbbf3'
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
