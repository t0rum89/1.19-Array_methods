// 1.

function getArray(num) {
  let array = [];

  for (i = 1; i <= num; i++) {
    array.push(i);
  }

  return array;
  console.log(array);
}
console.log(getArray(12));

// 2.

function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3])); // [1,2,3,1,2,3]

// 3.

function changeCollection() {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const firstElement = arguments[i].slice();
      firstElement.shift();
      result.push(firstElement);
    }
  }
  return result;
}

console.log(changeCollection([1, 2, 3], ["a", "b", "c"], [1]));

// 4.

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function filterUsers(arr, key, value) {
  if (!Array.isArray(arr))
    return Error("The first argument should be an array");
  if (typeof key !== "string" || key === "")
    return new Error("The key should be a valid string");
  if (value === undefined || value === null)
    return new Error("The value should be a valid value.");

  const res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(filterUsers(users, "gender", "male"));
