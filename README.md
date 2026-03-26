# JS Master - The Ultimate JavaScript API Reference

Welcome to **JS Master**, the most comprehensive interactive reference application for JavaScript developers. This project aims to showcase **EVERY SINGLE** JavaScript MDN API with clear descriptions, real-world usage examples, and interactive input/output visualizations.

## 🚀 Features

- **Massive API Coverage**: Currently indexed 150+ practical APIs across Array, Object, Map, Set, String, Math, Number, Promise, JSON, Date, Function, and RegExp categories.
- **Smart Fuzzy Search**: Find what you need even if you don't know the exact name. Try searching for "find item", "loop", or "merge".
- **Dark Mode**: Fully styled night theme for late-night coding sessions.
- **Interactive Cards**: Visual input/output diffs for every single API.
- **Modern Tech Stack**: Built with React 19, TypeScript, **Tailwind CSS v4**, and Vite.

## 📚 API Showcase & Documentation

Below is a categorized snapshot of the APIs currently covered in this application.

### 🟦 Array Methods

- `at()`: Returns the item at a given index (supports negative integers).
- `concat()`: Merges two or more arrays into a new one.
- `copyWithin()`: Shallow copies part of an array to another location in the same array.
- `entries()`: Returns a new Array Iterator object with key/value pairs.
- `every()`: Tests whether **all** elements pass a test.
- `fill()`: Fills all elements with a static value.
- `filter()`: Creates a new array with elements that pass a test.
- `find()`: Returns the **value** of the first element that passes a test.
- `findIndex()`: Returns the **index** of the first element that passes a test.
- `findLast()`: Returns the value of the last element that passes a test.
- `findLastIndex()`: Returns the index of the last element that passes a test.
- `flat()`: Flattens nested arrays up to a specified depth.
- `flatMap()`: Maps each element using a mapping function, then flattens the result.
- `forEach()`: Executes a provided function once for each array element.
- `from()`: Creates a new Array instance from an iterable or array-like object.
- `includes()`: Determines whether an array includes a certain value.
- `indexOf()`: Returns the first index at which a given element can be found.
- `isArray()`: Determines whether the passed value is an Array.
- `join()`: Joins all elements of an array into a string.
- `keys()`: Returns a new Array Iterator containing the keys for each index.
- `lastIndexOf()`: Returns the last index at which a given element can be found.
- `map()`: Creates a new array with the results of calling a function on every element.
- `of()`: Creates a new Array instance from a variable number of arguments.
- `pop()`: Removes the **last** element from an array and returns it.
- `push()`: Adds one or more elements to the **end** of an array.
- `reduce()`: Reduces the array to a single value (left-to-right).
- `reduceRight()`: Reduces the array to a single value (right-to-left).
- `reverse()`: Reverses an array **in place**.
- `shift()`: Removes the **first** element from an array and returns it.
- `slice()`: Returns a shallow copy of a portion of an array.
- `some()`: Tests whether **at least one** element passes a test.
- `sort()`: Sorts the elements of an array **in place**.
- `splice()`: Adds/Removes elements from an array.
- `toReversed()`: Returns a reversed copy without mutating the original.
- `toSorted()`: Returns a sorted copy without mutating the original.
- `toSpliced()`: Returns an updated copy without mutating the original.
- `unshift()`: Adds one or more elements to the **beginning** of an array.
- `with()`: Returns a copied array with one item replaced.

### 🟪 Object Methods

- `assign()`: Copies enumerable own properties from source to target.
- `create()`: Creates a new object with the specified prototype.
- `entries()`: Returns an array of `[key, value]` pairs.
- `freeze()`: Prevents modification of existing property attributes and values.
- `fromEntries()`: Transforms a list of key-value pairs into an object.
- `getOwnPropertyNames()`: Returns an array of all properties (enumerable or not).
- `hasOwn()`: Returns true if the object has the specified property as its own.
- `is()`: Determines whether two values are the same value (handling NaN etc.).
- `keys()`: Returns an array of the object's property names.
- `groupBy()`: Groups iterable entries by a callback result.
- `seal()`: Prevents new properties from being added.
- `values()`: Returns an array of the object's own enumerable property values.

### 🗺️ Map Methods

- `Map()`: Creates a key-value collection with insertion order.
- `set()`: Adds or updates a key-value pair.
- `get()`: Reads the value for a key.
- `has()`: Checks whether a key exists.
- `delete()`: Removes a key from the map.

### 🧺 Set Methods

- `Set()`: Creates a collection of unique values.
- `add()`: Adds a value to the set.
- `has()`: Checks whether a value exists.
- `delete()`: Removes a value from the set.

### 🟩 String Methods

- `at()`: Returns the character at the specified index.
- `charAt()`: Returns the character at the specified index.
- `concat()`: Concatenates string arguments to the calling string.
- `endsWith()`: Determines whether a string ends with the characters of a specified string.
- `includes()`: Determines whether one string may be found within another.
- `indexOf()`: Returns the index of the first occurrence of a value.
- `lastIndexOf()`: Returns the index of the last occurrence of a value.
- `padEnd()`: Pads the string with another string until it reaches the given length (end).
- `padStart()`: Pads the string with another string until it reaches the given length (start).
- `repeat()`: Returns a new string with a specified number of copies.
- `replace()`: Replaces occurrences of a pattern with a replacement.
- `replaceAll()`: Replaces **all** occurrences of a pattern.
- `slice()`: Extracts a section of a string.
- `split()`: Splits a String object into an array of strings.
- `startsWith()`: Determines whether a string begins with the characters of a specified string.
- `substring()`: Returns the part of the string between the start and end indexes.
- `match()`: Matches a string against a regular expression.
- `matchAll()`: Iterates over all regex matches.
- `localeCompare()`: Compares strings for sorting.
- `toLowerCase()`: Returns the calling string value converted to lower case.
- `toUpperCase()`: Returns the calling string value converted to upper case.
- `trim()`: Removes whitespace from both ends of a string.
- `trimEnd()`: Removes whitespace from the end of a string.
- `trimStart()`: Removes whitespace from the start of a string.

### 🟧 Math Methods

- `abs()`: Absolute value.
- `ceil()`: Round up.
- `floor()`: Round down.
- `max()`: Largest of zero or more numbers.
- `min()`: Smallest of zero or more numbers.
- `pow()`: Base to the exponent power.
- `random()`: Pseudo-random number between 0 and 1.
- `round()`: Round to nearest integer.

### 🔢 Number Methods

- `isNaN()`: Checks whether a value is actually `NaN`.
- `isFinite()`: Checks whether a value is a finite number.
- `isInteger()`: Checks whether a value is an integer.
- `parseInt()`: Parses a string into an integer.
- `parseFloat()`: Parses a string into a floating-point number.
- `toFixed()`: Formats a number with fixed decimal places.

### 🟨 Promise Methods

- `all()`: Resolves when all promises resolve.
- `allSettled()`: Resolves when all promises are settled (fulfilled or rejected).
- `any()`: Resolves as soon as any promise fulfills.
- `catch()`: Handles rejected promises.
- `finally()`: Runs cleanup logic after settle.
- `race()`: Resolves/Rejects as soon as any promise settles.
- `reject()`: Creates a rejected promise.
- `resolve()`: Creates a resolved promise.
- `then()`: Chains async success/error callbacks.

### 🧾 JSON Methods

- `parse()`: Converts JSON text into a JavaScript value.
- `stringify()`: Converts a JavaScript value into JSON text.

### 📅 Date Methods

- `now()`: Returns the number of milliseconds since January 1, 1970.
- `parse()`: Parses a string representation of a date.
- `UTC()`: Accepts parameters treats them as UTC.
- `getDate()`: Returns the day of the month.
- `getDay()`: Returns the day of the week.
- `getFullYear()`: Returns the year.
- `getHours()`: Returns the hour.
- `getTime()`: Returns the timestamp in milliseconds.
- `toISOString()`: Returns a string in simplified extended ISO format.
- `toJSON()`: Returns a string representation of the Date object.
- `toLocaleDateString()`: Returns a string with a locality sensitive representation of the date.
- `toLocaleString()`: Returns a string with a locality sensitive representation of this date.
- `toString()`: Returns a string representing the specified Date object.
- `toUTCString()`: Returns a string representing the date using the UTC time zone.
- `valueOf()`: Returns the primitive value of a Date object.

### 🧩 RegExp (Expression) Methods

- `exec()`: Executes a search on a string using a regular expression pattern.
- `test()`: Tests for a match in a string.
- `toString()`: Returns a string representing the regular expression.

### 🧠 Function Methods

- `call()`: Invokes a function with a chosen `this` and comma-separated args.
- `apply()`: Invokes a function with a chosen `this` and array-like args.
- `bind()`: Creates a new function with a fixed `this` and optional preset args.

### 🧮 Operators & Expressions

- `++`: Increment operator.
- `--`: Decrement operator.
- `...`: Spread syntax.
- `==`: Equality.
- `===`: Strict equality.
- `!=`: Inequality.
- `!==`: Strict inequality.
- `&&`: Logical AND.
- `||`: Logical OR.
- `??`: Nullish coalescing.
- `?:`: Conditional (ternary) operator.
- `**`: Exponentiation.
- `%`: Remainder.
- `&`: Bitwise AND.
- `~`: Bitwise NOT (Double NOT `!!` also covered).
- `^`: Bitwise XOR.
- `?.`: Optional chaining.
- `void`: void operator.
- `delete`: delete operator.
- `in`: in operator.
- `typeof`: Determine type of operand.
- `instanceof`: Check prototype chain.

## 🛠️ Tech Stack & Setup

This project uses **Tailwind CSS v4** for styling.

1.  **Install**:
    ```bash
    npm install
    ```
2.  **Run**:
    ```bash
    npm run dev
    ```
