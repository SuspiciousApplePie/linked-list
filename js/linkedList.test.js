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
  test("append with three items", () => {
    expect(item2.append("Bronny")).toStrictEqual({
      value: "Bron",
      nextNode: {
        value: "John",
        nextNode: {
          value: "Bronny",
          nextNode: null,
        },
      },
    });
  });
});
