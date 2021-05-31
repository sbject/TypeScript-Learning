function add(n1: number, n2: number, show: boolean, phrase: string) {
  const result = n1 + n2;
  if (show) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let a: number;
a = 5;
const b = 3.1;
const printIt = true;
let resPhrase = "Result is: ";
add(a, b, printIt, resPhrase);
