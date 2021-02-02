test("Fake poker hands test", () => {
	expect(true).toBe(true);
});

test("on donne 2 cartes on dit que c'est égal", () => {
	expect(toto("2C", "2D")).toBe(true)
})
