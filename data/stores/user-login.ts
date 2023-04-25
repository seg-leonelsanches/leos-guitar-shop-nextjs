import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';
import { UserAddressModel } from "../state-models/user-address";

export class UserLoginStore {

    id: string = ""
    email: string = ""
    firstName: string = ""
    lastName: string = ""
    loggedIn: boolean = false
    registrationComplete: boolean = false
    addressData: UserAddressModel | null = null

    constructor(initialData: any = {}) {
        makeObservable(this, {
            id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            loggedIn: observable,
            registrationComplete: observable,
            addressData: observable,
            setEmail: action,
            setFirstName: action,
            setLastName: action,
            setAddressData: action
        })

        makePersistable(this, { 
            name: 'UserLoginStore', 
            properties: [
                'id', 
                'email', 
                'firstName', 
                'lastName', 
                'loggedIn',
                'registrationComplete',
                'addressData'
            ]
        })
        
        this.id = initialData.id
        this.email = initialData.email
        this.firstName = initialData.firstName
        this.lastName = initialData.lastName
        this.loggedIn = initialData.loggedIn
        this.registrationComplete = initialData.registrationComplete
    }

    setId(id: string) {
        this.id = id
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

    setRegistrationComplete(registrationComplete: boolean) {
        this.registrationComplete = registrationComplete
    }

    logout() {
        this.id = ""
        this.email = ""
        this.firstName = ""
        this.lastName = ""
        this.loggedIn = false
        this.registrationComplete = false
    }

    __data() {
        return {
            id: this.id,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            loggedIn: this.loggedIn,
            registrationComplete: this.registrationComplete
        }
    }
}
