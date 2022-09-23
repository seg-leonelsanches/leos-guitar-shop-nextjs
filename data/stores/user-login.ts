import { makeObservable, observable, action } from "mobx"
import uuid from "node-uuid"

export class UserLoginStore {
    // transportLayer
    // userLogin = null
    // isLoading = true

    /* constructor(transportLayer: any) {
        makeAutoObservable(this)
        this.transportLayer = transportLayer // Thing that can make server requests.
    } */

    // id: any = null
    email: string = ""
    firstName: string = ""
    lastName: string = ""

    constructor(initialData: any = {}) {
        makeObservable(this, {
            // id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            setEmail: action,
            setFirstName: action,
            setLastName: action
        })

        // this.id = uuid.v4()
        this.email = initialData.email
        this.firstName = initialData.firstName
        this.lastName = initialData.lastName
    }

    setEmail(email: string) {
        this.email = email
    }

    setFirstName(firstName: string) {
        this.firstName = firstName
    }

    setLastName(lastName: string) {
        this.lastName = lastName
    }

    __data() {
        return {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        }
    }
}
