export function assertExists<T extends Element>(
    value: T | null | undefined,
    message = "Value is missing.",
): T {
    if (value == null) throw new Error(message);
    return value;
}
