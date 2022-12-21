/*eslint-disable*/
const checkNames = (name) => {
    return isUpperCase(name) && specialChars(name)
}

const isUpperCase = (name) => {
    return name === name.toUpperCase();
}

const specialChars = (name) => {
    const specialChars = /^[-.a-zA-Z0-9]*$/;
    return specialChars.test(name);
}

module.exports = checkNames;