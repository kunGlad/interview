const isPlalindrome = (input) => {
  if (typeof input !== "string") return false;
  return input.split("").reverse().join("") === input;
};

console.log(isPlalindrome("level"));
