import React from 'react'
import { CartStore } from './cart';

import { UserLoginStore } from './user-login';
import { WishlistStore } from './wishlist';
import { ConsentStore } from './consent-store';

let clientSideStores: any;

export interface IStores {
  userLoginStore: UserLoginStore
  cartStore: CartStore
  wishlistStore: WishlistStore
  consentStore: ConsentStore
}

export function getStores(initialData = { storeInitialData: {}, cartInitialData: {}, wishlistInitialData: {}, consentInitialData: {} }): IStores {
  if (typeof window === 'undefined') {
    return {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData),
      wishlistStore: new WishlistStore(initialData.wishlistInitialData),
      consentStore: new ConsentStore(initialData.consentInitialData)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
      cartStore: new CartStore(initialData.cartInitialData),
      wishlistStore: new WishlistStore(initialData.wishlistInitialData),
      consentStore: new ConsentStore(initialData.consentInitialData)
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
