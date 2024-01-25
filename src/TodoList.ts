import { TodoItem } from "./TodoItem";

export class TodoList {
    private wrapper = document.createElement('wrapper');
    private items: TodoItem[] = []
    constructor(private todos: string[]) {
        this.wrapper.append(this.createOptions())
        this.todos.forEach(todo => {
            this.items.push(new TodoItem(todo, this.wrapper, {contentChange: this.onItemContentChange}));
        });
        document.body.append(this.wrapper);
    }

    private createOptions() {
        const options = document.createElement('div');
        options.className = 'options';

        const add = document.createElement('button');
        add.onclick = this.addItem.bind(this);
        add.className = 'add btn';
        add.innerHTML = 'Add';

        options.append(add);

        return options;
    }

    private addItem() {
        this.items.push(new TodoItem('Change content please', this.wrapper, {contentChange: this.onItemContentChange}));
    }

    onItemContentChange(content: string | null) {
        console.log(content);
    }


    removeItem() {

    }


    


}