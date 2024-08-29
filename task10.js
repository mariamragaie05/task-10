//Part 1
const array = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];
const [
  ,
  ,
  ,
  {
    arr: [, , , [, extract33]],
    obj: { d: extractMoha },
  },
] = array;

console.log(extract33, extractMoha);

//Part 2
const array2 = [
  2,
  4,
  [22, "test"],
  false,
  null,
  { a: 2 },
  [22, "test"],
  "null",
];
function hasDuplicates(array) {
  const checked = new Set();
  for (const element of array) {
    const currentElement =
      typeof element === "object" ? JSON.stringify(element) : String(element);
    if (checked.has(currentElement)) {
      return true;
    }
    checked.add(currentElement);
  }
  return false;
}
hasDuplicates(array2)
  ? console.log("Array has duplicates")
  : console.log("Array does not have duplicates");
