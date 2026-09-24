import { assertExists } from "./assertion.js";
export function getElement(id, errorMsg) {
    const cleanedId = id.startsWith("#") ? id.slice(1) : id;
    const el = document.getElementById(cleanedId);
    return assertExists(el, errorMsg ?? `Element #${cleanedId} is missing from DOM.`);
}
//# sourceMappingURL=dom.js.map