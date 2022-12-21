const { checkNames } = require("../checkNames");

describe("checkNames test",() => {
    test('1: test failed',() => {
        const result = checkNames('TRAPPIST-01');
        expect(result).toBe(true);
    });

});