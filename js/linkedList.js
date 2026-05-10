export function linkedList() {
  let linkedList = null;
  let tail = null;
  let size = 0;

  return {
    append: (value) => {
      if (!linkedList) {
        linkedList = node(value);
        tail = linkedList;
        size += 1;
        return linkedList;
      }
      tail.nextNode = node(value);
      tail = tail.nextNode;
      size += 1;
      return linkedList;
    },
    prepend: (value) => {
      if (!linkedList) {
        linkedList = node(value);
        tail = linkedList;
        size += 1;
        return linkedList;
      }
      linkedList = node(value, linkedList);
      size += 1;
      return linkedList;
    },
    size: () => {
      return size;
    },
    head: () => {
      return linkedList ? linkedList.value : undefined;
    },
    tail: () => {
      return tail ? tail.value : undefined;
    },
  };
}
export function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
