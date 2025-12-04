// Camel to Snake
// Given a string in camel case, return the snake case version of the string using the following rules:

// The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
// Every uppercase letter in the camel case string starts a new word.
// Convert all letters to lowercase.
// Separate words with an underscore (_).

function toSnake(camel) {
  // The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
  // Every uppercase letter in the camel case string starts a new word.
  // Convert all letters to lowercase.
  // Separate words with an underscore (_).
  console.log(camel);
  const regex = /[A-Z]+/g;
  const arr = camel.split(regex);

  console.log(arr);
  // let test = regex.test(camel)
  // console.log(test)
  return camel;
}

// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.
