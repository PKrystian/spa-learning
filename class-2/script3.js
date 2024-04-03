inTurnChangeBoolean = function () {
    let turn = true;
    return function () {
        return turn = !turn;
    };
}
const boolean = inTurnChangeBoolean();

console.log(boolean());
console.log(boolean());
console.log(boolean());
