import React from 'react'
import { CartStore } from './cart';

import { UserLoginStore } from './user-login';

let clientSideStores: any;

export interface IStores {
  userLoginStore: UserLoginStore
  cartStore: CartStore
}

export function getStores(initialData = { storeInitialData: {}, cartInitialData: {} }): IStores {
  if (typeof window === 'undefined') {
    return {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData)
    };
  }

  return clientSideStores;
}

const StoreContext = React.createContext({} as IStores);

export function StoreProvider(props: any) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
