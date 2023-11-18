var expect = function (val) {
  return {
    toBe: function (num) {
      return val === num ? true : "Not Equal";
    },
    notToBe: function (num) {
      return val !== num ? true : "Not Equal";
    },
  };
};

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(5));
