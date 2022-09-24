import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';
import { UserAddressModel } from "../state-models/user-address";
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
    addressData?: UserAddressModel

    constructor(initialData: any = {}) {
        makeObservable(this, {
            // id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            loggedIn: observable,
            addressData: observable,
            setEmail: action,
            setFirstName: action,
            setLastName: action,
            setAddressData: action
        })

        makePersistable(this, { 
            name: 'UserLoginStore', 
            properties: ['email', 'firstName', 'lastName', 'loggedIn', 'addressData']
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

    setAddressData(addressData: UserAddressModel) {
        this.addressData = addressData
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
