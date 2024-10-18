---
id: 13,
title: 'Node JS Mindmap.'
para: 'After follow these steps, you can get master on Node JS beginner to master level.'
date: '07-12-2024'
cat: 'Node JS'
image: '/blog/nodejs.webp'
keyword:
  [
    'Node JS',
    'Node JS learning',
    'Node JS learning path',
    'Node JS master level',
  ]
---

# Node JS

[Setup with Typescript](https://github.com/Muzammil327/portfolio-website/blob/main/src/learning/backend/setup-with-ts.README.md)

[Setup with Javascript](https://github.com/Muzammil327/portfolio-website/blob/main/src/learning/backend/setup-with-js.README.md)

[Small Helping Package](https://github.com/Muzammil327/portfolio-website/blob/main/src/learning/backend/package.README.md)

### Resorces

- [Node JS Official](https://nodejs.org/en)

### Interview Question

```bash
What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Google’s V8 JavaScript engine, which powers Chrome, enabling fast execution of JavaScript. Node.js supports multiple operating systems, including Windows, Linux, and macOS, making it versatile for server-side development.
```

- Open Source is the code which is available to the public for use, modification, and distribution.

- Cross-platform refers to the capability of software applications or systems to function on multiple operating systems and platforms without requiring significant changes or adaptations. This means that the same application can run on different environments such as Windows, macOS, Linux, and mobile platforms (like iOS and Android).

- A runtime is a software environment in which a program or script is executed. It encompasses everything necessary for the program to run, including the execution engine, libraries, and other resources. Here are some key aspects of what a runtime entails:

- Chrome = V8 engine
- Firefox = Spider Monkey engine
- Safari = Apple engine

```bash
'What is Process and Thread?'

'Process:' A process is an independent program that runs in its own memory space. Each process has its own resources (memory, file descriptors, etc.).

'Thread:' A thread operates within a process and shares the same memory and resources. Multiple threads can run within the same process, allowing for multitasking.

'Thread States:'
- New: Created but not started.
- Runnable: Ready to run and is waiting for CPU time.
- Blocked: Waiting for resources (I/O operations) to complete.
- Terminated: Finished execution.
```

```bash
'Node.js is single thread. Why?'

- Node.js is primarily a single-threaded environment. Because it operates on a single main thread using an event-driven, non-blocking I/O model.
```

```bash
'Why Nodejs is Single-Threaded?'

Node.js is single-threaded, it achieves multitasking through its event-driven architecture and the event loop. This allows it to handle multiple concurrent operations without being blocked by I/O tasks. Thus, it can efficiently manage thousands of simultaneous connections, making it particularly well-suited for real-time applications and high-traffic environments.
```

```bash
'Where Can You Use Node.js?'
- Web Applications:
- Microservices
- Server-Side Rendering (SSR):
- Real-Time Applications:
- Command-Line Tools: (CLI)
- API Development:
- IoT Applications:
- Streaming Applications:
```

```bash
'Why use Node.js?'

- High Performance
Fast compiles javaScript to machine code for execution by V8 Engine from Google.

- Scalability
Node.js can handle thousands of concurrent connections using a Single-Threaded Event Loop and supports microservices architecture.
```

```bash
'How does Node.js work?'

- Client Request: User makes a request.
- Event Loop: The request enters the event loop.
- Asynchronous Tasks:
If non-blocking, the request is processed, and the callback is registered in the event queue.
If blocking, it is sent to the thread pool.
- Thread Pool: Blocking operations are executed in the background.
- Callback Execution: Once ready, the callback is executed by the event loop.
- Response to User: The server sends the response back to the user.
```

```bash
'What is NPM?'

NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.
It allows developers to discover, share, and reuse code packages easily. Its advantages include dependency management, version control, centralized repository, and seamless integration with Node.js projects.

```

```bash
'modules in Node.js'

- InBuilt Modules
'assert:' Provides a set of assertion tests for verifying invariants in your code, useful for testing.

'buffer:' Allows handling of binary data in Node.js, including creation and manipulation of Buffer objects.

'child_process:' Enables spawning of child processes, allowing you to execute shell commands and scripts from your Node.js application.

'cluster:' Supports the creation of child processes (workers) that can share the same server port, useful for load balancing.

'crypto:' Provides cryptographic functionality, including a set of wrappers for OpenSSL’s hash, HMAC, cipher, decipher, sign, and verify functions.

'events:' Implements an event-driven architecture; it provides the EventEmitter class for handling events in Node.js.

'fs:' Contains file system-related functionality, allowing for reading, writing, and interacting with files and directories.

'http:' Enables HTTP server and client functionalities, allowing the creation of web servers and making HTTP requests.

'https:' Similar to the http module, but for creating HTTPS servers and making secure HTTP requests.

'net:' Provides an asynchronous network API for creating TCP or IPC servers and clients.

'os:' Contains operating system-related utility methods and properties, such as CPU architecture and system uptime.

'path:' Provides utilities for working with file and directory paths, allowing for normalization and manipulation of paths.

'querystring:' Provides utilities for parsing and formatting URL query strings.

'readline:' Provides an interface for reading data from a readable stream (such as process.stdin) one line at a time.

'stream:' Provides an abstract interface for working with streaming data in Node.js, including readable and writable streams.

'timer:' Provides functions for scheduling code to run at a later time, including setTimeout, setInterval, and clearTimeout.

'url:' Provides utilities for URL resolution and parsing.

'util:' Contains utility functions that assist in debugging, formatting strings, and inspecting objects.

'vm:' Provides APIs for compiling and running code within V8 virtual machine contexts.

'zlib:' Provides compression and decompression functionalities for data streams using the Gzip and Deflate algorithms.

- Thrid Party Modules

- Own Making Modules
```

```bash
'Is Node.js cross-platform?'
Yes, Node.js is cross-platform and we can run it on Windows, Linux, Unix, and macOS.

'What makes Node.js different?'
It is different from other JavaScript environments because it is asynchronous and event-driven.

'Is Node.js open-source or not?'
Node.js is open-source and cross-platform.

'Does Node.js use JavaScript?'
Node.js is based on JavaScript and it uses the V8 engine developed by Google. It is used for building server-side applications.

'Name types of API functions supported by Node.js.'
Asynchronous non-blocking and synchronous blocking are the two different types of API functions that Node.js supports.
```

```bash
'Can we run Node.js on Windows?'
Yes, it is possible to run Node.js on Windows.

'What do you mean by I/O?'
I/O stands for input/output, which helps write and read files and network operations.

'What are the two data types categories in Node.js?'
Node.js supports two categories of data type - primitive and non-primitive.

- 'Primitive Types': Immutable, cannot be broken down, include String, Number, Boolean, BigInt, Null, Undefined, and Symbol.
- 'Non-Primitive Types': Mutable, can hold collections or more complex entities, include Object, Array, Function, and Date.

'Why does Google use V8 for Node.js?'
Google uses V8 for Node.js because it is faster and more efficient. It compiles the JavaScript code directly into machine code.

'Which extension is used to save Node.js files?'
.js extension is used to save Node.js files.
```

```bash
'For what type of applications is Node.js not compatible?'
Node.js is not compatible with CPU-intensive applications.

'Global installation of dependencies.'
Global installation refers to installing dependencies in such a way that they can be accessed from anywhere in your system, rather than just within a specific project.
'npm install -g <package-name>'
```

```bash
'Explain REPL in Node.js.'
REPL stands for Read Eval Print Loop.

'Components of REPL'
'Read:' The REPL reads a line of input from the user. This input can be a complete JavaScript statement or a partial expression.

'Eval:' After reading the input, the REPL evaluates (executes) the JavaScript code.

'Print:' The result of the evaluation is printed to the console. If the code does not produce a value (e.g., a statement like let x = 5;), it returns undefined.

'Loop:' The process repeats: the REPL waits for new input, evaluates it, prints the result, and loops back.
```

| Node.js                      | Javascript                               |
| Server-Side                  | Client-Side                              |
| Server-Side                  | Client-Side                              |
