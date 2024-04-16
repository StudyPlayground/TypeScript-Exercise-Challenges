
export type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T["left"]>,T["val"], ...InorderTraversal<T["right"]>] :[]