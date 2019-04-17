import { Action } from '@ngrx/store';

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
}

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;

  constructor(public payload: { page: number; limit: number }) {}
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems;
