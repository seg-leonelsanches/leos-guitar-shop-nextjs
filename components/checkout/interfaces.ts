import { IGuitar } from "../../models";

export interface ISegmentOrderInfo {
    cart: IGuitar[],
    cartSubtotal: number
    taxes: number
    shipping: number
    total: number
    paymentMethod: string
}