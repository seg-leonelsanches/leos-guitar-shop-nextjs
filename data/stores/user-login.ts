import { makeAutoObservable, runInAction, reaction } from "mobx"

export class UserLoginStore {
    transportLayer
    userLogin = null
    isLoading = true

    constructor(transportLayer: any) {
        makeAutoObservable(this)
        this.transportLayer = transportLayer // Thing that can make server requests.
        /* this.transportLayer.onReceiveTodoUpdate(updatedTodo =>
            this.updateTodoFromServer(updatedTodo)
        )
        this.loadTodos() */
    }

    __data() {
        return {
            userLogin: this.userLogin
        };
    }
}
