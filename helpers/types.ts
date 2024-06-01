export type BrancheInfo = {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  slug: string;
  imageUrl: string;
  plans: BranchePlan[];
};

export type PlanType =
  | "INFINITY START – FIDELIDADE"
  | "INFINITY START"
  | "INFINITY MAX"
  | "ENGENHO DO MEIO CONTRATO DE ADESÃO – FIDELIDADE";

export type BranchePlan = {
  name: PlanType;
  link: string;
  value: number;
  benefits: string[];
};
