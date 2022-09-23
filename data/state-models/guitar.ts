import { makeObservable, observable } from "mobx"
import uuid from "node-uuid"

export class GuitarModel {
    guitarId: number
    quantity: number

    constructor(initialData: any = {}) {
        makeObservable(this, {
            guitarId: observable,
            quantity: observable
        })

        this.guitarId = initialData.guitarId
        this.quantity = initialData.quantity
    }
}
