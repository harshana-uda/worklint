export class TodoItem {
    private wrapper = document.createElement('wrapper');
    
    constructor(private item: string, private parent: HTMLElement, private bindings: { contentChange: (content: string | null) => void}) {
        const text = this.renderText();
        const renderOption = this.renderOption();
        this.wrapper.append(text, renderOption);
        this.parent.append(this.wrapper);
    }
    
    private renderText() {
    
        const item = document.createElement('div');
        item.contentEditable = 'true';
        item.oninput = ()=> this.bindings.contentChange(item.innerText);
        item.className = 'item';
        
        item.innerHTML = this.item;

        return item;
    }
    

    private renderOption() {
        const option = document.createElement('div');
        option.className = 'option';

        const remove = document.createElement('button');
        remove.onclick = this.removeItem.bind(this);
        remove.className = 'remove';
        remove.innerHTML = 'Remove';

        option.append(remove);

        return option;
    }

    


    removeItem() {
        this.wrapper.remove();
    }

   

}