import { BrancheInfo, ModelOne, ModelTwo, ModelThree } from "@/helpers/types";
import VibesCore from "@/assets/svg/ic-vibes-core.svg";
import VibesDance from "@/assets/svg/ic-vibes-dance.svg";
import VibesFuncional from "@/assets/svg/ic-vibes-funcional.svg";
import VibesGap from "@/assets/svg/ic-vibes-gap.svg";
import VibesIntense from "@/assets/svg/ic-vibes-intense.svg";
import VibesJump from "@/assets/svg/ic-vibes-jump.svg";
import VibesRelax from "@/assets/svg/ic-vibes-relax.svg";
import VibesSteps from "@/assets/svg/ic-vibes-steps.svg";

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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-acto.png?alt=media&token=1ed2ede1-5ac5-4460-8099-4dd2159c60ed",
    imageAlt: "Placeholder",
    title: "Choneça nossas unidades",
    content: "Encontre a unidade ideal para você mudar a sua vida.",
    button: {
      name: "Saiba mais",
      link: "www.youtube.com.br"
    }
  },
  {
    id: "2",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-action.png?alt=media&token=b133e180-0612-4f57-a2c6-181b2d4b5188",
    imageAlt: "Placeholder",
    title: "Mapeamento de saúde",
    content: "Muito além de treinos para emagrecimento e massa muscular. O Acton é capaz de mapear sua saúde levando em coonsideração não somente sua saúde física como também sua saúde mental, emocional e social.",
    button: {
      name: "Saiba mais",
      link: "www.youtube.com.br"
    }
  },
  {
    id: "3",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-garrafas-acto.png?alt=media&token=4f383e65-14d8-416a-9cb6-25e378878a35",
    imageAlt: "Placeholder",
    title: "Clube de vantagens",
    content: "Acumule pontos ao longo de sua jornada de bem-estar e troque por descontos e prêmios incriveis! Cada ação que você realiza na Acto é uma oportunidade de acumular pontos para trocar por prêmios e descontos de nossos parceiros selecionados.",
    button: {
      name: "Saiba mais",
      link: "www.youtube.com.br"
    }
  },
  {
    id: "4",
    imageUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
    imageAlt: "Placeholder",
    title: "Trabalhe conosco!",
    content: "Estamos com vagas em aberto e queremos contar com profissionais dedicados e apaixonados pelo universo da saúde e bem-estar! Ao fazer parte da nossa equipe você terá a oportunidade de crescer profissionalmente em um ambiente dinâmico e acolhedor.",
    button: {
      name: "Saiba mais",
      link: "www.youtube.com.br"
    }
  }
];

export const cardModelTwoData: ModelTwo[] = [
  {
    id: "1",
    imageOneUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-viver-bem.jpg?alt=media&token=4aaa7b34-0913-4fc6-b762-95807f3cefab",
    imageOneAlt: "Placeholder",
    imageTwoUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-viva-leve.jpg?alt=media&token=01fff4ce-a7c1-492a-8d75-5136e9e55d0b",
    imageTwoAlt: "Placeholder",
    imageThreeUrl: "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-vida-ativa.jpg?alt=media&token=b6e0b24b-5233-4cf0-af89-7940f7c22992",
    imageThreeAlt: "Placeholder",
    title: "Produtos exclusivos",
    content: "Construimos uma jornada de experiência para tornar sua relação com o exercício físico ainda mais fácil e prazerosa, por meio de métodos de treinamentos que vão muit além de apenas emagrecer ou ganhar massa múscular, eles levam em considerações suas necessidades físicas, mentais e emocionais, tudo isso baseado em muita evidência científica.",
    button: {
      name: "Fazer meu mapeamento",
      link: "www.youtube.com.br"
    }
  }
];

export const cardModelThreeData: ModelThree[] = [
  {
    id: "1",
    imageUrl: "https://www.oystr.com.br/wp-content/uploads/2022/08/placeholder.png",
    imageAlt: "Placeholder",
    title: "Acto Vibes",
    content: "Possuímos uma metodologia exclusiva para você que gosta de aulas em grupos, nossas aulas de ginástica possuem o intuito de queimar muitas calorias e gerar satisfação e felicidade, são 8 modalidade de ginástica e aeróbica como Gap, Step, Core, Jump , Relax, Dança, Intense e treinamento Funcional. Tudo isso com mais de 40 aulas semanais em diversos horários e modalidades para que você consiga atingir seus objetivos.",
    button: {
      name: "Ver horários",
      link: "www.youtube.com.br"
    },
    stamps: [
      {
        stampUrl: VibesCore,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesDance,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesFuncional,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesGap,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesIntense,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesJump,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesRelax,
        stampAlt: "Placeholder"
      },
      {
        stampUrl: VibesSteps,
        stampAlt: "Placeholder"
      }
    ]
  }
]