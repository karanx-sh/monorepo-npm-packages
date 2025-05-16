import { add } from "package-a";

export function multiply(a: number, b: number): number {
    const c = add(a, b); // This will now work correctly
    return a * c;
}