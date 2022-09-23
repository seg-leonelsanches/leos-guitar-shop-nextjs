import React from 'react'

import { UserLoginStore } from './user-login';

let clientSideStores: any;

export function getStores(initialData = { storeInitialData: {} }) {
  /* if (isServer) {
    return {
      postStore: new PostStore(initialData.postStoreInitialData),
      uiStore: new UIStore(),
    };
  } */
  if (!clientSideStores) {
    clientSideStores = {
      userLoginStore: new UserLoginStore("leonel.sanches@segment.com", "Leonel", "Sanches"),
    };
  }

  return clientSideStores;
}

const StoreContext = React.createContext({} as UserLoginStore);

export function StoreProvider(props: any) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
