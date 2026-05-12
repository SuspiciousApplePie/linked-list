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
        if (cur.value === value) {
          isExist = true;
          break;
        }
        cur = cur.nextNode;
      }

      return isExist;
    },
    findIndex: (value) => {
      let cur = linkedList;
      let index = -1;
      for (let pos = 0; pos < size; pos++) {
        if (value === cur.value) {
          index = pos;
          break;
        }
        cur = cur.nextNode;
      }
      return index;
    },
    toString: () => {
      let nodeString = [];
      let cur = linkedList;
      while (cur) {
        nodeString.push(`( ${cur.value} )`);
        cur = cur.nextNode;
      }
      nodeString.push("null");
      return nodeString.join(" -> ");
    },
    insertAt: (index, ...values) => {
      if (index < 0 || index > size)
        throw new RangeError(`Index must be in range 0-${size}`);
      let next = linkedList;
      let prev;
      for (let pos = 0; pos < index; pos++) {
        prev = next;
        next = next.nextNode;
      }

      values.forEach((value) => {
        const newNode = node(value);
        if (prev) {
          prev.nextNode = newNode;
          newNode.nextNode = next;
          prev = newNode;
        } else {
          prev = newNode;
          newNode.nextNode = next;
          linkedList = prev;
        }
      });
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
