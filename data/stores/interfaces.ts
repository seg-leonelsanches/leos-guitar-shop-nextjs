import { CartStore } from "./cart";
import { ConsentStore } from "./consent-store";
import { UserLoginStore } from "./user-login";
import { WishlistStore } from "./wishlist";

export interface IStores {
  userLoginStore: UserLoginStore;
  cartStore: CartStore;
  wishlistStore: WishlistStore;
  consentStore: ConsentStore;
}
