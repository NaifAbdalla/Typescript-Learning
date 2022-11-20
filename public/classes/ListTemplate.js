export class ListTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(lists, header) {
        const list = document.createElement("li");
        const heading = document.createElement("h4");
        const p = document.createElement("p");
        heading.textContent = header;
        list.append(heading);
        p.innerText = lists.format();
        list.append(p);
        this.ul.append(list);
    }
}
