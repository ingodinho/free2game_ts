/**
 * use to await a certain time in ms
 * @param timeInMs
 */
export const delay = (timeInMs: number) => new Promise<void>(resolve => setTimeout(() => resolve(), timeInMs));
