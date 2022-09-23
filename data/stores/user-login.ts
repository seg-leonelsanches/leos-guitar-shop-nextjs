import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';
// import uuid from "node-uuid"

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
    loggedIn: boolean = false

    constructor(initialData: any = {}) {
        makeObservable(this, {
            // id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            loggedIn: observable,
            setEmail: action,
            setFirstName: action,
            setLastName: action
        })

        makePersistable(this, { 
            name: 'UserLoginStore', 
            properties: ['email', 'firstName', 'lastName', 'loggedIn']
        })
        
        // this.id = uuid.v4()
        this.email = initialData.email
        this.firstName = initialData.firstName
        this.lastName = initialData.lastName
        this.loggedIn = initialData.loggedIn
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

    setLoggedIn(loggedIn: boolean) {
        this.loggedIn = loggedIn
    }

    logout() {
        this.email = ""
        this.firstName = ""
        this.lastName = ""
        this.loggedIn = false
    }

    __data() {
        return {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            loggedIn: this.loggedIn
        }
    }
}
