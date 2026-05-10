export function linkedList() {
  let linkedList = null;
  let tail = null;
  return {
    append: (value) => {
      if (!linkedList) {
        linkedList = node(value);
        tail = linkedList;
        return linkedList;
      }
      tail.nextNode = node(value);
      tail = tail.nextNode;

      return linkedList;
    },
    prepend: (value) => {},
  };
}
export function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
