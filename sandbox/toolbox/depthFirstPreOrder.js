function empty(node) {
  return node === undefined || node === null;
}

function preorder(T, callback) {
  var node, stack;
  
  node = T;
  stack = [];
  
  while (stack.length > 0 || !empty(node)) {
    if (!empty(node)) {
      callback(node);
      
      if (!empty(node.r)) {
        stack.push(node.r);
      }
      
      node = node.l;
    } else {
      node = stack.pop();
    }
  }
}

module.exports = preorder;