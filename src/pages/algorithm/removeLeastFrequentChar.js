const removeLeastFrequentChar = (str) => {
  // 定义存储每个字符出现次数的对象
  const charMap = {};

  //   便利字符串并将每个字符出现的字符保存到对象中
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  //   找出出现次数最少得字符，并将其从对象中删除
  const minCount = Math.min(...Object.values(charMap));
  for (const key in charMap) {
    if (charMap.hasOwnProperty(key) && charMap[key] === minCount) {
      delete charMap[key];
    }
  }

  //   遍历字符串并根据存储的次数对象过滤处付浩条件的字符
  return str
    .split("")
    .filter((char) => charMap[char])
    .join("");
};

console.log(removeLeastFrequentChar("aaabbbcceeff"));
