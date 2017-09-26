//Red-Green-refactor
//test fail
//test pass

describe("Calculator", function() {
 
    beforeEach(function() {
        calc = new Calculator();
    });
    describe('Addition function', function() {
        it('should add two numbers together and return the result', function() {
            calc.add(2);
            calc.add(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 4 if the numbers given don't add up to 4", function() {
            calc.add(12);
            calc.add(7);
            expect(calc.value).toBe(19);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.add();
            expect(window.alert).toHaveBeenCalledWith("needs to be a number");
        });
    });
    describe('Multiply function', function() {
        it('should multiplies two numbers together and return the result', function() {
            calc.mult(2);
            calc.mult(2);
            expect(calc.value).toBe(4);
        });
 
        it("should not return 84 if the multiplied numbers dont equal 84", function() {
            calc.mult(12);
            calc.mult(7);
            expect(calc.value).toBe(84);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.mult();
            expect(window.alert).toHaveBeenCalledWith("needs to be a number");
        });
    });
    describe('Subtract function', function() {
        it('should subtract two numbers together and return the result', function() {
            calc.sub(2);
            calc.sub(2);
            expect(calc.value).toBe(0);
        });
 
        it("should not return 4 if the multiplied numbers dont equal 4", function() {
            calc.sub(12);
            calc.sub(7);
            expect(calc.value).toBe(5);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.sub();
            expect(window.alert).toHaveBeenCalledWith("needs to be a number");
        });
    });
    describe('Divide function', function() {
        it('should divide two numbers together and return the result', function() {
            calc.divd(2);
            calc.divd(2);
            expect(calc.value).toBe(1);
        });
 
        it("should not return 3 if the divided numbers dont equal 3", function() {
            calc.divd(21);
            calc.divd(7);
            expect(calc.value).toBe(3);
        });
 
        it("should have called the alert function if the number given is undefined", function() {
            spyOn(window, "alert");
            calc.divd();
            expect(window.alert).toHaveBeenCalledWith("needs to be a number");
        });
    });
});