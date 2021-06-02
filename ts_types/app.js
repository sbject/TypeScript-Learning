// enum doesn't have to be in capital letters - for convenience
var user;
(function (user) {
    user[user["ADMIN"] = 0] = "ADMIN";
    user[user["READER"] = 1] = "READER";
    user[user["AUTHOR"] = 2] = "AUTHOR";
})(user || (user = {}));
//this way READER is 6 and AUTHOR is 7
var user2;
(function (user2) {
    user2[user2["ADMIN"] = 5] = "ADMIN";
    user2[user2["READER"] = 6] = "READER";
    user2[user2["AUTHOR"] = 7] = "AUTHOR";
})(user2 || (user2 = {}));
// this way it is whatever you assign to it
var user3;
(function (user3) {
    user3[user3["ADMIN"] = 5] = "ADMIN";
    user3[user3["READER"] = 100] = "READER";
    user3[user3["AUTHOR"] = 404] = "AUTHOR";
})(user3 || (user3 = {}));
var person = {
    name: "Sergey",
    age: 36,
    hobbies: ["hockey", "photo", "soccer"],
    role: [34, "center"],
    userRole: user.ADMIN
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h.toUpperCase());
}
console.log(person.userRole);
