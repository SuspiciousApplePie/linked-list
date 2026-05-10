import { linkedList, node } from "./linkedList";

describe("Node test", () => {
  test("Returns node item", () => {
    expect(node()).toStrictEqual({
      value: null,
      nextNode: null,
    });
  });
  test("Returns node item with value", () => {
    expect(node("joao")).toStrictEqual({
      value: "joao",
      nextNode: null,
    });
  });
});

describe("Append test", () => {
  const item = linkedList();
  const item2 = linkedList();
  item2.append("Bron");
  test("append base", () => {
    expect(item.append("John")).toStrictEqual({
      value: "John",
      nextNode: null,
    });
  });
  test("append with existing content", () => {
    expect(item2.append("John")).toStrictEqual({
      value: "Bron",
      nextNode: {
        value: "John",
        nextNode: null,
      },
    });
  });
  test("append with null", () => {
    expect(item2.append()).toStrictEqual({
      value: "Bron",
      nextNode: {
        value: "John",
        nextNode: {
          value: null,
          nextNode: null,
        },
      },
    });
  });
});

describe("Prepend test", () => {
  const item = linkedList();
  test("prepend with zero items", () => {
    expect(item.prepend("Yuki")).toStrictEqual({
      value: "Yuki",
      nextNode: null,
    });
  });
  test("prepend with one items", () => {
    expect(item.prepend("Yuta")).toStrictEqual({
      value: "Yuta",
      nextNode: {
        value: "Yuki",
        nextNode: null,
      },
    });
  });
  test("prepend with null items", () => {
    expect(item.prepend()).toStrictEqual({
      value: null,
      nextNode: {
        value: "Yuta",
        nextNode: {
          value: "Yuki",
          nextNode: null,
        },
      },
    });
  });
});
