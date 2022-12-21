// function myFunction(param: number | string) {
//   if (typeof (param) == "number" || typeof (param) == "string") {
//     let result = (param as any) + 100;
//     console.log("My result: " + result);
//   } else {
//     throw ("Expected a number or a string: " + param)
//   }
// }
// myFunction(2);
// myFunction("London");

// let count: number | undefined | null = 100;
// if (count != null && count != undefined) {
//   let result1: string = count.toFixed(2);
//   console.log(`Result 1: ${result1}`);
// }
// let result2: string | undefined = count?.toFixed(2);
// console.log(`Result 2: ${result2}`);

// function composeString(val: string): string {
//   return `Composed string: ${val}`;
// }
// function writeValue(val?: string) {
//   console.log(composeString(val ?? "Fallback value"));
// }
// writeValue("London");
// writeValue();

// function getUKCapital(): string {
//   return "London";
// }
// function writeCity(f: () => string) {
//   console.log(`City: ${f()}`)
// }
// writeCity(getUKCapital);

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// global scope
let e = 10;
function sum(a:any) {
  return function sum2(b:any ) {
    return function sum3(c:any) {
      // outer functions scope
      return function sum4(d:any) {
        // local scope
        e = 20;
        return a + b + c + d + e;
      };
    };
  };
}

let sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
