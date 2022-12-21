var add = require("./calc.js");

describe("calculator", function() {
    it("add 2 numbers", function() {
        expect(add(1, 2)).toEqual(3)
    })
})