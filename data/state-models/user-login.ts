import { makeObservable, observable } from "mobx"
import uuid from "node-uuid"

export class UserLogin {
    id: any = null
    email: string = ""
    firstName: string = ""
    lastName: string = ""
    saveHandler: any = null

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
}
