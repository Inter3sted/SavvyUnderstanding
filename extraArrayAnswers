1. Sum of even numbers in an array:

```
function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNumbers(numbers)); // Output: 30
```

2. Random password generator:

```
function generatePassword() {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let password = "";
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  for (let i = 0; i < 5; i++) {
    const characters = lowercase + uppercase + numbers;
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

console.log(generatePassword()); // Output: G0fj1d2A
```

3. Sorting an array of strings:

```
const strings = ["apple", "banana", "cherry", "date"];
strings.sort();
console.log(strings); // Output: ["apple", "banana", "cherry", "date"]
```

4. Counting vowels in a string:

```
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello, world!")); // Output: 3
```

5. Finding the largest number in an array:

```
function findLargestNumber(arr) {
  let largestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

const numbers = [3, 5, 1, 10, 8];
console.log(findLargestNumber(numbers)); // Output: 10
```
