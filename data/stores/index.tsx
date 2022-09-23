import React from 'react'
import { CartStore } from './cart';

import { UserLoginStore } from './user-login';
import { WishlistStore } from './wishlist';

let clientSideStores: any;

export interface IStores {
  userLoginStore: UserLoginStore
  cartStore: CartStore
  wishlistStore: WishlistStore
}

export function getStores(initialData = { storeInitialData: {}, cartInitialData: {}, wishlistInitialData: {} }): IStores {
  if (typeof window === 'undefined') {
    return {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData),
      wishlistStore: new WishlistStore(initialData.wishlistInitialData)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData),
      wishlistStore: new WishlistStore(initialData.wishlistInitialData)
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
