export type ConstructTuple<L extends number, P extends any[] = []> = P["length"] extends L ?
    P :
    ConstructTuple<L,[...P, unknown]>