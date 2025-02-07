import { BranchInfo, ModelOne, ModelTwo, ModelThree } from "@/helpers/types";
import IconVibesCore from "@/assets/svg/ic-vibes-core.svg";
import IconVibesDance from "@/assets/svg/ic-vibes-dance.svg";
import IconVibesFuncional from "@/assets/svg/ic-vibes-funcional.svg";
import IconVibesGap from "@/assets/svg/ic-vibes-gap.svg";
import IconVibesIntense from "@/assets/svg/ic-vibes-intense.svg";
import IconVibesJump from "@/assets/svg/ic-vibes-jump.svg";
import IconVibesRelax from "@/assets/svg/ic-vibes-relax.svg";
import IconVibesSteps from "@/assets/svg/ic-vibes-steps.svg";

export const branches: BranchInfo[] = [
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
    wppLink: "https://wa.me/message/TIBDVHOEFKP5B1",
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
    wppLink: "https://wa.me/message/7DINMQ75XQRWI1",
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
    wppLink: "https://wa.me/message/22BNUPGM2E7YH1",
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
    wppLink: "https://wa.me/message/7U77P27G5N2QO1",
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
    wppLink: "https://wa.me/message/K2KTKXGW5GIZK1",
  },
  {
    id: 6,
    name: "Iputinga Prime",
    address: "rua São Mateus, 643 - iputinga",
    neighborhood: "Iputinga",
    city: "Recife",
    state: "PE",
    zipCode: "50680-000",
    slug: "iputinga-prime",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/branches%2Fbranche_iputinga-prime.png?alt=media&token=e2394f4a-14cf-4de8-a661-49ad375fedcb",
    wppLink: "https://wa.me/message/4TNN74AZUSRTJ1",
  },
];

export const cardModelOneData: ModelOne[] = [
  {
    id: "1",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-acto.png?alt=media&token=1ed2ede1-5ac5-4460-8099-4dd2159c60ed",
    imageAlt: "Placeholder",
    title: "Conheça nossas unidades",
    content: "Encontre a unidade ideal para você mudar a sua vida.",
    button: {
      name: "Saiba mais",
      link: "/plans",
    },
  },
  {
    id: "2",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-action.png?alt=media&token=b133e180-0612-4f57-a2c6-181b2d4b5188",
    imageAlt: "Placeholder",
    title: "Mapeamento de saúde",
    content:
      "Muito além de treinos para emagrecimento e massa muscular. O Acton é capaz de mapear sua saúde levando em coonsideração não somente sua saúde física como também sua saúde mental, emocional e social.",
    button: {
      name: "Saiba mais",
      link: "https://web-acton.vercel.app",
    },
  },
  {
    id: "3",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fclube.png?alt=media&token=1b7734b7-3885-46a2-bdfa-22523697f81f",
    imageAlt: "Placeholder",
    title: "Clube de vantagens",
    content:
      "Acumule pontos ao longo de sua jornada de bem-estar e troque por descontos e prêmios incriveis! Cada ação que você realiza na Acto é uma oportunidade de acumular pontos para trocar por prêmios e descontos de nossos parceiros selecionados.",
    button: {
      name: "Saiba mais",
      link: "https://evo-totem.w12app.com.br/actoacademia/0/page/landing-page?preview=true",
    },
  },
  {
    id: "4",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fvagas.png?alt=media&token=319b53c4-1b7e-44b7-b931-c8a1ba0cb9be",
    imageAlt: "Placeholder",
    title: "Trabalhe conosco!",
    content:
      "Estamos com vagas em aberto e queremos contar com profissionais dedicados e apaixonados pelo universo da saúde e bem-estar! Ao fazer parte da nossa equipe você terá a oportunidade de crescer profissionalmente em um ambiente dinâmico e acolhedor.",
    button: {
      name: "Saiba mais",
      link: "https://actoacademia.vagas.solides.com.br/",
    },
  },
];

export const cardModelTwoData: ModelTwo[] = [
  {
    id: "1",
    imageOneUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-viver-bem.jpg?alt=media&token=4aaa7b34-0913-4fc6-b762-95807f3cefab",
    imageOneAlt: "Placeholder",
    imageTwoUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-viva-leve.jpg?alt=media&token=01fff4ce-a7c1-492a-8d75-5136e9e55d0b",
    imageTwoAlt: "Placeholder",
    imageThreeUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fimg-vida-ativa.jpg?alt=media&token=b6e0b24b-5233-4cf0-af89-7940f7c22992",
    imageThreeAlt: "Placeholder",
    title: "Produtos exclusivos",
    content:
      "Construimos uma jornada de experiência para tornar sua relação com o exercício físico ainda mais fácil e prazerosa, por meio de métodos de treinamentos que vão muit além de apenas emagrecer ou ganhar massa múscular, eles levam em considerações suas necessidades físicas, mentais e emocionais, tudo isso baseado em muita evidência científica.",
    button: {
      name: "Fazer meu mapeamento",
      link: "https://linktr.ee/unidadesacto?fbclid=PAZXh0bgNhZW0CMTEAAaZuLXywZDV0RL_0FD5IL7xX55G5l4WuddNcq5tSXihHo_sFg5iaLevmdvY_aem_ZmFrZWR1bW15MTZieXRlcw",
    },
  },
];

export const cardModelThreeData: ModelThree[] = [
  {
    id: "1",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/acto-dev.appspot.com/o/images%2Fvibes.png?alt=media&token=7d902719-64ce-4726-8ccd-3a051d4da157",
    imageAlt: "Placeholder",
    title: "Acto Vibes",
    content:
      "Possuímos uma metodologia exclusiva para você que gosta de aulas em grupos, nossas aulas de ginástica possuem o intuito de queimar muitas calorias e gerar satisfação e felicidade, são 8 modalidade de ginástica e aeróbica como Gap, Step, Core, Jump , Relax, Dança, Intense e treinamento Funcional. Tudo isso com mais de 40 aulas semanais em diversos horários e modalidades para que você consiga atingir seus objetivos.",
    button: {
      name: "Ver horários",
      link: "https://linktr.ee/actoacademias?fbclid=PAZXh0bgNhZW0CMTEAAabJMy-DjiX7Mkx-RNXFZPeW2u3ajVB6DwWOiJLPEQs5nggLOxeVrdWJ39E_aem_ZmFrZWR1bW15MTZieXRlcw",
    },
    stamps: [
      {
        stampUrl: IconVibesCore,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesDance,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesFuncional,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesGap,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesIntense,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesJump,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesRelax,
        stampAlt: "Placeholder",
      },
      {
        stampUrl: IconVibesSteps,
        stampAlt: "Placeholder",
      },
    ],
  },
];
