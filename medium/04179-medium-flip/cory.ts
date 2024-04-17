export type Flip<T extends object> = {
    [P in keyof T as T[P] extends (string | number | symbol) ? T[P] : `${T[P]}`]: P;
}