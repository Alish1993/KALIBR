export type OrderedServiceType = {
  id: number;
  orderId: number;
  serviceId: number;
  amaunt: number;
};

export type OrderedServiceFormType = Omit<OrderedServiceType , 'id' | 'orderId'>