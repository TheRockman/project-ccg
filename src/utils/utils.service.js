module.exports = {
  generateId: () => {
    const hexDigits = "0123456789abcdef";
    let s = [];

    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    return s.join("");
  },

  findAndRemove: (arr, obj) => {
    arr.splice(arr.indexOf(obj), 1);
  },

  countInArray: (arr, obj) => {
    return arr.reduce((n, x) => n + (x === obj), 0);
  },

  getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
