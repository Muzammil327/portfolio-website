---
id: 5,
title: 'Javascript Mindmap.'
para: 'After follow these steps, you can get master on Javascript beginner to master level.'
date: '7-12-2024'
cat: 'Javascript'
image: '/blog/javascript.png'
keyword:
  [
    'Javascript',
    'Javascript learning',
    'Javascript learning path',
    'Javascript master level',
  ]
---

# Javascript

- parseInt() = Used string to Integers
- parseFloat() = Used string to a floating-point
- Number() = Used string to a number

## String

- length
- toUpperCase()
- toLowerCase()
- concat(value1, value2) // Concatenates two or more strings and returns a new string.
- charAt(number) // returns the character at a specified index in a string.
- at(number) - at[] // returns an indexed character from a string
- indexOf(string) // returns the position in a string.
- substring(start,end) // extracts a part of a string. end not include
- slice(start,end) // extracts a part of a string.
- reverse() // start in end and end in start
- trim() // remove white space
- trimEnd() // remove white space at the end of string
- trimStart() // remove white space at the start of string
- replace("previous", "new") // remove previous and add new
- includes(): // string contains a specified string.
- startsWith(string): // checking the start length characters.
- endsWith(string): // checking the last length characters.
- repeat(number): // new string with a number of copies
- split(separator, limit):
  // string into an array of substrings.
  // separator is white space (" ") or ("-")

### Interview

```bash
'What is the difference between == and === in Javascript.'

`==` checks for the same value, while `===` checks for the same value and type.
```

```bash
'callback'

A callback is a function passed as an argument to another function that gets executed after the asynchronous task is complete.
```

```bash
'Promises'

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows chaining asynchronous operations and is more readable than deeply nested callbacks.
```

```bash
'Async/Await'

Introduced to make asynchronous code look and behave more like synchronous code. It makes code easier to read and maintain.
```

```bash
'Synchronous'
- Tasks execute in sequence (one after the other)
- Yes, blocking execution
- Simple and predictable
- Can be slower for I/O-bound tasks

'Asynchronous'
- Tasks can execute independently and concurrently
- No, non-blocking execution
- More complex due to callbacks/promises
- More efficient for I/O operations and concurrency

```

### Resorces

- [Javascript Official](/)
