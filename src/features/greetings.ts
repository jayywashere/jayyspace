import { getElement } from "../utils/dom.js";
import { get, set } from "../utils/storage.js";

let usernameSpan: HTMLSpanElement;
let input: HTMLInputElement;
let submitBtn: HTMLButtonElement;

export function initGreetings(): void {
    usernameSpan = getElement<HTMLSpanElement>("username");
    input = getElement<HTMLInputElement>("name");
    submitBtn = getElement<HTMLButtonElement>("submit-btn");

    const current = get<string>("username");
    if (current != null) {
        const nameToUse = getName(current);
        if (nameToUse == null) return;

        usernameSpan.innerText = nameToUse;
        input.value = nameToUse;
    }

    submitBtn.addEventListener("click", onClick);
}

function onClick(): void {
    const enteredName = input.value.trim();
    const trimmed = getName(enteredName);
    if (trimmed == null) {
        alert("ENTER SOMETHING OMG.");
        return;
    }

    set<string>("username", trimmed);
    usernameSpan.innerText = trimmed;

    submitBtn.innerText = "SAVEDDDDDDD";
    setTimeout(() => {
        submitBtn.innerText = "CONTINUE.";
    }, 1200);
}

function getName(newName: string): string | undefined {
    const trimmed = newName.trim();

    if (trimmed === "") alert("BRO THIS IS EMPTY");
    else if (trimmed === "SOMETHING OMG.")
        alert("are you serious right now??? WRAP IT UP, BUDDY.");
    else return trimmed;
}
