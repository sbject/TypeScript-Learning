const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Sergey",
  age: 36,
  hobbies: ["hockey", "photo", "soccer"],
  role: [34, "center"],
};

for (const h of person.hobbies) {
  console.log(h.toUpperCase);
}
