export function linkedList() {
  const linkedList = node();
  let tail = linkedList;
  return {
    append: (value) => {
      if (!tail.value && !tail.nextNode) {
        tail.value = value;
      } else if (tail.value && !tail.nextNode) {
        tail.nextNode = node(value);
        tail = tail.nextNode;
      }

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
