function empty(node) {
  return node === undefined || node === null;
}

function postorder(T, callback) {
  var node, stack, last, lastVisited;
  
  node = T;
  stack = [];
  
  while (stack.length > 0 || !empty(node)) {
    if (!empty(node)) {
      stack.push(node);
      node = node.l;
    } else {
      last = stack[stack.length - 1];
      if (!empty(last.r) && lastVisited !== last.r) {
        node = last.r;
      } else {
        callback(last);
        lastVisited = stack.pop();
        node = null;
      }
    }
  }
}

module.exports = postorder;