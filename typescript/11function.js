/** @format */
// void if not returning anything
function printfn() {
    console.log("void is used");
}
printfn();
// if returning
/*
syntax
function functionname(arguments): return type{
    action
    return result
}
*/
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
// other way
/*
syntax
function functionname(argument1:datatype ,argument2:datatype){
    action
    return result //
}
*/
function concatenation(a, b) {
    return a + b;
}
console.log(concatenation(4, "a"));
// optional parameter
function concatenations(b, a) {
    return b + (a || 0);
}
console.log("a");
console.log("a", 56);
// default parameters
function defaultpara(value, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(value, exponent);
}
console.log(defaultpara(4));
console.log(defaultpara(4, 4));
function defaultparameter(value, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(value, exponent);
}
console.log(defaultparameter(4));
console.log(defaultparameter(4, 4));
// named parameter
function named(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
console.log(named({ a: 4, b: "3" }));
