import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js"

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;

form.addEventListener("submit", e => {
    e.preventDefault();

    let section: HasFormatter;
    const list = new ListTemplate(ul)

    if (type.value === "Invoice") {
        section = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        section = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(section, type.value)

})

