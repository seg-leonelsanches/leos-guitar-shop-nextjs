import { makeObservable, observable } from "mobx"

export class UserAddressModel {
    addressFirstLine: string = ""
    addressSecondLine: string = ""
    city: string = ""
    state: string = ""
    zipCode: string = ""
    country: string = "United States of America"

    constructor(addressFirstLine: string, addressSecondLine: string, city: string, state: string, zipCode: string) {
        makeObservable(this, {
            addressFirstLine: observable,
            addressSecondLine: observable,
            city: observable,
            state: observable,
            zipCode: observable
        })

        this.addressFirstLine = addressFirstLine
        this.addressSecondLine = addressSecondLine
        this.city = city
        this.state = state
        this.zipCode = zipCode
    }
}
