export interface ApiExample {
  id: string;
  name: string;
  description: string;
  usage: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  output: any;
  category:
    | "Array"
    | "Object"
    | "Map"
    | "Set"
    | "String"
    | "Math"
    | "Promise"
    | "Number"
    | "JSON"
    | "Date"
    | "RegExp"
    | "Function"
    | "Operator";
}

export const apiData: ApiExample[] = [
  // --- ARRAY METHODS ---
  {
    id: "array-at",
    name: "Array.prototype.at()",
    description:
      "Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.",
    usage:
      "const array1 = [5, 12, 8, 130, 44];\nconst index = 2;\nconsole.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);\nconst index2 = -2;\nconsole.log(`Using an index of ${index2} the item returned is ${array1.at(index2)}`);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at",
    input: [5, 12, 8, 130, 44],
    output: "44 (at index -1)",
    category: "Array",
  },
  {
    id: "array-concat",
    name: "Array.prototype.concat()",
    description:
      "Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
    usage:
      'const array1 = ["a", "b", "c"];\nconst array2 = ["d", "e", "f"];\nconst array3 = array1.concat(array2);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
    input: { arr1: ["a"], arr2: ["b"] },
    output: ["a", "b"],
    category: "Array",
  },
  {
    id: "array-copywithin",
    name: "Array.prototype.copyWithin()",
    description:
      "Shallow copies part of an array to another location in the same array and returns it without modifying its length.",
    usage:
      'const array1 = ["a", "b", "c", "d", "e"];\n// Copy to index 0 the element at index 3\nconsole.log(array1.copyWithin(0, 3, 4));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin",
    input: ["a", "b", "c", "d", "e"],
    output: ["d", "b", "c", "d", "e"],
    category: "Array",
  },
  {
    id: "array-entries",
    name: "Array.prototype.entries()",
    description:
      "Returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
    usage:
      'const array1 = ["a", "b", "c"];\nconst iterator1 = array1.entries();\nconsole.log(iterator1.next().value);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries",
    input: ["a", "b", "c"],
    output: [0, "a"],
    category: "Array",
  },
  {
    id: "array-every",
    name: "Array.prototype.every()",
    description:
      "Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.",
    usage:
      "const isBelowThreshold = (currentValue) => currentValue < 40;\nconst array1 = [1, 30, 39, 29, 10, 13];\nconsole.log(array1.every(isBelowThreshold));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
    input: [1, 30, 39, 29, 10, 13],
    output: true,
    category: "Array",
  },
  {
    id: "array-fill",
    name: "Array.prototype.fill()",
    description:
      "Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.",
    usage:
      "const array1 = [1, 2, 3, 4];\n// Fill with 0 from position 2 until position 4\nconsole.log(array1.fill(0, 2, 4));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
    input: [1, 2, 3, 4],
    output: [1, 2, 0, 0],
    category: "Array",
  },
  {
    id: "array-filter",
    name: "Array.prototype.filter()",
    description:
      "Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
    usage:
      'const words = ["spray", "elite", "exuberant", "destruction", "present"];\nconst result = words.filter((word) => word.length > 6);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    input: ["spray", "elite", "exuberant", "destruction", "present"],
    output: ["exuberant", "destruction", "present"],
    category: "Array",
  },
  {
    id: "array-find",
    name: "Array.prototype.find()",
    description:
      "Returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.",
    usage:
      "const array1 = [5, 12, 8, 130, 44];\nconst found = array1.find((element) => element > 10);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    input: [5, 12, 8, 130, 44],
    output: 12,
    category: "Array",
  },
  {
    id: "array-findindex",
    name: "Array.prototype.findIndex()",
    description:
      "Returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.",
    usage:
      "const array1 = [5, 12, 8, 130, 44];\nconst isLargeNumber = (element) => element > 13;\nconsole.log(array1.findIndex(isLargeNumber));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    input: [5, 12, 8, 130, 44],
    output: 3,
    category: "Array",
  },
  {
    id: "array-findlast",
    name: "Array.prototype.findLast()",
    description:
      "Iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.",
    usage:
      "const array1 = [5, 12, 50, 130, 44];\nconst found = array1.findLast((element) => element > 45);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast",
    input: [5, 12, 50, 130, 44],
    output: 50,
    category: "Array",
  },
  {
    id: "array-findlastindex",
    name: "Array.prototype.findLastIndex()",
    description:
      "Iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.",
    usage:
      "const array1 = [5, 12, 50, 130, 44];\nconst isLargeNumber = (element) => element > 45;\nconsole.log(array1.findLastIndex(isLargeNumber));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex",
    input: [5, 12, 50, 130, 44],
    output: 2,
    category: "Array",
  },
  {
    id: "array-flat",
    name: "Array.prototype.flat()",
    description:
      "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
    usage: "const arr1 = [0, 1, 2, [3, 4]];\nconst result = arr1.flat();",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",
    input: [0, 1, 2, [3, 4]],
    output: [0, 1, 2, 3, 4],
    category: "Array",
  },
  {
    id: "array-flatmap",
    name: "Array.prototype.flatMap()",
    description:
      "Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.",
    usage:
      "const arr1 = [1, 2, 1];\nconst result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap",
    input: [1, 2, 1],
    output: [1, 2, 2, 1],
    category: "Array",
  },
  {
    id: "array-foreach",
    name: "Array.prototype.forEach()",
    description: "Executes a provided function once for each array element.",
    usage:
      'const array1 = ["a", "b", "c"];\narray1.forEach((element) => console.log(element));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    input: ["a", "b", "c"],
    output: "undefined (logs a, b, c)",
    category: "Array",
  },
  {
    id: "array-from",
    name: "Array.from()",
    description:
      "Creates a new, shallow-copied Array instance from an iterable or array-like object.",
    usage: 'console.log(Array.from("foo"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",
    input: "foo",
    output: ["f", "o", "o"],
    category: "Array",
  },
  {
    id: "array-includes",
    name: "Array.prototype.includes()",
    description:
      "Determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
    usage: "const array1 = [1, 2, 3];\nconsole.log(array1.includes(2));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
    input: [1, 2, 3],
    output: true,
    category: "Array",
  },
  {
    id: "array-indexof",
    name: "Array.prototype.indexOf()",
    description:
      "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
    usage:
      'const beasts = ["ant", "bison", "camel", "duck", "bison"];\nconsole.log(beasts.indexOf("bison"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    input: ["ant", "bison", "..."],
    output: 1,
    category: "Array",
  },
  {
    id: "array-isarray",
    name: "Array.isArray()",
    description: "Determines whether the passed value is an Array.",
    usage:
      "console.log(Array.isArray([1, 2, 3]));\nconsole.log(Array.isArray({foo: 123}));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
    input: [1, 2, 3],
    output: true,
    category: "Array",
  },
  {
    id: "array-join",
    name: "Array.prototype.join()",
    description:
      "Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
    usage:
      'const elements = ["Fire", "Air", "Water"];\nconsole.log(elements.join("-"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    input: ["Fire", "Air", "Water"],
    output: "Fire-Air-Water",
    category: "Array",
  },
  {
    id: "array-keys",
    name: "Array.prototype.keys()",
    description:
      "Returns a new Array Iterator object that contains the keys for each index in the array.",
    usage:
      'const array1 = ["a", "b", "c"];\nconst iterator = array1.keys();\nfor (const key of iterator) {\n  console.log(key);\n}',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys",
    input: ["a", "b", "c"],
    output: "0, 1, 2",
    category: "Array",
  },
  {
    id: "array-lastindexof",
    name: "Array.prototype.lastIndexOf()",
    description:
      "Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
    usage:
      'const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];\nconsole.log(animals.lastIndexOf("Dodo"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
    input: ["Dodo", "Tiger", "Penguin", "Dodo"],
    output: 3,
    category: "Array",
  },
  {
    id: "array-map",
    name: "Array.prototype.map()",
    description:
      "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
    usage:
      "const array1 = [1, 4, 9, 16];\nconst map1 = array1.map((x) => x * 2);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    input: [1, 4, 9, 16],
    output: [2, 8, 18, 32],
    category: "Array",
  },
  {
    id: "array-of",
    name: "Array.of()",
    description:
      "Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.",
    usage: "console.log(Array.of(7));\nconsole.log(Array.of(1, 2, 3));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of",
    input: "(1, 2, 3)",
    output: [1, 2, 3],
    category: "Array",
  },
  {
    id: "array-pop",
    name: "Array.prototype.pop()",
    description:
      "Removes the last element from an array and returns that element. This method changes the length of the array.",
    usage:
      'const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];\nconsole.log(plants.pop());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    input: ["...kale", "tomato"],
    output: "tomato",
    category: "Array",
  },
  {
    id: "array-push",
    name: "Array.prototype.push()",
    description:
      "Adds the specified elements to the end of an array and returns the new length of the array.",
    usage:
      'const animals = ["pigs", "goats", "sheep"];\nconst count = animals.push("cows");\nconsole.log(count);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    input: ["pigs", "goats", "sheep"],
    output: 4,
    category: "Array",
  },
  {
    id: "array-reduce",
    name: "Array.prototype.reduce()",
    description:
      'Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.',
    usage:
      "const array1 = [1, 2, 3, 4];\nconst initialValue = 0;\nconst sumWithInitial = array1.reduce(\n  (accumulator, currentValue) => accumulator + currentValue,\n  initialValue,\n);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
    input: [1, 2, 3, 4],
    output: 10,
    category: "Array",
  },
  {
    id: "array-reduceright",
    name: "Array.prototype.reduceRight()",
    description:
      "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
    usage:
      "const array1 = [[0, 1], [2, 3], [4, 5]];\nconst result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight",
    input: [
      [0, 1],
      [2, 3],
      [4, 5],
    ],
    output: [4, 5, 2, 3, 0, 1],
    category: "Array",
  },
  {
    id: "array-reverse",
    name: "Array.prototype.reverse()",
    description:
      "Reverses an array in place and returns the reference to the same array.",
    usage:
      'const array1 = ["one", "two", "three"];\nconsole.log(array1.reverse());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    input: ["one", "two", "three"],
    output: ["three", "two", "one"],
    category: "Array",
  },
  {
    id: "array-shift",
    name: "Array.prototype.shift()",
    description:
      "Removes the first element from an array and returns that removed element. This method changes the length of the array.",
    usage: "const array1 = [1, 2, 3];\nconst firstElement = array1.shift();",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    input: [1, 2, 3],
    output: 1,
    category: "Array",
  },
  {
    id: "array-slice",
    name: "Array.prototype.slice()",
    description:
      "Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).",
    usage:
      'const animals = ["ant", "bison", "camel", "duck", "elephant"];\nconsole.log(animals.slice(2));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    input: ["ant", "bison", "camel", "duck", "elephant"],
    output: ["camel", "duck", "elephant"],
    category: "Array",
  },
  {
    id: "array-some",
    name: "Array.prototype.some()",
    description:
      "Tests whether at least one element in the array passes the test implemented by the provided function.",
    usage:
      "const array = [1, 2, 3, 4, 5];\nconst even = (element) => element % 2 === 0;\nconsole.log(array.some(even));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    input: [1, 2, 3, 4, 5],
    output: true,
    category: "Array",
  },
  {
    id: "array-sort",
    name: "Array.prototype.sort()",
    description:
      "Sorts the elements of an array in place and returns the reference to the same array, now sorted.",
    usage:
      'const months = ["March", "Jan", "Feb", "Dec"];\nmonths.sort();\nconst array1 = [1, 30, 4, 21, 100000];\narray1.sort((a, b) => a - b);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    input: [1, 30, 4, 21, 100000],
    output: [1, 4, 21, 30, 100000],
    category: "Array",
  },
  {
    id: "array-splice",
    name: "Array.prototype.splice()",
    description:
      "Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
    usage:
      'const months = ["Jan", "March", "April", "June"];\nmonths.splice(1, 0, "Feb");',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    input: ["Jan", "March", "April", "June"],
    output: ["Jan", "Feb", "March", "April", "June"],
    category: "Array",
  },
  {
    id: "array-unshift",
    name: "Array.prototype.unshift()",
    description:
      "Adds the specified elements to the beginning of an array and returns the new length of the array.",
    usage: "const array1 = [1, 2, 3];\nconsole.log(array1.unshift(4, 5));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    input: [1, 2, 3],
    output: [4, 5, 1, 2, 3],
    category: "Array",
  },
  {
    id: "array-tosorted",
    name: "Array.prototype.toSorted()",
    description:
      "Returns a new array with the elements sorted, without mutating the original array.",
    usage:
      "const scores = [10, 3, 25, 7];\nconst sorted = scores.toSorted((a, b) => a - b);\nconsole.log(scores);\nconsole.log(sorted);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted",
    input: [10, 3, 25, 7],
    output: [3, 7, 10, 25],
    category: "Array",
  },
  {
    id: "array-toreversed",
    name: "Array.prototype.toReversed()",
    description:
      "Returns a new array with the elements in reverse order, without changing the original array.",
    usage:
      'const queue = ["first", "second", "third"];\nconst reversed = queue.toReversed();\nconsole.log(queue);\nconsole.log(reversed);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed",
    input: ["first", "second", "third"],
    output: ["third", "second", "first"],
    category: "Array",
  },
  {
    id: "array-tospliced",
    name: "Array.prototype.toSpliced()",
    description:
      "Returns a new array with elements removed or replaced, without mutating the original array.",
    usage:
      'const months = ["Jan", "March", "April", "June"];\nconst updated = months.toSpliced(1, 0, "Feb");\nconsole.log(months);\nconsole.log(updated);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced",
    input: ["Jan", "March", "April", "June"],
    output: ["Jan", "Feb", "March", "April", "June"],
    category: "Array",
  },
  {
    id: "array-with",
    name: "Array.prototype.with()",
    description:
      "Returns a new array with the element at the given index replaced, without mutating the original array.",
    usage:
      "const cart = [\"apple\", \"banana\", \"orange\"];\nconst updatedCart = cart.with(1, \"grape\");\nconsole.log(cart);\nconsole.log(updatedCart);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with",
    input: ["apple", "banana", "orange"],
    output: ["apple", "grape", "orange"],
    category: "Array",
  },

  // --- OBJECT METHODS ---
  {
    id: "object-assign",
    name: "Object.assign()",
    description:
      "Copies all enumerable own properties from one or more source objects to a target object.",
    usage:
      "const target = { a: 1, b: 2 };\nconst source = { b: 4, c: 5 };\nconst returnedTarget = Object.assign(target, source);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",
    input: { target: { a: 1 }, source: { b: 2 } },
    output: { a: 1, b: 2 },
    category: "Object",
  },
  {
    id: "object-create",
    name: "Object.create()",
    description:
      "Creates a new object, using an existing object as the prototype of the newly created object.",
    usage:
      'const person = { isHuman: false, printIntroduction: function() { console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`); } };\nconst me = Object.create(person);\nme.name = "Matthew";',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create",
    input: { isHuman: false },
    output: "Object with prototype person",
    category: "Object",
  },
  {
    id: "object-entries",
    name: "Object.entries()",
    description:
      "Returns an array of a given object's own enumerable string-keyed property key-value pairs.",
    usage:
      'const object1 = {\n  a: "somestring",\n  b: 42,\n};\nconst result = Object.entries(object1);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
    input: { a: "somestring", b: 42 },
    output: [
      ["a", "somestring"],
      ["b", 42],
    ],
    category: "Object",
  },
  {
    id: "object-freeze",
    name: "Object.freeze()",
    description:
      "Freezes an object. Freezing an object prevents extensions and makes existing properties non-writable.",
    usage:
      "const obj = { prop: 42 };\nObject.freeze(obj);\nobj.prop = 33; // Throws an error in strict mode",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze",
    input: { prop: 42 },
    output: "Read-only object",
    category: "Object",
  },
  {
    id: "object-fromentries",
    name: "Object.fromEntries()",
    description: "Transforms a list of key-value pairs into an object.",
    usage:
      'const entries = new Map([\n  ["foo", "bar"],\n  ["baz", 42],\n]);\nconst obj = Object.fromEntries(entries);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
    input: '[["foo", "bar"], ["baz", 42]]',
    output: { foo: "bar", baz: 42 },
    category: "Object",
  },
  {
    id: "object-getownpropertynames",
    name: "Object.getOwnPropertyNames()",
    description:
      "Returns an array of all properties (including non-enumerable properties) found directly in a given object.",
    usage:
      "const object1 = { a: 1, b: 2, c: 3 };\nconsole.log(Object.getOwnPropertyNames(object1));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames",
    input: { a: 1, b: 2, c: 3 },
    output: ["a", "b", "c"],
    category: "Object",
  },
  {
    id: "object-hasown",
    name: "Object.hasOwn()",
    description:
      "Returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.",
    usage:
      'const object1 = { prop: "exists" };\nconsole.log(Object.hasOwn(object1, "prop"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn",
    input: { prop: "exists" },
    output: true,
    category: "Object",
  },
  {
    id: "object-is",
    name: "Object.is()",
    description:
      "Determines whether two values are the same value. Same as === except for NaN and +0/-0.",
    usage:
      'console.log(Object.is("foo", "foo"));\nconsole.log(Object.is(NaN, NaN));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
    input: "NaN, NaN",
    output: true,
    category: "Object",
  },
  {
    id: "object-keys",
    name: "Object.keys()",
    description:
      "Returns an array of a given object's own enumerable string-keyed property names.",
    usage:
      'const object1 = {\n  a: "somestring",\n  b: 42,\n  c: false,\n};\nconst result = Object.keys(object1);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
    input: { a: "somestring", b: 42, c: false },
    output: ["a", "b", "c"],
    category: "Object",
  },
  {
    id: "object-seal",
    name: "Object.seal()",
    description:
      "Seals an object. Sealed objects cannot have new properties added, but existing properties can be modified.",
    usage:
      "const object1 = { property1: 42 };\nObject.seal(object1);\nobject1.property1 = 33; // Allowed\ndelete object1.property1; // Fails",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal",
    input: { property1: 42 },
    output: "Sealed object",
    category: "Object",
  },
  {
    id: "object-values",
    name: "Object.values()",
    description:
      "Returns an array of a given object's own enumerable string-keyed property values.",
    usage:
      'const object1 = {\n  a: "somestring",\n  b: 42,\n  c: false,\n};\nconst result = Object.values(object1);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
    input: { a: "somestring", b: 42, c: false },
    output: ["somestring", 42, false],
    category: "Object",
  },
  {
    id: "object-groupby",
    name: "Object.groupBy()",
    description:
      "Groups the elements of an iterable according to the string values returned by a callback function.",
    usage:
      "const numbers = [1, 2, 3, 4, 5, 6];\nconst grouped = Object.groupBy(numbers, (num) =>\n  num % 2 === 0 ? \"even\" : \"odd\",\n);\nconsole.log(grouped);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy",
    input: [1, 2, 3, 4, 5, 6],
    output: { odd: [1, 3, 5], even: [2, 4, 6] },
    category: "Object",
  },

  // --- MAP METHODS ---
  {
    id: "map-constructor",
    name: "Map()",
    description:
      "Creates a key-value collection that remembers insertion order and allows keys of any type.",
    usage:
      'const userRoles = new Map([\n  ["alice", "admin"],\n  ["bob", "editor"],\n]);\nconsole.log(userRoles.get("alice"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
    input: '[["alice", "admin"], ["bob", "editor"]]',
    output: 'Map(2) {"alice" => "admin", "bob" => "editor"}',
    category: "Map",
  },
  {
    id: "map-set",
    name: "Map.prototype.set()",
    description:
      "Adds or updates a key-value pair in a Map and returns the map itself.",
    usage:
      'const inventory = new Map();\ninventory.set("apple", 10);\ninventory.set("banana", 4);\nconsole.log(inventory);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set",
    input: 'new Map().set("apple", 10)',
    output: 'Map(1) {"apple" => 10}',
    category: "Map",
  },
  {
    id: "map-get",
    name: "Map.prototype.get()",
    description:
      "Returns the value associated with a key, or undefined if the key is not in the map.",
    usage:
      'const settings = new Map([["theme", "dark"]]);\nconsole.log(settings.get("theme"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get",
    input: 'new Map([["theme", "dark"]]).get("theme")',
    output: "dark",
    category: "Map",
  },
  {
    id: "map-has",
    name: "Map.prototype.has()",
    description:
      "Returns true if a Map contains the given key, otherwise false.",
    usage:
      'const cache = new Map([["users", []]]);\nconsole.log(cache.has("users"));\nconsole.log(cache.has("posts"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has",
    input: 'new Map([["users", []]]).has("users")',
    output: true,
    category: "Map",
  },
  {
    id: "map-delete",
    name: "Map.prototype.delete()",
    description:
      "Removes the specified key from a Map and returns whether the key existed.",
    usage:
      'const draft = new Map([["temp", 123]]);\nconsole.log(draft.delete("temp"));\nconsole.log(draft.has("temp"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete",
    input: 'new Map([["temp", 123]]).delete("temp")',
    output: true,
    category: "Map",
  },

  // --- SET METHODS ---
  {
    id: "set-constructor",
    name: "Set()",
    description:
      "Creates a collection of unique values, often used for deduping and fast membership checks.",
    usage:
      "const uniqueIds = new Set([1, 2, 2, 3, 3, 4]);\nconsole.log(uniqueIds);",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
    input: [1, 2, 2, 3, 3, 4],
    output: "Set(4) {1, 2, 3, 4}",
    category: "Set",
  },
  {
    id: "set-add",
    name: "Set.prototype.add()",
    description:
      "Adds a value to a Set if it is not already present and returns the set itself.",
    usage:
      'const tags = new Set(["js"]);\ntags.add("ts");\ntags.add("js");\nconsole.log(tags);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add",
    input: 'new Set(["js"]).add("ts")',
    output: 'Set(2) {"js", "ts"}',
    category: "Set",
  },
  {
    id: "set-has",
    name: "Set.prototype.has()",
    description:
      "Returns true if a Set contains the given value, otherwise false.",
    usage:
      "const selected = new Set([101, 205, 309]);\nconsole.log(selected.has(205));\nconsole.log(selected.has(500));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has",
    input: "new Set([101, 205, 309]).has(205)",
    output: true,
    category: "Set",
  },
  {
    id: "set-delete",
    name: "Set.prototype.delete()",
    description:
      "Removes a value from a Set and returns whether the value existed.",
    usage:
      'const activeIds = new Set([1, 2, 3]);\nconsole.log(activeIds.delete(2));\nconsole.log(activeIds);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete",
    input: "new Set([1, 2, 3]).delete(2)",
    output: true,
    category: "Set",
  },

  // --- STRING METHODS ---
  {
    id: "string-at",
    name: "String.prototype.at()",
    description:
      "Takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.",
    usage:
      'const sentence = "The quick brown fox jumps over the lazy dog.";\nconst index = 5;\nconsole.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at",
    input: "The quick...",
    output: "u (at index 5)",
    category: "String",
  },
  {
    id: "string-charat",
    name: "String.prototype.charAt()",
    description:
      "Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",
    usage:
      'const sentence = "The quick brown fox jumps over the lazy dog.";\nconst index = 4;\nconsole.log(`The character at index ${index} is ${sentence.charAt(index)}`);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
    input: "The quick...",
    output: "q",
    category: "String",
  },
  {
    id: "string-concat",
    name: "String.prototype.concat()",
    description:
      "Concatenates the string arguments to the calling string and returns a new string.",
    usage:
      'const str1 = "Hello";\nconst str2 = "World";\nconsole.log(str1.concat(" ", str2));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
    input: "Hello, World",
    output: "Hello World",
    category: "String",
  },
  {
    id: "string-endswith",
    name: "String.prototype.endsWith()",
    description:
      "Determines whether a string ends with the characters of a specified string.",
    usage:
      'const str1 = "Cats are the best!";\nconsole.log(str1.endsWith("best!"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
    input: "Cats are the best!",
    output: true,
    category: "String",
  },
  {
    id: "string-includes",
    name: "String.prototype.includes()",
    description:
      "Performs a case-sensitive search to determine whether one string may be found within another string.",
    usage:
      'const sentence = "The quick brown fox jumps over the lazy dog.";\nconst word = "fox";\nconsole.log(sentence.includes(word));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
    input: "The quick...",
    output: true,
    category: "String",
  },
  {
    id: "string-indexof",
    name: "String.prototype.indexOf()",
    description:
      "Returns the index of the first occurrence of the specified substring.",
    usage:
      'const paragraph = "I think Ruth\'s dog is cuter than your dog!";\nconst searchTerm = "dog";\nconst indexOfFirst = paragraph.indexOf(searchTerm);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
    input: "I think Ruth's dog...",
    output: 15,
    category: "String",
  },
  {
    id: "string-lastindexof",
    name: "String.prototype.lastIndexOf()",
    description:
      "Returns the index of the last occurrence of the specified substring.",
    usage:
      'const paragraph = "I think Ruth\'s dog is cuter than your dog!";\nconst searchTerm = "dog";\nconsole.log(paragraph.lastIndexOf(searchTerm));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf",
    input: "I think Ruth's dog is cuter than your dog!",
    output: 38,
    category: "String",
  },
  {
    id: "string-padend",
    name: "String.prototype.padEnd()",
    description:
      "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end.",
    usage:
      'const str1 = "Breaded Mushrooms";\nconsole.log(str1.padEnd(25, "."));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd",
    input: "Breaded Mushrooms",
    output: "Breaded Mushrooms........",
    category: "String",
  },
  {
    id: "string-padstart",
    name: "String.prototype.padStart()",
    description:
      "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start.",
    usage: 'const str1 = "5";\nconsole.log(str1.padStart(2, "0"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart",
    input: "5",
    output: "05",
    category: "String",
  },
  {
    id: "string-repeat",
    name: "String.prototype.repeat()",
    description:
      "Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
    usage:
      'const chorus = "Because I\'m happy. ";\nconsole.log(chorus.repeat(2));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
    input: "Because I'm happy. ",
    output: "Because I'm happy. Because I'm happy. ",
    category: "String",
  },
  {
    id: "string-replace",
    name: "String.prototype.replace()",
    description:
      "Returns a new string with one, some, or all matches of a pattern replaced by a replacement.",
    usage:
      'const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";\nconsole.log(p.replace("dog", "monkey"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    input: "The quick brown fox...",
    output: "...the lazy monkey...",
    category: "String",
  },
  {
    id: "string-replaceall",
    name: "String.prototype.replaceAll()",
    description:
      "Returns a new string with all matches of a pattern replaced by a replacement.",
    usage:
      'const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";\nconsole.log(p.replaceAll("dog", "monkey"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll",
    input: "The quick brown fox...",
    output: "...the lazy monkey...If the monkey reacted...",
    category: "String",
  },
  {
    id: "string-slice",
    name: "String.prototype.slice()",
    description:
      "Extracts a section of a string and returns it as a new string, without modifying the original string.",
    usage:
      'const str = "The quick brown fox jumps over the lazy dog.";\nconsole.log(str.slice(31));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
    input: "The quick brown fox...",
    output: "the lazy dog.",
    category: "String",
  },
  {
    id: "string-split",
    name: "String.prototype.split()",
    description:
      "Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.",
    usage:
      'const str = "The quick brown fox jumps over the lazy dog.";\nconst words = str.split(" ");',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
    input: "The quick brown fox...",
    output: [
      "The",
      "quick",
      "brown",
      "fox",
      "jumps",
      "over",
      "the",
      "lazy",
      "dog.",
    ],
    category: "String",
  },
  {
    id: "string-startswith",
    name: "String.prototype.startsWith()",
    description:
      "Determines whether a string begins with the characters of a specified string.",
    usage:
      'const str1 = "Saturday night plans";\nconsole.log(str1.startsWith("Sat"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith",
    input: "Saturday night plans",
    output: true,
    category: "String",
  },
  {
    id: "string-substring",
    name: "String.prototype.substring()",
    description:
      "Returns the part of the string between the start and end indexes, or to the end of the string.",
    usage: 'const str = "Mozilla";\nconsole.log(str.substring(1, 3));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",
    input: "Mozilla",
    output: "oz",
    category: "String",
  },
  {
    id: "string-tolowercase",
    name: "String.prototype.toLowerCase()",
    description: "Returns the calling string value converted to lower case.",
    usage:
      'const sentence = "The quick brown fox jumps over the lazy dog.";\nconsole.log(sentence.toLowerCase());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
    input: "The quick brown fox...",
    output: "the quick brown fox...",
    category: "String",
  },
  {
    id: "string-touppercase",
    name: "String.prototype.toUpperCase()",
    description: "Returns the calling string value converted to upper case.",
    usage:
      'const sentence = "The quick brown fox jumps over the lazy dog.";\nconsole.log(sentence.toUpperCase());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",
    input: "The quick brown fox...",
    output: "THE QUICK BROWN FOX...",
    category: "String",
  },
  {
    id: "string-trim",
    name: "String.prototype.trim()",
    description:
      "Removes whitespace from both ends of a string and returns a new string.",
    usage:
      'const greeting = "   Hello world!   ";\nconsole.log(greeting.trim());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim",
    input: "   Hello world!   ",
    output: "Hello world!",
    category: "String",
  },
  {
    id: "string-match",
    name: "String.prototype.match()",
    description:
      "Retrieves the result of matching a string against a regular expression.",
    usage:
      'const sentence = "Order #482 ships on 2026-03-26.";\nconst result = sentence.match(/\\d+/);\nconsole.log(result?.[0]);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
    input: '"Order #482 ships".match(/\\d+/)',
    output: '["482"]',
    category: "String",
  },
  {
    id: "string-matchall",
    name: "String.prototype.matchAll()",
    description:
      "Returns an iterator of all results matching a regular expression, including capture groups.",
    usage:
      'const sentence = "x=10 y=20";\nconst matches = [...sentence.matchAll(/(\\w)=(\\d+)/g)];\nconsole.log(matches.map((match) => match[2]));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll",
    input: '"x=10 y=20".matchAll(/(\\w)=(\\d+)/g)',
    output: '["10", "20"]',
    category: "String",
  },
  {
    id: "string-trimstart",
    name: "String.prototype.trimStart()",
    description:
      "Removes whitespace from the beginning of a string and returns a new string.",
    usage:
      'const line = "   padded left";\nconsole.log(line.trimStart());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart",
    input: "   padded left",
    output: "padded left",
    category: "String",
  },
  {
    id: "string-trimend",
    name: "String.prototype.trimEnd()",
    description:
      "Removes whitespace from the end of a string and returns a new string.",
    usage:
      'const line = "padded right   ";\nconsole.log(line.trimEnd());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd",
    input: "padded right   ",
    output: "padded right",
    category: "String",
  },
  {
    id: "string-localecompare",
    name: "String.prototype.localeCompare()",
    description:
      "Compares two strings in the current locale and returns a number useful for sorting.",
    usage:
      'const names = ["Zoe", "Ana", "Émile"];\nnames.sort((a, b) => a.localeCompare(b));\nconsole.log(names);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare",
    input: '"b".localeCompare("a")',
    output: 1,
    category: "String",
  },

  // --- MATH METHODS ---
  {
    id: "math-abs",
    name: "Math.abs()",
    description: "Returns the absolute value of a number.",
    usage: "console.log(Math.abs(-1));\nconsole.log(Math.abs(-42));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs",
    input: -42,
    output: 42,
    category: "Math",
  },
  {
    id: "math-ceil",
    name: "Math.ceil()",
    description: "Always rounds a number up to the next largest integer.",
    usage: "console.log(Math.ceil(0.95));\nconsole.log(Math.ceil(7.004));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil",
    input: 0.95,
    output: 1,
    category: "Math",
  },
  {
    id: "math-floor",
    name: "Math.floor()",
    description:
      "Returns the largest integer less than or equal to a given number.",
    usage: "console.log(Math.floor(5.95));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor",
    input: 5.95,
    output: 5,
    category: "Math",
  },
  {
    id: "math-max",
    name: "Math.max()",
    description:
      "Returns the largest of the zero or more numbers given as input parameters.",
    usage:
      "console.log(Math.max(1, 3, 2));\nconsole.log(Math.max(-1, -3, -2));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
    input: "1, 3, 2",
    output: 3,
    category: "Math",
  },
  {
    id: "math-min",
    name: "Math.min()",
    description:
      "Returns the smallest of the zero or more numbers given as input parameters.",
    usage:
      "console.log(Math.min(2, 3, 1));\nconsole.log(Math.min(-2, -3, -1));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min",
    input: "2, 3, 1",
    output: 1,
    category: "Math",
  },
  {
    id: "math-pow",
    name: "Math.pow()",
    description:
      "Returns the base to the exponent power, that is, base^exponent.",
    usage: "console.log(Math.pow(7, 3));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
    input: "7, 3",
    output: 343,
    category: "Math",
  },
  {
    id: "math-random",
    name: "Math.random()",
    description:
      "Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).",
    usage: "console.log(Math.random());",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random",
    input: "()",
    output: "0.123...",
    category: "Math",
  },
  {
    id: "math-round",
    name: "Math.round()",
    description:
      "Returns the value of a number rounded to the nearest integer.",
    usage:
      "console.log(Math.round(0.9));\nconsole.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round",
    input: "0.9",
    output: 1,
    category: "Math",
  },

  // --- NUMBER METHODS ---
  {
    id: "number-isnan",
    name: "Number.isNaN()",
    description:
      "Returns true only if the provided value is the number NaN, without coercing other types.",
    usage:
      'console.log(Number.isNaN(NaN));\nconsole.log(Number.isNaN("NaN"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN",
    input: "Number.isNaN(NaN)",
    output: true,
    category: "Number",
  },
  {
    id: "number-isfinite",
    name: "Number.isFinite()",
    description:
      "Returns true if the value is a finite number, and false for Infinity, -Infinity, and non-numbers.",
    usage:
      'console.log(Number.isFinite(10));\nconsole.log(Number.isFinite(Infinity));\nconsole.log(Number.isFinite("10"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite",
    input: "Number.isFinite(10 / 3)",
    output: true,
    category: "Number",
  },
  {
    id: "number-isinteger",
    name: "Number.isInteger()",
    description:
      "Determines whether the passed value is an integer.",
    usage:
      "console.log(Number.isInteger(42));\nconsole.log(Number.isInteger(3.14));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger",
    input: "Number.isInteger(42)",
    output: true,
    category: "Number",
  },
  {
    id: "number-parseint",
    name: "Number.parseInt()",
    description:
      "Parses a string argument and returns an integer of the specified radix.",
    usage:
      'console.log(Number.parseInt("42px", 10));\nconsole.log(Number.parseInt("101", 2));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt",
    input: '"42px"',
    output: 42,
    category: "Number",
  },
  {
    id: "number-parsefloat",
    name: "Number.parseFloat()",
    description:
      "Parses a string argument and returns a floating-point number.",
    usage:
      'console.log(Number.parseFloat("9.81m/s"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat",
    input: '"9.81m/s"',
    output: 9.81,
    category: "Number",
  },
  {
    id: "number-tofixed",
    name: "Number.prototype.toFixed()",
    description:
      "Formats a number using fixed-point notation and returns the result as a string.",
    usage:
      "const price = 19.9;\nconsole.log(price.toFixed(2));",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
    input: "19.9",
    output: "19.90",
    category: "Number",
  },

  // --- PROMISE METHODS ---
  {
    id: "promise-all",
    name: "Promise.all()",
    description:
      "Takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.",
    usage:
      'const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "foo");\n});\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
    input: "[P(3), 42, P('foo')]",
    output: "[3, 42, 'foo']",
    category: "Promise",
  },
  {
    id: "promise-allsettled",
    name: "Promise.allSettled()",
    description:
      "Returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.",
    usage:
      'const promise1 = Promise.resolve(3);\nconst promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));\nPromise.allSettled([promise1, promise2]).then((results) => results.forEach((result) => console.log(result.status)));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled",
    input: "[P(3), P(reject)]",
    output: "[{status: 'fulfilled'}, {status: 'rejected'}]",
    category: "Promise",
  },
  {
    id: "promise-any",
    name: "Promise.any()",
    description:
      "Takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises in the iterable fulfills.",
    usage:
      'const pErr = new Promise((resolve, reject) => {\n  reject("Always fails");\n});\nconst pSlow = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, "Done eventually");\n});\nconst pFast = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "Done quick");\n});\nPromise.any([pErr, pSlow, pFast]).then((value) => {\n  console.log(value);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any",
    input: "[P(err), P(slow), P(fast)]",
    output: "Done quick",
    category: "Promise",
  },
  {
    id: "promise-race",
    name: "Promise.race()",
    description:
      "Returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects.",
    usage:
      'const promise1 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, "one");\n});\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "two");\n});\nPromise.race([promise1, promise2]).then((value) => {\n  console.log(value);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
    input: "[P(slow), P(fast)]",
    output: "two",
    category: "Promise",
  },
  {
    id: "promise-resolve",
    name: "Promise.resolve()",
    description:
      "Returns a Promise object that is resolved with the given value.",
    usage:
      'Promise.resolve("ready").then((value) => {\n  console.log(value);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve",
    input: 'Promise.resolve("ready")',
    output: 'Promise {"ready"}',
    category: "Promise",
  },
  {
    id: "promise-reject",
    name: "Promise.reject()",
    description:
      "Returns a Promise object that is rejected with the given reason.",
    usage:
      'Promise.reject(new Error("Missing token")).catch((error) => {\n  console.error(error.message);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject",
    input: 'Promise.reject("Missing token")',
    output: 'Promise rejected with "Missing token"',
    category: "Promise",
  },
  {
    id: "promise-then",
    name: "Promise.prototype.then()",
    description:
      "Schedules callbacks to run when a promise is fulfilled or rejected and returns a new promise.",
    usage:
      'fetchUser().then((user) => {\n  return user.name.toUpperCase();\n}).then((name) => {\n  console.log(name);\n});',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",
    input: 'Promise.resolve(5).then((value) => value * 2)',
    output: 'Promise {10}',
    category: "Promise",
  },
  {
    id: "promise-catch",
    name: "Promise.prototype.catch()",
    description:
      "Schedules a callback to run when a promise is rejected.",
    usage:
      'loadConfig()\n  .catch((error) => {\n    console.error("Failed to load config:", error.message);\n  });',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",
    input: 'Promise.reject("boom").catch((error) => error)',
    output: 'Promise {"boom"}',
    category: "Promise",
  },
  {
    id: "promise-finally",
    name: "Promise.prototype.finally()",
    description:
      "Schedules a callback to run when a promise settles, regardless of whether it fulfilled or rejected.",
    usage:
      'saveDraft()\n  .finally(() => {\n    setIsSaving(false);\n  });',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally",
    input: 'Promise.resolve("done").finally(() => "cleanup")',
    output: 'Promise {"done"}',
    category: "Promise",
  },

  // --- JSON METHODS ---
  {
    id: "json-parse",
    name: "JSON.parse()",
    description:
      "Parses a JSON string and constructs the JavaScript value or object described by it.",
    usage:
      'const raw = \'{"name":"Ada","active":true}\';\nconst user = JSON.parse(raw);\nconsole.log(user.name);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
    input: '{"name":"Ada","active":true}',
    output: { name: "Ada", active: true },
    category: "JSON",
  },
  {
    id: "json-stringify",
    name: "JSON.stringify()",
    description:
      "Converts a JavaScript value or object to a JSON string.",
    usage:
      'const payload = { name: "Ada", active: true };\nconsole.log(JSON.stringify(payload));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",
    input: { name: "Ada", active: true },
    output: '{"name":"Ada","active":true}',
    category: "JSON",
  },
  {
    id: "date-now",
    name: "Date.now()",
    description:
      "Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.",
    usage:
      'const start = Date.now();\nconsole.log("starting timer...");\nsetTimeout(() => {\n  const millis = Date.now() - start;\n  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);\n}, 2000);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now",
    input: "Date.now()",
    output: 1737600000000,
    category: "Date",
  },
  {
    id: "date-parse",
    name: "Date.parse()",
    description:
      "Parses a string representation of a date, and returns the number of milliseconds since 1970-01-01.",
    usage:
      'const unixTimeZero = Date.parse("01 Jan 1970 00:00:00 GMT");\nconst javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");\nconsole.log(unixTimeZero);\nconsole.log(javaScriptRelease);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse",
    input: '"04 Dec 1995 00:12:00 GMT"',
    output: 818035920000,
    category: "Date",
  },
  {
    id: "date-utc",
    name: "Date.UTC()",
    description:
      "Accepts parameters similar to the Date constructor, but treats them as UTC. Returns the number of milliseconds since 1970-01-01.",
    usage:
      "const utcDate = new Date(Date.UTC(96, 11, 1, 0, 0, 0));\nconsole.log(utcDate.toUTCString());",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC",
    input: "Date.UTC(2023, 11, 1)",
    output: 1701388800000,
    category: "Date",
  },
  {
    id: "date-getdate",
    name: "getDate()",
    description:
      "Returns the day of the month for the specified date according to local time.",
    usage:
      'const birthday = new Date("August 19, 1975 23:15:30");\nconst date1 = birthday.getDate();\nconsole.log(date1);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate",
    input: 'new Date("August 19, 1975").getDate()',
    output: 19,
    category: "Date",
  },
  {
    id: "date-getday",
    name: "getDay()",
    description:
      "Returns the day of the week for the specified date according to local time (0-6).",
    usage:
      'const birthday = new Date("August 19, 1975 23:15:30");\nconst day1 = birthday.getDay();\n// Sunday - Saturday : 0 - 6\nconsole.log(day1);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay",
    input: 'new Date("August 19, 1975").getDay()',
    output: 2,
    category: "Date",
  },
  {
    id: "date-getfullyear",
    name: "getFullYear()",
    description:
      "Returns the year of the specified date according to local time.",
    usage:
      'const moonLanding = new Date("July 20, 69 00:20:18");\nconsole.log(moonLanding.getFullYear());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear",
    input: 'new Date("July 20, 1969").getFullYear()',
    output: 1969,
    category: "Date",
  },
  {
    id: "date-gethours",
    name: "getHours()",
    description:
      "Returns the hour for the specified date, according to local time.",
    usage:
      'const birthday = new Date("March 13, 08 04:20");\nconsole.log(birthday.getHours());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours",
    input: 'new Date("March 13, 2008 04:20").getHours()',
    output: 4,
    category: "Date",
  },
  {
    id: "date-toisostring",
    name: "toISOString()",
    description:
      "Returns a string in simplified extended ISO format (ISO 8601).",
    usage:
      'const event = new Date("05 October 2011 14:48 UTC");\nconsole.log(event.toISOString());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString",
    input: 'new Date("05 October 2011 14:48 UTC")',
    output: "2011-10-05T14:48:00.000Z",
    category: "Date",
  },
  {
    id: "date-tojson",
    name: "toJSON()",
    description: "Returns a string representation of the Date object.",
    usage:
      'const event = new Date("August 19, 1975 23:15:30");\nconst jsonDate = event.toJSON();\nconsole.log(jsonDate);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON",
    input: 'new Date("1975-08-19T23:15:30")',
    output: "1975-08-19T23:15:30.000Z",
    category: "Date",
  },
  {
    id: "date-tolocaledatestring",
    name: "toLocaleDateString()",
    description:
      "Returns a string with a locality sensitive representation of the date portion of the date.",
    usage:
      'const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));\nconst options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };\nconsole.log(event.toLocaleDateString("de-DE", options));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString",
    input: 'new Date("12/20/2012").toLocaleDateString("en-US")',
    output: "12/20/2012",
    category: "Date",
  },
  {
    id: "date-tolocalestring",
    name: "toLocaleString()",
    description:
      "Returns a string with a locality sensitive representation of this date.",
    usage:
      'const event = new Date("19 Aug 1975 23:15:30 UTC");\nconsole.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString",
    input: 'new Date("19 Aug 1975 UTC").toLocaleString("en-US")',
    output: "8/19/1975, 7:00:00 PM",
    category: "Date",
  },
  {
    id: "date-tostring",
    name: "toString()",
    description: "Returns a string representing the specified Date object.",
    usage:
      'const event = new Date("August 19, 1975 23:15:30");\nconsole.log(event.toString());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString",
    input: 'new Date("August 19, 1975").toString()',
    output: "Tue Aug 19 1975 23:15:30 GMT...",
    category: "Date",
  },
  {
    id: "date-toutcstring",
    name: "toUTCString()",
    description:
      "Returns a string representing the date using the UTC time zone.",
    usage:
      'const event = new Date("14 Jun 2017 00:00:00 PDT");\nconsole.log(event.toUTCString());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString",
    input: 'new Date("14 Jun 2017 PDT")',
    output: "Wed, 14 Jun 2017 07:00:00 GMT",
    category: "Date",
  },
  {
    id: "date-valueof",
    name: "valueOf()",
    description: "Returns the primitive value of a Date object.",
    usage:
      'const date1 = new Date("August 19, 1975 23:15:30");\nconsole.log(date1.valueOf());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf",
    input: 'new Date("August 19, 1975").valueOf()',
    output: 177722130000,
    category: "Date",
  },
  {
    id: "date-gettime",
    name: "getTime()",
    description:
      "Returns the number of milliseconds for the specified date since the Unix epoch.",
    usage:
      'const createdAt = new Date("2026-03-26T09:30:00Z");\nconsole.log(createdAt.getTime());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime",
    input: 'new Date("2026-03-26T09:30:00Z").getTime()',
    output: 1774517400000,
    category: "Date",
  },

  // --- FUNCTION METHODS ---
  {
    id: "function-call",
    name: "Function.prototype.call()",
    description:
      "Calls a function with a given this value and arguments provided one by one.",
    usage:
      'function greet(greeting) {\n  return `${greeting}, ${this.name}`;\n}\nconst user = { name: "Ada" };\nconsole.log(greet.call(user, "Hello"));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call",
    input: 'greet.call({ name: "Ada" }, "Hello")',
    output: "Hello, Ada",
    category: "Function",
  },
  {
    id: "function-apply",
    name: "Function.prototype.apply()",
    description:
      "Calls a function with a given this value and arguments provided as an array-like object.",
    usage:
      'function sum(a, b, c) {\n  return a + b + c;\n}\nconsole.log(sum.apply(null, [1, 2, 3]));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply",
    input: "sum.apply(null, [1, 2, 3])",
    output: 6,
    category: "Function",
  },
  {
    id: "function-bind",
    name: "Function.prototype.bind()",
    description:
      "Creates a new function with a fixed this value and, optionally, pre-filled arguments.",
    usage:
      'const counter = {\n  value: 2,\n  multiply(factor) {\n    return this.value * factor;\n  },\n};\nconst double = counter.multiply.bind(counter, 2);\nconsole.log(double());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind",
    input: "counter.multiply.bind(counter, 2)",
    output: "Function that returns 4",
    category: "Function",
  },
  {
    id: "regexp-exec",
    name: "RegExp.exec()",
    description:
      "Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.",
    usage:
      'const regex1 = RegExp("foo*", "g");\nconst str1 = "table football, foosball";\nlet array1;\nwhile ((array1 = regex1.exec(str1)) !== null) {\n  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);\n}',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",
    input: '/foo*/g.exec("table football")',
    output: '["foo", index: 6, input: "table football"]',
    category: "RegExp",
  },
  {
    id: "regexp-test",
    name: "RegExp.test()",
    description: "Tests for a match in a string. Returns true or false.",
    usage:
      'const str = "table football";\nconst regex = new RegExp("foo*");\nconst globalRegex = new RegExp("foo*", "g");\nconsole.log(regex.test(str));',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",
    input: '/foo*/.test("table football")',
    output: true,
    category: "RegExp",
  },
  {
    id: "regexp-tostring",
    name: "RegExp.toString()",
    description: "Returns a string representing the regular expression.",
    usage:
      'const regex1 = new RegExp("a+b+c");\nconsole.log(regex1.toString());',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString",
    input: 'new RegExp("a+b+c").toString()',
    output: "/a+b+c/",
    category: "RegExp",
  },
  // Operators
  {
    id: "op-increment",
    name: "Increment (++)",
    description: "Increments (adds one to) its operand and returns a value.",
    usage: 'let x = 3;\nconst y = x++;\n// x is now 4, y is 3\n\nlet a = 3;\nconst b = ++a;\n// a is now 4, b is 4',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment",
    input: "let x = 3; x++",
    output: 3,
    category: "Operator",
  },
  {
    id: "op-decrement",
    name: "Decrement (--)",
    description: "Decrements (subtracts one from) its operand and returns a value.",
    usage: 'let x = 3;\nconst y = x--;\n// x is now 2, y is 3\n\nlet a = 3;\nconst b = --a;\n// a is now 2, b is 2',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement",
    input: "let x = 3; --x",
    output: 2,
    category: "Operator",
  },
  {
    id: "op-logical-and",
    name: "Logical AND (&&)",
    description: "Returns the first falsy operand, or the last operand if all are truthy.",
    usage: 'const a = 3;\nconst b = -2;\nconsole.log(a > 0 && b > 0);\n// Expected output: false',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
    input: "true && 1 && 'hello'",
    output: "'hello'",
    category: "Operator",
  },
  {
    id: "op-logical-or",
    name: "Logical OR (||)",
    description: "Returns the first truthy operand, or the last operand if all are falsy.",
    usage: 'const a = 3;\nconst b = -2;\nconsole.log(a > 0 || b > 0);\n// Expected output: true',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR",
    input: "false || 0 || 'fallback'",
    output: "'fallback'",
    category: "Operator",
  },
  {
    id: "op-nullish",
    name: "Nullish coalescing (??)",
    description: "Returns the right-hand side operand when the left-hand side operand is null or undefined.",
    usage: 'const foo = null ?? "default string";\nconsole.log(foo);\n// Expected output: "default string"\n\nconst baz = 0 ?? 42;\nconsole.log(baz);\n// Expected output: 0',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing",
    input: "null ?? 'default'",
    output: "'default'",
    category: "Operator",
  },
  {
    id: "op-ternary",
    name: "Conditional (?:)",
    description: "The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.",
    usage: 'const age = 26;\nconst beverage = age >= 21 ? "Beer" : "Juice";\nconsole.log(beverage);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator",
    input: "true ? 'Truth' : 'Lies'",
    output: "'Truth'",
    category: "Operator",
  },
  {
    id: "op-typeof",
    name: "typeof",
    description: "Returns a string indicating the type of the unevaluated operand.",
    usage: 'console.log(typeof 42);\n// Expected output: "number"\nconsole.log(typeof "blubber");\n// Expected output: "string"',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
    input: "typeof {a: 1}",
    output: "'object'",
    category: "Operator",
  },
  {
    id: "op-instanceof",
    name: "instanceof",
    description: "Tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.",
    usage: 'function Car(make, model, year) {\n  this.make = make;\n  this.model = model;\n  this.year = year;\n}\nconst auto = new Car("Honda", "Accord", 1998);\nconsole.log(auto instanceof Car);\n// Expected output: true',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",
    input: "[] instanceof Array",
    output: true,
    category: "Operator",
  },
  {
    id: "op-spread",
    name: "Spread syntax (...)",
    description: "Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected.",
    usage: 'function sum(x, y, z) {\n  return x + y + z;\n}\nconst numbers = [1, 2, 3];\nconsole.log(sum(...numbers));\n// Expected output: 6',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax",
    input: "[...[1, 2], ...[3, 4]]",
    output: "[1, 2, 3, 4]",
    category: "Operator",
  },
  {
    id: "op-remainder",
    name: "Remainder (%)",
    description: "Returns the remainder left over when one operand is divided by a second operand.",
    usage: 'console.log(13 % 5);\n// Expected output: 3\nconsole.log(-13 % 5);\n// Expected output: -3',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
    input: "12 % 5",
    output: 2,
    category: "Operator",
  },
  {
    id: "op-exponentiation",
    name: "Exponentiation (**)",
    description: "Returns the result of raising the first operand to the power of the second operand.",
    usage: 'console.log(3 ** 4);\n// Expected output: 81',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation",
    input: "2 ** 3",
    output: 8,
    category: "Operator",
  },
  {
    id: "op-strict-equality",
    name: "Strict equality (===)",
    description: "Checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.",
    usage: 'console.log(1 === 1);\n// Expected output: true\nconsole.log("1" === 1);\n// Expected output: false',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
    input: "'1' === 1",
    output: false,
    category: "Operator",
  },
  {
    id: "op-equality",
    name: "Equality (==)",
    description: "Checks whether its two operands are equal, returning a Boolean result. Attempting to convert and compare operands that are of different types.",
    usage: 'console.log(1 == 1);\n// Expected output: true\nconsole.log("1" == 1);\n// Expected output: true',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality",
    input: "'1' == 1",
    output: true,
    category: "Operator",
  },
  {
    id: "op-inequality",
    name: "Inequality (!=)",
    description: "Checks whether its two operands are not equal, returning a Boolean result. Attempts to convert and compare operands that are of different types.",
    usage: 'console.log(1 != 2);\n// Expected output: true\nconsole.log(1 != "1");\n// Expected output: false',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality",
    input: "1 != '1'",
    output: false,
    category: "Operator",
  },
  {
    id: "op-strict-inequality",
    name: "Strict inequality (!==)",
    description: "Checks whether its two operands are not equal, returning a Boolean result. Always considers operands of different types to be different.",
    usage: 'console.log(1 !== 2);\n// Expected output: true\nconsole.log(1 !== "1");\n// Expected output: true',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality",
    input: "1 !== '1'",
    output: true,
    category: "Operator",
  },
  {
    id: "op-bitwise-and",
    name: "Bitwise AND (&)",
    description: "Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.",
    usage: 'const a = 5;        // 00000000000000000000000000000101\nconst b = 3;        // 00000000000000000000000000000011\nconsole.log(a & b); // 00000000000000000000000000000001',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND",
    input: "5 & 3",
    output: 1,
    category: "Operator",
  },
  {
    id: "op-double-not",
    name: "Double NOT (!!)",
    description: "Converts a truthy or falsy value to true or false. It is effectively the same as Boolean(), but shorter.",
    usage: 'const a = "Hello";\nconsole.log(!!a);\n// Expected output: true\nconst b = 0;\nconsole.log(!!b);\n// Expected output: false',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!",
    input: "!!'non-empty string'",
    output: true,
    category: "Operator",
  },
  {
    id: "op-bitwise-not",
    name: "Bitwise NOT (~)",
    description: "Inverts the bits of its operand. effectively -(x + 1).",
    usage: 'const a = 5;     // 00000000000000000000000000000101\nconst b = -3;    // 11111111111111111111111111111101\nconsole.log(~a); // 11111111111111111111111111111010\n// Expected output: -6',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
    input: "~5",
    output: -6,
    category: "Operator",
  },
  {
    id: "op-bitwise-xor",
    name: "Bitwise XOR (^)",
    description: "Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.",
    usage: 'const a = 5;        // 00000000000000000000000000000101\nconst b = 3;        // 00000000000000000000000000000011\nconsole.log(a ^ b); // 00000000000000000000000000000110',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
    input: "5 ^ 3",
    output: 6,
    category: "Operator",
  },
  {
    id: "op-optional-chaining",
    name: "Optional chaining (?.)",
    description: "Accesses deeply nested object properties without worrying if the property exists or is null. If it's undefined or null, it returns undefined instead of throwing an error.",
    usage: 'const adventurer = {\n  name: "Alice",\n  cat: {\n    name: "Dinah"\n  }\n};\nconsole.log(adventurer.dog?.name);\n// Expected output: undefined',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
    input: "({}).missing?.prop",
    output: undefined,
    category: "Operator",
  },
  {
    id: "op-void",
    name: "void operator",
    description: "Evaluates the given expression and then returns undefined.",
    usage: 'void function test() {\n  console.log("boo!");\n}();\n// Expected output: undefined',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void",
    input: "void 0",
    output: undefined,
    category: "Operator",
  },
  {
    id: "op-delete",
    name: "delete operator",
    description: "Removes a property from an object; if no more references to the same property are held, it is eventually released automatically.",
    usage: 'const Employee = {\n  firstname: "John",\n  lastname: "Doe"\n};\nconsole.log(Employee.firstname);\ndelete Employee.firstname;\nconsole.log(Employee.firstname);',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete",
    input: 'delete {a:1}.a',
    output: true,
    category: "Operator",
  },
  {
    id: "op-in",
    name: "in operator",
    description: "Returns true if the specified property is in the specified object or its prototype chain.",
    usage: 'const car = { make: "Honda", model: "Accord", year: 1998 };\nconsole.log("make" in car);\n// Expected output: true\nconsole.log("brand" in car);\n// Expected output: false',
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in",
    input: "'length' in []",
    output: true,
    category: "Operator",
  }
];
