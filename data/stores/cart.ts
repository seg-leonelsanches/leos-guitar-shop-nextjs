import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

import { IGuitar } from "../../models"
import { GuitarModel } from "../state-models"

export class CartStore {
    guitars: GuitarModel[] = []
    purchaseComplete: boolean = false

    constructor(initialData: any = { guitars: [], purchaseComplete: false}) {
        makeObservable(this, {
            guitars: observable,
            purchaseComplete: observable,
            addGuitar: action,
            removeAllGuitarsById: action,
            removeOneGuitarById: action,
            placeOrder: action
        })

        makePersistable(this, { 
            name: 'CartStore', 
            properties: ['guitars']
        })
        
        this.guitars = initialData.guitars
        this.purchaseComplete = initialData.purchaseComplete
    }

    addGuitar(guitar: IGuitar) {
        if (this.purchaseComplete) this.purchaseComplete = false
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

    placeOrder() {
        this.purchaseComplete = true
        this.guitars = []
    }
}
