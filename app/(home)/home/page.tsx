import Carousel from "./components/Carousel";
import CardOne from "./components/CardModelOne";
import { CardModelTwo } from "./components/CardModelTwo";
import { CardModelThree } from "./components/CardModelThree";
import { cardModelOneData } from "@/helpers/data";

export default function HomePage() {
  return (
    <div className="max-w-7xl m-auto">
      <Carousel className="p-4" thumbnails={[
        'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        'https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg',
        'https://www.infoescola.com/wp-content/uploads/2008/05/capivara-104462285.jpg',
        'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2023/05/10/1863669604-montanha-neve-chile.jpg',
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg',
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/Skills_Required_to_Become_an_iOS_Developer.jpg',
        'https://blog-media.byjusfutureschool.com/bfs-blog/2022/07/12030656/Article-Page-7-1.jpg',
        'https://www.duq.edu/images/academics/colleges-and-schools/natural-and-environmental-sciences/applied.jpg',
      ]} />

      <CardOne data={cardModelOneData[0]} />
      <CardOne data={cardModelOneData[1]} />
      <CardModelTwo />
      <CardModelThree />
      <div className="flex flex-row justify-evenly">
        <CardOne forceMobile={true} data={cardModelOneData[2]} />
        <CardOne forceMobile={true} data={cardModelOneData[3]} />
      </div>
    </div>
  );
}
