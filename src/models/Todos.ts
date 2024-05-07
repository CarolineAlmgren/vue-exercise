export class Todo {
    name: string;
    done: boolean;

    constructor(public text: string) {
        this.name = text;
        this.done = true;
    }
}