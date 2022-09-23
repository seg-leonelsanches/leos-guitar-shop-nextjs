import { makeObservable, observable, action } from "mobx"
import { GuitarModel } from "../state-models"

export class CartStore {
    guitars: GuitarModel[] = []

    constructor(initialData: any = {}) {
        makeObservable(this, {
            guitars: observable
        })

        this.guitars = initialData.guitars
    }
}
