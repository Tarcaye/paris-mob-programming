test("Fake poker hands test", () => {
	expect(true).toBe(true);
});


function isTie() {
	return true;
}

test("on donne 2 cartes on dit que c'est égal", () => {
	expect(isTie()).toBe(true);
})

test("2on donne 2 cartes on dit que c'est égal", () => {
	expect(isTie("AS","2D")).toBe(false);
})
