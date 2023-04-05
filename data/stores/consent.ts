import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

export class ConsentStore {
    accepted: boolean = false

    constructor(initialData: any = { accepted: false}) {
        makeObservable(this, {
            accepted: observable,
            accept: action
        })

        makePersistable(this, { 
            name: 'ConsentStore', 
            properties: ['accepted']
        })
        
        this.accepted = initialData.accepted
    }

    accept(accepted: boolean) {
        this.accepted = accepted
    }

}