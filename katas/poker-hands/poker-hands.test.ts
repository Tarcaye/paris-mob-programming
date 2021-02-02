function isTie(first: string, second: string) {
    if (first.length >= 3) {
        return first[3] === second[3];
    }
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

    test("2no for 2 cards with different values", () => {
        expect(isTie("AS AD", "AH AC")).toBe(true);
    });

});
