let validator = {
  set: function (target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number" || value < 0 || value > 120) {
        throw new Error("Invalid age");
      }
    }

    target[prop] = value;
    return true;
  },
  get: function (target, propkey) {
    return Reflect.get(target, propkey);
  },
};

let person = new Proxy({}, validator);

person.name = "John";
person.age = 30;

console.log(person.name); // Output: John
console.log(person.age); // Output: 30

person.age = "30"; // Output: Uncaught Error: Invalid age
