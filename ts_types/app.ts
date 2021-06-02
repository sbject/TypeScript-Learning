function add(a: number, b: number): number {
  return a + b;
}

function printSth<T>(a: T) {
  console.log(a);
}

// you can prescribe a function as a type
let cValues: Function;
let c1Values: () => number;
let c2Values: (a: number, b: number) => number;

c2Values = add;

console.log(c2Values(5, 9));

function addAndDoStuff(a: number, b: number, c: (z: number) => void) {
  const d = a + b;
  c(d);
}

addAndDoStuff(9, 10, (result) => {
  console.log(result);
});
