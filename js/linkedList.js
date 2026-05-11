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
    at: (index) => {
      let cur = linkedList;
      if (index >= size || index < 0) return;
      for (let pos = 0; pos < index; pos++) {
        cur = cur.nextNode;
      }
      return cur.value;
    },
    pop: () => {
      if (size === 1) {
        linkedList = null;
        tail = null;
        size--;
        return linkedList;
      }
      let prev = null;
      let cur = linkedList;
      while (cur.nextNode) {
        prev = cur;
        cur = cur.nextNode;
      }
      tail = prev;
      tail.nextNode = null;
      size--;
      return linkedList;
    },
    contains: (value) => {
      let isExist = false;
      let cur = linkedList;
      while (cur) {
        console.log(`${cur.value} = ${value}`);
        if (cur.value === value) {
          isExist = true;
          break;
        }
        cur = cur.nextNode;
      }

      return isExist;
    },
  };
}
export function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}
