import { State } from '../types/globalTypes';

export interface Action<T = any> {
  type: T;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any;
}

export type Dispatch<A extends Action = AnyAction> = <T extends A>(
  action: T
) => T;

export type Reducer<S = State, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

export type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>
};

export interface Store<S = any, A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
  getState(): S;
  replaceReducer(nextReducer: Reducer<S, A>): void;
}

export type ActionCreator<A> = (...args: any[]) => A;
