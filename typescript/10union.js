/** @format */
var array = [1];
console.log(array);
array[0] = "string";
console.log(array);
// works perfectly gives no error as code type is decided on the value we are passing but if you want to specify the type you can do it also to restrict the value being passed
function printfn(code) {
    console.log(code);
}
printfn(5);
printfn("a");
function printfns(code) {
    // console.log(code.toUpperCase()) gives error as for string it is valid but what if you are passing a bool value
    console.log(code, typeof code);
    console.log(code.toString(), typeof code.toString()); // works well
}
printfns("abc");
printfns(true);
