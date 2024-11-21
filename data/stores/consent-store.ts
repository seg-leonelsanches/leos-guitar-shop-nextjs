import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

export class ConsentStore {
    essential: boolean = false
    analytical: boolean = false
    marketing: boolean = false

    constructor(initialData: any = {}) {
        makeObservable(this, {
            essential: observable,
            analytical: observable,
            marketing: observable,
            setEssential: action,
            setAnalytical: action,
            setMarketing: action
        })

        makePersistable(this, { 
            name: 'ConsentStore',
            storage: typeof window !== "undefined" ? window.localStorage : undefined,
            properties: [
                'essential',
                'analytical',
                'marketing'
            ]
        })

        this.essential = initialData.essential
        this.analytical = initialData.analytical
        this.marketing = initialData.marketing
    }

    setEssential(essential: boolean) {
        this.essential = essential
    }

    setAnalytical(analytical: boolean) {
        this.analytical = analytical
    }

    setMarketing(marketing: boolean) {
        this.marketing = marketing
    }

    __data() {
        return {
            essential: this.essential,
            analytical: this.analytical,
            marketing: this.marketing
        }
    }
}