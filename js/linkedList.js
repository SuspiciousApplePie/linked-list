export function linkedList() {
  const linkedList = node();
  return {
    append: (value) => {
      let current = linkedList;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      if (!current.value && !current.nextNode) {
        linkedList.value = value;
      } else if (current.value && !current.nextNode) {
        current.nextNode = node(value);
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
