import { makeObservable, observable, action } from "mobx"
import { IGuitar } from "../../models"
import { GuitarModel } from "../state-models"

export class CartStore {
    guitars: GuitarModel[] = []

    constructor(initialData: any = { guitars: []}) {
        makeObservable(this, {
            guitars: observable,
            addGuitar: action,
            removeAllGuitarsById: action,
            removeOneGuitarById: action
        })

        this.guitars = initialData.guitars
    }

    addGuitar(guitar: IGuitar) {
        const existingGuitars = this.guitars.filter(g => g.guitarId === guitar.id)
        if (existingGuitars.length <= 0) {
            this.guitars.push({ guitarId: Number(guitar.id), quantity: 1 })
            return
        }

        existingGuitars[0].quantity += 1
    }

    removeAllGuitarsById(id: number) {
        this.guitars = this.guitars.filter(g => g.guitarId !== id)
    }

    removeOneGuitarById(id: number) {
        const existingGuitars = this.guitars.filter(g => g.guitarId === id)
        if (existingGuitars.length <= 0) {
            return
        }

        existingGuitars[0].quantity -= 1
        if (existingGuitars[0].quantity === 0) {
            this.removeAllGuitarsById(id)
        }
    }
}
