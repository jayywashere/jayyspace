import { getElement } from "../utils/dom.js";

let btn: HTMLButtonElement;
let counter = 0;

export function initContinueBtn(): void {
    btn = getElement<HTMLButtonElement>("continue-btn");
    btn.addEventListener("click", onClick);
}

function onClick(): void {
    counter++;

    if (counter <= 1000) {
        const msg = `${getMsg(counter)} (counter: ${counter})`;
        btn.innerText = msg;
    } else {
        btn.innerText = "SRSLY?? just quit";

        alert(
            "i literally just told you i'm not doing anything anymore; ever considered touching some grass??",
        );
    }
}

function getMsg(counter: number): string {
    switch (true) {
        case counter < 2:
            return "baby steps";
        case counter < 50:
            return "umm adult steps";
        case counter < 100:
            return "okay, so, uhh, great job!!! you may.. wanna stop??";
        case counter < 1000:
            return "uhmm... are you gonna stop???";
        default:
            return "i swear. i am not gonna do anything anymore. so long, SUCKER";
    }
}
