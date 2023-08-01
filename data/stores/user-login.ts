import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

import { UserAddressModel } from "../state-models/user-address";

export class UserLoginStore {

    id: string = ""
    email: string = ""
    firstName: string = ""
    lastName: string = ""
    phone: string = ""
    loggedIn: boolean = false
    registrationComplete: boolean = false
    addressData: UserAddressModel | null = null

    constructor(initialData: any = {}) {
        makeObservable(this, {
            id: observable,
            email: observable,
            firstName: observable,
            lastName: observable,
            phone: observable,
            loggedIn: observable,
            registrationComplete: observable,
            addressData: observable,
            setEmail: action,
            setFirstName: action,
            setLastName: action,
            setPhone: action,
            setAddressData: action
        })

        makePersistable(this, { 
            name: 'UserLoginStore',
            storage: typeof window !== "undefined" ? window.localStorage : undefined,
            properties: [
                'id', 
                'email', 
                'firstName', 
                'lastName', 
                'phone',
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

    setPhone(phone: string) {
        this.phone = phone
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
        this.phone = ""
        this.loggedIn = false
        this.registrationComplete = false
    }

    __data() {
        return {
            id: this.id,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            loggedIn: this.loggedIn,
            registrationComplete: this.registrationComplete
        }
    }
}
