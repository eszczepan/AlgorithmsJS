// const century = (year) =>
//   year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1);

const century = (year) => Math.ceil(year / 100);

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
