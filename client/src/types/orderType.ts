export type OrderType = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export type OrderFormType = Omit<OrderType , 'id'>