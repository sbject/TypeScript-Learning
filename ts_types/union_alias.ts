// this is about union types and literal types
function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

//type here is not a number but 2.7 - literal type
const test = 2.7;

// example of literal and union type which can take one of two params
let testValue: "as-one" | "as-two";
testValue = "as-one";

// example of type alias
type Joinable = string | number;
