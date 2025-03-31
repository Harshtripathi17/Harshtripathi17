/** @format */

// void if not returning anything
function printfn(): void {
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

function add(a, b): number {
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

function concatenation(a: number, b: string) {
  return a + b;
}
console.log(concatenation(4, "a"));

// optional parameter
function concatenations(b: string, a?: number) {
  return b + (a || 0);
}
console.log("a");
console.log("a", 56);

// default parameters
function defaultpara(value, exponent = 2) {
  return value ** exponent;
}
console.log(defaultpara(4));
console.log(defaultpara(4, 4));

function defaultparameter(value: number, exponent: number = 2) {
  return value ** exponent;
}
console.log(defaultparameter(4));
console.log(defaultparameter(4, 4));

// named parameter
function named({ a, b }: { a: number; b: string }) {
  return a + b;
}
console.log(named({ a: 4, b: "3" }));

// rest parameters

// type alias
