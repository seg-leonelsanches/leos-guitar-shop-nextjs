import { makeObservable, observable } from "mobx"

export class UserAddressModel {
    addressFirstLine: string = ""
    addressSecondLine: string = ""
    state: string = ""
    zipCode: string = ""

    constructor(addressFirstLine: string, addressSecondLine: string, state: string, zipCode: string) {
        makeObservable(this, {
            addressFirstLine: observable,
            addressSecondLine: observable,
            state: observable,
            zipCode: observable
        })

        this.addressFirstLine = addressFirstLine
        this.addressSecondLine = addressSecondLine
        this.state = state
        this.zipCode = zipCode
    }
}
