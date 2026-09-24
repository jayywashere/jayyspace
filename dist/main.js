import { initContinueBtn } from "./features/continueBtn.js";
import { initGreetings } from "./features/greetings.js";
function initAll() {
    initContinueBtn();
    initGreetings();
}
function main() {
    initAll();
}
document.addEventListener("DOMContentLoaded", main);
//# sourceMappingURL=main.js.map