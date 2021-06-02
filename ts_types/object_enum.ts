// examples of tuples, object and enum

// enum start from 0 and doesn't have to be in capital letters - for convenience
enum user {
  ADMIN,
  READER,
  AUTHOR,
}
//this way READER is 6 and AUTHOR is 7
enum user2 {
  ADMIN = 5,
  READER,
  AUTHOR,
}
// this way it is whatever you assign to it
enum user3 {
  ADMIN = 5,
  READER = 100,
  AUTHOR = 404,
}

// role is a tuple and tuple is an array of fixed length with defined params
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  userRole: user;
} = {
  name: "Sergey",
  age: 36,
  hobbies: ["hockey", "photo", "soccer"],
  role: [34, "center"],
  userRole: user.ADMIN,
};

for (const h of person.hobbies) {
  console.log(h.toUpperCase());
}

console.log(person.userRole);
