import React from 'react'

import { UserLoginStore } from './user-login';

let clientSideStores: any;

export interface IStores {
  userLoginStore: UserLoginStore
}

export function getStores(initialData = { storeInitialData: {} }) {
  if (typeof window === 'undefined') {
    return {
      userLoginStore: new UserLoginStore(initialData.storeInitialData)
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      userLoginStore: new UserLoginStore(initialData.storeInitialData),
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
