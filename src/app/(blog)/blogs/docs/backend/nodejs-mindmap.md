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
What is Process and Thread?

Process: A process is an independent program that runs in its own memory space. Each process has its own resources (memory, file descriptors, etc.).

Thread: A thread operates within a process and shares the same memory and resources. Multiple threads can run within the same process, allowing for multitasking.

Thread States:
- New: Created but not started.
- Runnable: Ready to run and is waiting for CPU time.
- Blocked: Waiting for resources (I/O operations) to complete.
- Terminated: Finished execution.
```

```bash
Node.js is single thread. Why?

- Node.js is primarily a single-threaded environment. Because it operates on a single main thread using an event-driven, non-blocking I/O model.
```

```bash
Why Nodejs is Single-Threaded?

Node.js is single-threaded, it achieves multitasking through its event-driven architecture and the event loop. This allows it to handle multiple concurrent operations without being blocked by I/O tasks. Thus, it can efficiently manage thousands of simultaneous connections, making it particularly well-suited for real-time applications and high-traffic environments.
```

```bash
Where Can You Use Node.js?
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
Why use Node.js?

- High Performance
Fast compiles javaScript to machine code for execution by V8 Engine from Google.

- Scalability
Node.js can handle thousands of concurrent connections using a Single-Threaded Event Loop and supports microservices architecture.
```

```bash
Synchronous
- Tasks execute in sequence (one after the other)
- Yes, blocking execution
- Simple and predictable
- Can be slower for I/O-bound tasks

Asynchronous
- Tasks can execute independently and concurrently
- No, non-blocking execution
- More complex due to callbacks/promises
- More efficient for I/O operations and concurrency

```

```bash
How does Node.js work?
- 
```
