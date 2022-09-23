import { makeObservable, observable } from "mobx"

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
