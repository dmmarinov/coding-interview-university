function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const searchBST = function(root, val) {
  if (root.val === val) {
      return root;
  }

  if (!root.left && !root.right) {
    return null;
  }

  if (val > root.val) {
    return searchBST(root.right, val);
  }

  return searchBST(root.left, val);
};

const bst = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
const x = searchBST(bst, 2);

console.log(x);