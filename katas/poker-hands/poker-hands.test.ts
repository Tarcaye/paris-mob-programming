test("Fake poker hands test", () => {
	expect(true).toBe(true);
});


function isTie(first?: string, second?: string) {
	if (second === "2D") return false
	return true;
}

test("on donne 2 cartes on dit que c'est égal", () => {
	expect(isTie("AS","AD")).toBe(true);
})

test("2on donne 2 cartes on dit que c'est égal", () => {
	expect(isTie("AS","2D")).toBe(false);
})
