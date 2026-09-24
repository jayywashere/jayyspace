import { getElement } from "../utils/dom.js";
import { get, set } from "../utils/storage.js";
let usernameSpan;
let input;
let submitBtn;
export function initGreetings() {
    usernameSpan = getElement("username");
    input = getElement("name");
    submitBtn = getElement("submit-btn");
    const current = get("username");
    if (current != null) {
        const nameToUse = getName(current);
        if (nameToUse == null)
            return;
        usernameSpan.innerText = nameToUse;
        input.value = nameToUse;
    }
    submitBtn.addEventListener("click", onClick);
}
function onClick() {
    const enteredName = input.value.trim();
    const trimmed = getName(enteredName);
    if (trimmed == null) {
        alert("ENTER SOMETHING OMG.");
        return;
    }
    set("username", trimmed);
    usernameSpan.innerText = trimmed;
    submitBtn.innerText = "SAVEDDDDDDD";
    setTimeout(() => {
        submitBtn.innerText = "CONTINUE.";
    }, 1200);
}
function getName(newName) {
    const trimmed = newName.trim();
    if (trimmed === "")
        alert("BRO THIS IS EMPTY");
    else if (trimmed === "SOMETHING OMG.")
        alert("are you serious right now??? WRAP IT UP, BUDDY.");
    else
        return trimmed;
}
//# sourceMappingURL=greetings.js.map