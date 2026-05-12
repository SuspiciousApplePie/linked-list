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
  test("append base", () => {
    const item = linkedList();
    item.append("Aether");
    expect(item.tail()).toBe("Aether");
  });
  test("append with existing content", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(item.tail("Aether")).toBe("Aether");
  });
  test("append with null", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append();
    expect(item.tail()).toBe(null);
  });
});

describe("Prepend test", () => {
  test("prepend with zero items", () => {
    const item = linkedList();
    item.prepend("Paimon");
    expect(item.head()).toBe("Paimon");
  });
  test("prepend with one items", () => {
    const item = linkedList();
    item.prepend("Paimon");
    item.prepend("Aether");
    expect(item.head()).toBe("Aether");
  });
  test("prepend with null items", () => {
    const item = linkedList();
    item.prepend("Paimon");
    item.prepend("Aether");
    item.prepend();
    expect(item.head()).toBe(null);
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
    item.insertAt(1, "Lumine");
    expect(item.findIndex("Lumine")).toBe(1);
  });

  test("insert 2 item in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.insertAt(1, "Lumine", "Amber");
    console.log(item.toString());
    console.log(item.findIndex("Amber"));
    expect(item.findIndex("Amber")).toBe(2);
  });

  test("insert 4 item in middle of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.insertAt(1, "Lumine", "Amber", "Clorinde", "SKirk");
    expect(item.findIndex("Clorinde")).toBe(3);
  });

  test("insert 1 item in start of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.insertAt(0, "Lumine");
    expect(item.findIndex("Lumine")).toBe(0);
  });

  test("insert 2 item in start of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.insertAt(0, "Lumine", "Amber");
    expect(item.findIndex("Amber")).toBe(1);
  });

  test("insert 2 item in end of list", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.insertAt(2, "Lumine", "Amber");
    expect(item.findIndex("Amber")).toBe(3);
  });

  test("Range error more than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.insertAt(2, "Lumine")).toThrow(
      `Index must be in range 0-0`,
    );
  });
  test("Range error less than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.insertAt(-1, "Lumine")).toThrow(
      `Index must be in range 0-0`,
    );
  });
});

describe("removeAt test", () => {
  test("remove from middle", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.removeAt(1);
    expect(item.findIndex("Lumine")).toBe(1);
  });

  test("remove from 3rd item", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    item.removeAt(2);
    expect(item.findIndex("Amber")).toBe(2);
    expect(item.size("Amber")).toBe(3);
  });

  test("remove from 1st item", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    item.removeAt(0);
    expect(item.findIndex("Aether")).toBe(0);
  });

  test("remove last item", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    item.append("Lumine");
    item.append("Amber");
    item.removeAt(3);
    expect(item.findIndex("Amber")).toBe(-1);
  });

  test("Range error more than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.removeAt(-1, "Lumine")).toThrow(
      `Index must be in range 0-0`,
    );
  });

  test("Range error more than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    expect(() => item.removeAt(1, "Lumine")).toThrow(
      `Index must be in range 0-0`,
    );
  });

  test("Range error more than max index", () => {
    const item = linkedList();
    item.append("Paimon");
    item.append("Aether");
    expect(() => item.removeAt(2, "Lumine")).toThrow(
      `Index must be in range 0-1`,
    );
  });
});
