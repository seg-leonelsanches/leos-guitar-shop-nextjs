import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

import { IGuitar } from "../../models"

export class WishlistStore {
    guitars: IGuitar[] = []

    constructor(initialData: any = { guitars: []}) {
        makeObservable(this, {
            guitars: observable,
            addGuitar: action,
            removeGuitarById: action
        })

        makePersistable(this, { 
            name: 'WishlistStore', 
            storage: typeof window !== "undefined" ? window.localStorage : undefined,
            properties: ['guitars']
        })
        
        this.guitars = initialData.guitars
    }

    addGuitar(guitar: IGuitar) {
        const existingGuitars = this.guitars.filter(g => g.id === guitar.id)
        if (existingGuitars.length <= 0) {
            this.guitars.push(guitar)
        }
    }

    removeGuitarById(id: number) {
        this.guitars = this.guitars.filter(g => g.id !== id)
    }
}
