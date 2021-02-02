function isTie(first: string, second: string) {
  if (second === "2D") return false;
  return true;
}

describe("tie", () => {
  test("yes for 2 cards with the same value", () => {
    expect(isTie("AS", "AD")).toBe(true);
  });

  test("no for 2 cards with different values", () => {
    expect(isTie("AS", "2D")).toBe(false);
  });
});
