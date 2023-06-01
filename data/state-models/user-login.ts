import { makeObservable, observable } from "mobx"
import uuid from "node-uuid"

export class UserLoginModel {
    id: any = null
    email: string = ""
    firstName: string = ""
    lastName: string = ""
    phone: string = ""

    constructor(email: string, firstName: string, lastName: string, phone: string) {
        makeObservable(this, {
            id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            phone: observable
        })

        this.id = uuid.v4()
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
    }
}
