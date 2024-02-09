export type ServiceType = {
  id: number;
  title: string;
  price: number;
};

export type ServiceFormType = Omit<ServiceType , 'id'>