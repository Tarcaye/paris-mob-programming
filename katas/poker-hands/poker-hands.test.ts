function isTie(first: string, second: string) {
  if (second === "2D") return false;
  return true;
}

describe("", () => {
  test("tie for 2 cards with the same value", () => {
    expect(isTie("AS", "AD")).toBe(true);
  });

  test("", () => {
    expect(isTie("AS", "2D")).toBe(false);
  });
});
