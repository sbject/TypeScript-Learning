import { User } from "./models/User";

const user = new User({ name: "Sergey", age: 37 });

console.log(user.get("name"));
console.log(user.get("age"));
