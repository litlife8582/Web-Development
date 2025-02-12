function sum(a, b, fnToCall) {
    let result = a + b;
    if (fnToCall) {
        fnToCall(result);
    }
    return result;
}
function displayResults(c, d) {
    sum(c, d, disp);
}
function disp(data) {
    console.log("The result of the operation is: " + data);
}
const value = sum(1, 2, disp);
console.log("Value from sum(1, 2):", value);
displayResults(50, 100);
const ans = sum(21, 38, disp);