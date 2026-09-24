import { assertExists } from "./assertion.js";

export function getElement<T extends HTMLElement>(
    id: string,
    errorMsg?: string,
): T {
    const cleanedId = id.startsWith("#") ? id.slice(1) : id;

    const el = document.getElementById(cleanedId);

    return assertExists(
        el,
        errorMsg ?? `Element #${cleanedId} is missing from DOM.`,
    ) as T;
}
