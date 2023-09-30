export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  option?: { title: string; additionalPrice: number }[];
};
