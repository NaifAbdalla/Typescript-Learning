import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
form.addEventListener("submit", e => {
    e.preventDefault();
    let section;
    const list = new ListTemplate(ul);
    if (type.value === "Invoice") {
        section = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        section = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(section, type.value);
});
