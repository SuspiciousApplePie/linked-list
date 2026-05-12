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
    expect(item.prepend("RR")).toStrictEqual({
      value: "RR",
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

describe("size test", () => {
  test("no nodes", () => {
    const item = linkedList();
    expect(item.size()).toBe(0);
  });

  test("one node appended", () => {
    const item = linkedList();
    item.append("Bron");
    expect(item.size()).toBe(1);
  });

  test("3 node appended", () => {
    const item = linkedList();
    item.append("Bron");
    item.append("Bron");
    item.append("Bron");
    expect(item.size()).toBe(3);
  });

  test("1 node prepended", () => {
    const item = linkedList();
    item.append("Bron");
    expect(item.size()).toBe(1);
  });

  test("3 node prepended", () => {
    const item = linkedList();
    item.prepend("Bron");
    item.prepend("Bron");
    item.prepend("Bron");
    expect(item.size()).toBe(3);
  });
  test("size after pop", () => {
    const item = linkedList();
    item.prepend("Bron");
    item.pop();
    expect(item.size()).toBe(0);
  });
});

describe("head test", () => {
  test("return non null from append", () => {
    const item = linkedList();
    item.append("Bron");
    expect(item.head()).toBe("Bron");
  });
  test("return non null from prepend", () => {
    const item = linkedList();
    item.prepend("Bron");
    expect(item.head()).toBe("Bron");
  });
  test("return no value", () => {
    const item = linkedList();
    expect(item.head()).toBe(undefined);
  });
  test("head after pop", () => {
    const item = linkedList();
    item.prepend("Bron");
    item.pop();
    expect(item.head()).toBe(undefined);
  });
});

describe("tail test", () => {
  test("return non null", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Koloko");
    item.append("Kokoloko");
    expect(item.tail()).toBe("Kokoloko");
  });
  test("return non null prepend", () => {
    const item = linkedList();
    item.prepend("Koko");
    item.prepend("Koloko");
    item.prepend("Kokoloko");
    expect(item.tail()).toBe("Koko");
  });
  test("return undefined", () => {
    const item = linkedList();
    expect(item.tail()).toBe(undefined);
  });
  test("tail after pop", () => {
    const item = linkedList();
    item.prepend("Bron");
    item.pop();
    expect(item.tail()).toBe(undefined);
  });
});

describe("at test", () => {
  test("test at 0 position", () => {
    const item = linkedList();
    item.append("Koko");
    expect(item.at(0)).toBe("Koko");
  });
  test("test at 1 position", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Bron");
    expect(item.at(1)).toBe("Bron");
  });
  test("test at 3 position", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Bron");
    item.append("Lon");
    item.append("Toronto");
    item.append("Paquito");
    item.append("Loba");
    expect(item.at(3)).toBe("Toronto");
  });
  test("test at higher range than size", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Bron");
    item.append("Lon");
    expect(item.at(3)).toBe(undefined);
  });
  test("test at lower range than 0", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Bron");
    item.append("Lon");
    expect(item.at(-1)).toBe(undefined);
  });
});

describe("pop test", () => {
  test("delete in one item", () => {
    const item = linkedList();
    item.append("Koko");
    expect(item.pop()).toStrictEqual(null);
  });
  test("delete in two item", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Joe");
    expect(item.pop()).toStrictEqual({
      value: "Koko",
      nextNode: null,
    });
  });
  test("delete in two item", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Joe");
    item.append("Mart");
    expect(item.pop()).toStrictEqual({
      value: "Koko",
      nextNode: {
        value: "Joe",
        nextNode: null,
      },
    });
  });
});

describe("contains check", () => {
  test("check if it contains the value", () => {
    const item = linkedList();
    item.append("Koko");
    expect(item.contains("Koko")).toBeTruthy();
  });
  test("check if it contains the value in two nodes", () => {
    const item = linkedList();
    item.append("Koko");
    item.append("Bron");
    expect(item.contains("Bron")).toBeTruthy();
  });
  test("check if it contains the value in 4 nodes", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    expect(item.contains("Lumine")).toBeTruthy();
  });
  test("check if false works", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    expect(item.contains("Clorinde")).toBeFalsy();
  });
});

describe("findIndex test", () => {
  test("check first item in one node list", () => {
    const item = linkedList();
    item.append("Lumine");
    expect(item.findIndex("Lumine")).toBe(0);
  });
  test("check index in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    expect(item.findIndex("Lumine")).toBe(2);
  });
  test("check index of  non existing value in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    expect(item.findIndex("Clorinde")).toBe(-1);
  });
  test("check index with duplicate", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    item.append("Aether");
    expect(item.findIndex("Aether")).toBe(1);
  });
});

describe("toString test", () => {
  test("convert 1 node to string", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(item.toString()).toBe("( Paimon ) -> null");
  });
  test("convert 1 node to string", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    expect(item.toString()).toBe(
      "( Paimon ) -> ( Aether ) -> ( Lumine ) -> null",
    );
  });
});

describe("insertAt test", () => {
  test("insert 1 item in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.insertAt(1, "Lumine")).toStrictEqual({
      value: "Paimon",
      nextNode: {
        value: "Lumine",
        nextNode: {
          value: "Aether",
          nextNode: null,
        },
      },
    });
  });

  test("insert 2 item in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.insertAt(1, "Lumine", "Amber")).toStrictEqual({
      value: "Paimon",
      nextNode: {
        value: "Lumine",
        nextNode: {
          value: "Amber",
          nextNode: {
            value: "Aether",
            nextNode: null,
          },
        },
      },
    });
  });

  test("insert 4 item in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(
      item.insertAt(1, "Lumine", "Amber", "Clorinde", "SKirk"),
    ).toStrictEqual({
      value: "Paimon",
      nextNode: {
        value: "Lumine",
        nextNode: {
          value: "Amber",
          nextNode: {
            value: "Clorinde",
            nextNode: {
              value: "SKirk",
              nextNode: {
                value: "Aether",
                nextNode: null,
              },
            },
          },
        },
      },
    });
  });

  test("insert 1 item in start of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.insertAt(0, "Lumine")).toStrictEqual({
      value: "Lumine",
      nextNode: {
        value: "Paimon",
        nextNode: {
          value: "Aether",
          nextNode: null,
        },
      },
    });
  });

  test("insert 2 item in start of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.insertAt(0, "Lumine", "Amber")).toStrictEqual({
      value: "Lumine",
      nextNode: {
        value: "Amber",
        nextNode: {
          value: "Paimon",
          nextNode: {
            value: "Aether",
            nextNode: null,
          },
        },
      },
    });
  });

  test("insert 2 item in end of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.insertAt(2, "Lumine", "Amber")).toStrictEqual({
      value: "Paimon",
      nextNode: {
        value: "Aether",
        nextNode: {
          value: "Lumine",
          nextNode: {
            value: "Amber",
            nextNode: null,
          },
        },
      },
    });
  });

  test("Range error more than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.insertAt(2, "Lumine")).toThrow(
      `Index must be in range 0-1`,
    );
  });
  test("Range error less than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.insertAt(-1, "Lumine")).toThrow(
      `Index must be in range 0-1`,
    );
  });
});
