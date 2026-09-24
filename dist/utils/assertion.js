export function assertExists(value, message = "Value is missing.") {
    if (value == null)
        throw new Error(message);
    return value;
}
//# sourceMappingURL=assertion.js.map