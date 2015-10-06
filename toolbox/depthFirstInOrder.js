function empty(node) {
  return node === undefined || node === null;
}

function inorder(T, callback) {
  var node, stack;
  
  node = T;
  stack = [];
  
  while (stack.length > 0 || !empty(node)) {
    if (!empty(node)) {
      stack.push(node);
      node = node.l;
    } else {
      node = stack.pop();
      callback(node);
      node = node.r;
    }
  }
}

module.exports = inorder;