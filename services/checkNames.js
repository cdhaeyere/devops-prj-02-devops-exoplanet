/*eslint-disable*/
const checkNames = (name) => {
    const specialChars = /^[-.a-zA-Z0-9]*$/;
    if (name === name.toUpperCase() && specialChars.test(name)) return true;
    return false
}

module.exports = checkNames;