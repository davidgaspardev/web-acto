import { BrancheInfo, ModelOne, ModelTwo, ModelThree } from "@/helpers/types";

export const branches: BrancheInfo[] = [
  {
    id: 1,
    name: "Várzea",
    address: "Av. Afonso Olindense, nº 1090",
    neighborhood: "Varzea",
    city: "Recife",
    state: "PE",
    zipCode: "50810-000",
    slug: "varzea",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_varzea.jpg?alt=media&token=0da6a261-dd21-46ac-a176-b3e3aeb2cb4d",
  },
  {
    id: 2,
    name: "Massangana",
    address: "Av. Zequinha Barreto, nº 150",
    neighborhood: "Massangana",
    city: "Jaboatão dos Guararapes",
    state: "PE",
    zipCode: "54400-090",
    slug: "massangana",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_massangana.jpg?alt=media&token=5c0df52e-07d5-4f6d-9bdf-920a35f1c093",
  },
  {
    id: 5,
    name: "Cordeiro",
    address: "R. Cláudio Brotherhood, nº 96",
    neighborhood: "Cordeiro",
    city: "Recife",
    state: "PE",
    zipCode: "50721-260",
    slug: "cordeiro",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_cordeiro.jpg?alt=media&token=0b1ffee0-3491-4017-a31b-7e0a64b56e9a",
  },
  {
    id: 3,
    name: "Iputinga",
    address: "R. São Mateus, nº 653",
    neighborhood: "Iputinga",
    city: "Recife",
    state: "PE",
    zipCode: "50680-000",
    slug: "iputinga",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_iputinga.jpg?alt=media&token=2390fdbc-cd32-4db3-acc5-278a9c8a3133",
  },
  {
    id: 4,
    name: "Engenho do Meio",
    address: "R. Manoel Estevão da Costa, nº 119",
    neighborhood: "Iputinga",
    city: "Recife",
    state: "PE",
    zipCode: "50670-590",
    slug: "engenho",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_engenho.jpg?alt=media&token=a1167580-8e95-4130-85de-22380cd53cfb",
  },
];

export const cardModelOneData: ModelOne[] = [
  {
    id: "1",
    imageUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
    imageAlt: "Placeholder",
    title: "Choneça nossas unidades",
    subtitle: "Encontre a unidade ideal para você mudar a sua vida.",
    buttonText: "Saiba mais",
    buttonLink: "https://www.youtube.com"
  },
  {
    id: "2",
    imageUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
    imageAlt: "Placeholder",
    title: "Mapeamento de saúde",
    subtitle: "Muito além de treinos para emagrecimento e massa muscular. O Acton é capaz de mapear sua saúde levando em coonsideração não somente sua saúde física como também sua saúde mental, emocional e social.",
    buttonText: "Saiba mais",
    buttonLink: "https://www.youtube.com"
  }
];

export const cardModelTwoData: ModelTwo[] = [
  {
    id: "1",
    imageOneUrl: "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png",
    imageOneAlt: "Placeholder",
    imageTwoUrl: "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png",
    imageTwoAlt: "Placeholder",
    imageThreeUrl: "https://images.squarespace-cdn.com/content/v1/5a79de08aeb625f12ad4f85a/1527015265032-KYY1AQ4NCW6NB7BK1NDH/placeholder-image-vertical.png",
    imageThreeAlt: "Placeholder",
    title: "Produtos exclusivos",
    subtitle: "Construimos uma jornada de experiência para tornar sua relação com o exercício físico ainda mais fácil e prazerosa, por meio de métodos de treinamentos que vão muit além de apenas emagrecer ou ganhar massa múscular, eles levam em considerações suas necessidades físicas, mentais e emocionais, tudo isso baseado em muita evidência científica.",
    buttonText: "Fazer meu mapeamento",
    buttonLink: "https://www.youtube.com"
  }
];

export const cardModelThreeData: ModelThree[] = [
  {
    id: "1",
    imageUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
    imageAlt: "Placeholder",
    title: "Acto Vibes",
    subtitle: "Possuímos uma metodologia exclusiva para você que gosta de aulas em grupos, nossas aulas de ginástica possuem o intuito de queimar muitas calorias e gerar satisfação e felicidade, são 8 modalidade de ginástica e aeróbica como Gap, Step, Core, Jump , Relax, Dança, Intense e treinamento Funcional. Tudo isso com mais de 40 aulas semanais em diversos horários e modalidades para que você consiga atingir seus objetivos.",
    buttonText: "Ver horários",
    buttonLink: "https://www.youtube.com",
    stamps: [
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      },
      {
        stampUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
        stampAlt: "Placeholder"
      }
    ]
  }
]