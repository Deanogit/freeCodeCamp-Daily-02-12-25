// Camel to Snake
// Given a string in camel case, return the snake case version of the string using the following rules:

// The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
// Every uppercase letter in the camel case string starts a new word.
// Convert all letters to lowercase.
// Separate words with an underscore (_).

// function toSnake(camel) {
// The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
// Every uppercase letter in the camel case string starts a new word.
// Convert all letters to lowercase.
// Separate words with an underscore (_).
// console.log(camel)
// const regex = /[A-Z]+/
// const result = camel.replace(regex, `_`)
// console.log(result)

// const arr = camel.split(regex)

// console.log(arr)
// let test = regex.test(camel)
// console.log(test)
//  return camel;
// }

// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.

function toSnake(camel) {
  const arr = camel.split('');
  console.log(arr);
  const regex = /[A-Z]/;
  arr.forEach((x, i) => {
    if (regex.test(x)) {
      console.log('Capital: ', x, i);
      arr.splice(i, 1, '_', x.toLowerCase());
    }
  });
  console.log(arr);
  const str = arr.join('');
  console.log(str);
  return str;
}

// // At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");
