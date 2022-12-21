/*eslint-disable*/
const checkNames = require("../checkNames");

describe("checkNames test",() => {
    test('1: test name is upperCase and contains specialChars',() => {
        const result = checkNames('TRAPPIST-01');
        expect(result).toBe(true);
    });
    test('2: test name is not upperCase',() =>{
        const result = checkNames('trappist-01');
        expect(result).toBeFalsy();
    })
    test('3: test name contains others specialsChars', () => {
        const result = checkNames('trappist-@@01');
        expect(result).toBeFalsy();
    })
});