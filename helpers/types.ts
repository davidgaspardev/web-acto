export type Nullable<T> = T | null;

export type BrancheInfo = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  neighborhood: string;
  slug: string;
  imageUrl: string;
  plans?: BranchePlan[];
};

export type BranchePlan = {
  name: string;
  link: string;
  value: number;
  promotional?: BranchePlanPromotional;
  additionalService?: BrancheAdditionalService;
  benefits: string[];
};

export type BranchePlanPromotional = {
  value: number;
  period: number;
  periodUnit: "month" | "day";
};

export type BrancheAdditionalService = {
  name: string;
  value: number;
};

// ======= EVO MEMBERSHIP TYPES =======

type OnlineSalesObservations = string | null;

type Differential = {
  title: string;
  order: number;
};

type Branch = {
  idBranch: number;
  name: string;
};

type AdditionalService = {
  idService: number;
  name: string;
  value: number;
};

type Entries = {
  entriesQuantity: number;
  idEntriesType: number;
  entriesTypeDescription: string;
};

type SalesPage = {
  idSalesPage: number;
  order: number;
  salesPageDescription: string;
};

export type Membership = {
  idMembership: number;
  idBranch: number;
  nameMembership: string;
  membershipType: string;
  durationType: string;
  duration: number;
  value: number;
  maxAmountInstallments: number | null;
  description: string;
  urlSale: string | null;
  onlineSalesObservations: OnlineSalesObservations;
  differentials: Differential[];
  accessBranches: Branch[];
  additionalService: Nullable<AdditionalService>;
  serviceYearly: any | null;
  typePromotionalPeriod: number;
  valuePromotionalPeriod: number;
  monthsPromotionalPeriod: number;
  daysPromotionalPeriod: number;
  minPeriodStayMembership: any | null;
  installmentsPromotionalPeriod: any | null;
  inactive: boolean;
  displayName: string | null;
  entries: Entries;
  salesPage: SalesPage[];
};

// ======= HOME PAGE TYPES =======
export type ModelOne = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  content: string;
  button: {
    name: string;
    link: string;
  }
};

export type ModelTwo = {
  id: string;
  imageOneUrl: string;
  imageOneAlt: string;
  imageTwoUrl: string;
  imageTwoAlt: string;
  imageThreeUrl: string;
  imageThreeAlt: string;
  title: string;
  content: string;
  button: {
    name: string;
    link: string;
  }
};

export type ModelThree = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  content: string;
  button: {
    name: string;
    link: string;
  }
  stamps: StampsType[];
};

type StampsType = {
  stampUrl: string;
  stampAlt: string;
}