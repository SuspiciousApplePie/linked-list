export function linkedList() {
  let linkedList = null;
  let head = null;
  let tail = null;
  return {
    append: (value) => {
      if (!linkedList) {
        linkedList = node(value);
        head = linkedList;
        tail = linkedList;
        return linkedList;
      }
      tail.nextNode = node(value);
      tail = tail.nextNode;

      return linkedList;
    },
    prepend: (value) => {
      if (!linkedList) {
        linkedList = node(value);
        head = linkedList;
        tail = linkedList;
        return linkedList;
      }
      linkedList = node(value, linkedList);
      return linkedList;
    },
  };
}
export function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
