import { MessagesRepository } from "./messages.repository";

export class MessagesService {

    messagesProp : MessagesRepository

    constructor(){
        this.messagesProp = new MessagesRepository()
    }

    findOne(id: string) {
        return this.messagesProp.findOne(id)
    }

    findAll () {
        return this.messagesProp.findAll()
    }

    create(content : string){
        return this.messagesProp.create(content)
    }
}