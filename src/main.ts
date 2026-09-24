import { initContinueBtn } from "./features/continueBtn.js";
import { initGreetings } from "./features/greetings.js";

function initAll(): void {
    initContinueBtn();
    initGreetings();
}

function main(): void {
    initAll();
}

document.addEventListener("DOMContentLoaded", main);
