export type InorderTraversal<T extends TreeNode | null> = T extends null ? []
    : [
        { [P in keyof T as P extends 'left' ? P : never]: T[P] } extends { left: infer S extends TreeNode} 
            ? InorderTraversal<S> 
            : [],
        { [P in keyof T as P extends 'val' ? P : never]: T[P] } extends { val: infer S} ? S : never,
        { [P in keyof T as P extends 'right' ? P : never]: T[P] } extends { right: infer S extends TreeNode} ? InorderTraversal<S> : [],
    ] extends [[...infer A], infer B, [...infer C]] ? [...A, B, ...C] : never;

    /** max 님 답변이 제일 좋아 보이네요.
     type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : [];
     */