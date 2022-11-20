import { HasFormatter } from "../interface/HasFormatter";

export class ListTemplate {
    constructor(
        private ul: HTMLUListElement
    ) { }
    render(lists: HasFormatter, header: string) {
        const list = document.createElement("li");
        const heading = document.createElement("h4");
        const p = document.createElement("p");
        heading.textContent = header;
        list.append(heading);
        p.innerText = lists.format();
        list.append(p)

        this.ul.append(list);

    }
}