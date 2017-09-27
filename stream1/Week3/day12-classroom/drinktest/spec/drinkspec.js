describe("whatCanIDrink", function() {
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            expect(whatCanIDrink(-1)).toBe('Sorry. I can’t tell what drink because that age is incorrect!')
        });

        it("Should return 'Drink Toddy'", function() {
            expect(whatCanIDrink(13)).toBe('Drink Toddy')
        });

        it("Should return 'Drink Coke'", function() {
            expect(whatCanIDrink(17)).toBe('Drink Coke')
        });

        it("Should return 'Drink Beer'", function() {
            expect(whatCanIDrink(20)).toBe('Drink Beer')
        });

        it("Should return 'Drink Whiskey'", function() {
            expect(whatCanIDrink(129)).toBe('Drink Whiskey')
        });
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function() {
            expect(whatCanIDrink(140)).toBe('Sorry. I can’t tell what drink because that age is incorrect!')
        });
});