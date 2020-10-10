
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
};

const maxDepth = function(root) {
  return calcHeight(root);
};

const calcHeight = (root) => {
    if (!root) {
        return 0;
    }

    const leftHeight = calcHeight(root.left);
    const rightHeight = calcHeight(root.right);

    if (leftHeight > rightHeight) {
        return leftHeight + 1;
    }

    return rightHeight + 1;
};

const myTree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const result = maxDepth(myTree);
console.log(result);
