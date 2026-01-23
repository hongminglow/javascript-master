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
    | "String"
    | "Math"
    | "Promise"
    | "Number"
    | "Date"
    | "RegExp"
    | "Function";
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
];
