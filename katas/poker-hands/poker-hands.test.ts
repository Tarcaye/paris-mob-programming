function isTie(first: string, second: string) {
  if(first[2]) return false;
  return first[0] === second[0];
}

describe("tie", () => {
  test("yes for 2 cards with the same value", () => {
    expect(isTie("AS", "AD")).toBe(true);
  });

  test("no for 2 cards with different values", () => {
    expect(isTie("AS", "2D")).toBe(false);
  });

  test("2no for 2 cards with different values", () => {
    expect(isTie("AS AD", "AH 2S")).toBe(false);
  });

});
