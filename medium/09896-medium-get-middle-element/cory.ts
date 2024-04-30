export type Pop<T extends any[]> = T extends [...infer U, unknown] ? U : T;
export type Shift<T extends [...any]> = T extends [unknown, ...infer B] ? B : [];

export type GetMiddleElement<T extends any[]> = T['length'] extends 0 | 1 | 2 ? T : GetMiddleElement<Shift<Pop<T>>>