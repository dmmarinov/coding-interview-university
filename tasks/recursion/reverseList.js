function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const reverseList = function(node) {
  if (node.next === null) {
      return node;
  }

  const post = reverseList(node.next);
  node.next.next = node;
  node.next = null;

  return post;
};


const list = new ListNode(1, new ListNode(2, new ListNode(3)));
const x = reverseList(list);

console.log(x);
