import { makeObservable, observable, reaction } from "mobx"
import uuid from "node-uuid"

export class UserLoginStore {
    // transportLayer
    // userLogin = null
    // isLoading = true

    /* constructor(transportLayer: any) {
        makeAutoObservable(this)
        this.transportLayer = transportLayer // Thing that can make server requests.
    } */

    id: any = null
    email: string = ""
    firstName: string = ""
    lastName: string = ""

    constructor(email: string, firstName: string, lastName: string) {
        makeObservable(this, {
            id: observable,
            email: observable,
            firstName: observable,
            lastName: observable
        })

        this.id = uuid.v4()
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
    }

    __data() {
        return {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }
}
