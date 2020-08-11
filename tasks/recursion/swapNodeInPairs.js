
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const swapPairs = function(head) {
  if(!head || !head.next) {
    console.log(head);
    return head;
  }

  const result = swapPairs(head.next.next);

  const temp = head.next;
  temp.next = head;
  head.next = result;

  return temp;
};


// 9 -> 10 -> 7 -> 8 -> 5
const head = new ListNode(10, new ListNode (9, new ListNode(8, new ListNode(7))));

const x = swapPairs(head);
console.log(x);