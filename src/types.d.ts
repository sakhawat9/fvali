export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
  __v: number;
}

export interface IStore {
  _id?: string;
  name: string;
  category: string;
  description: string;
  store: string;
  price: number;
  image: string;
  __v: number;
}

export interface IAuthData {
  name: string;
  id: string;
  status: string;
  token: string;
}

export interface IDashboardState {
  totalUsers: number;
  totalOrder: number;
  totalProduct: number;
  totalStore: number;
}
