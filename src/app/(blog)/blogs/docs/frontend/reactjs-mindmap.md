---
id: 7,
title: 'React JS Mindmap.'
para: 'After follow these steps, you can get master on React JS beginner to master level.'
date: '3-07-2024'
cat: 'React JS'
image: '/blog/reactjs.png'
keyword:
  [
    'React JS',
    'React JS learning',
    'React JS learning path',
    'React JS master level',
  ]
---

# React JS

## Interview

```bash
What is React JS.

Popular open source JavaScript library for building user interfaces, particularly single-page applications(SPAs) and created by Jordan Walke and release March 2013.
```

```bash
What is Actual DOM (HTML or XML).

DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.
- HTML directly update.
- Memory store so memory wastage.

```

```bash
What is Virtual DOM.

Copy of real dom that exist in the memory. React efficiently update and render the user interface by comparing the current and previous virtual DOM states using a process called diffing.

- Not directly update.
- Less Memory wastage.

- 'WORK' comparing current virtual dom with a new virtual dom, apply set of change to actual dom and update UI without causing unnecessary re-render or layout change.

- 'Shadow DOM' tree of loading style
```

```bash
What is Component-Based Architecture.

Breaks down the user interface (UI) into independent, reusable components. Each component represents a specific piece of functionality in the UI, such as buttons, input fields, or other UI elements. These components can be combined and composed together to build a complete application. This architecture enhances reusability, as components can be reused across different parts of the application, and improves scalability, allowing applications to grow by adding more components or modifying existing ones easily.

2 Types of components

Class
- Extends React.Component.
- Render method that returns a React element.
- Accessed using this.props.
- Can manage its own state using this.state. The state is initialized in the constructor. State is updated using this.setState().
- Lifecycle:
componentDidMount: Invoked immediately after the component is mounted. Good for fetching data.
componentDidUpdate: Invoked immediately after updating occurs. Good for responding to prop or state changes.
componentWillUnmount: Invoked immediately before the component is unmounted and destroyed. Good for cleanup tasks.

Function
- returns a React element.
- Accepts props as an argument.
- Can be defined using a regular function or an arrow function.
- Initially stateless but can use hooks (like useState) to manage state.
- Lifecycle:
componentDidMount: Runs once after the initial render.
componentDidUpdate: Runs after every render when dependencies change.
componentWillUnmount: Cleanup before the component unmounts.

```

```bash
What is JXC.
JSX is a syntax extension for JavaScript that allows you to write HTML tags and components directly within JavaScript code, similar to HTML, it is not exactly the same. JSX is transformed into regular JavaScript functions by a compiler like Babel, making it easy to build and manage complex UIs.
```

```bash
What is One-Way Data Binding?

React uses a unidirectional data flow, meaning data moves in one direction from parent to child components. This makes debugging and tracking data changes easier.
```

```bash
What is MVC.

Design pattern that separates an application into three main logical components Model, View, and Controller.
```

```bash
Building blocks of React.

- Components
- JSX
- Props and State
- Context
- Virtual DOM
```

```bash
Can web browsers read JSX directly?

Browsers cannot read JSX directly, Babel is used to convert JSX into standard JavaScript, allowing it to be processed and rendered by web browsers.
```

```bash
What are the main advantages of React.js?

- Enhances the performance of the application.
- Used from the client-side as well as the server-side.
- Readability of code is higher in React.js because of JSX.
- Offers easy integration with frameworks such as Angular, Meteor, etc.
- Easy to write UI test cases with React.js.
```

```bash
Can web browsers read JSX directly?

Browsers cannot read JSX directly, Babel is used to convert JSX into standard JavaScript, allowing it to be processed and rendered by web browsers.
```

```bash
Props

Data passed from parent to child components. Immutable (cannot be change) and read only.
```

```bash
State

Data is passed within the component only. Mutable and both read and write.
```

```bash
ES5 standards

- var
- require
- module.exports
- component and function
- no spread operator

```

```bash
ES6 standards

- let and const
- import
- export
- function
- spread operator(...)

```

```bash
'Mouse Events:'

- onClick: Fired when a mouse button is clicked.
- onDoubleClick: Fired when a mouse button is double-clicked.
- onMouseDown: Fired when a mouse button is pressed down.
- onMouseUp: Fired when a mouse button is released.
- onMouseEnter: Fired when the mouse enters an element.
- onMouseLeave: Fired when the mouse leaves an element.
- onMouseMove: Fired when the mouse moves over an element.
- onContextMenu: Fired when the right mouse button is clicked.

'Keyboard Events:'
- onKeyDown: Fired when a key is pressed down.
- onKeyPress: Fired when a key is pressed.
- onKeyUp: Fired when a key is released.

'Focus Events'
- onFocus: Fired when an element gains focus.
- onBlur: Fired when an element loses focus.

'Form Events'
- onChange: Fired when the value of an input element changes.
- onInput: Fired when the value of an input element is changed.
- onSubmit: Fired when a form is submitted.
- onInvalid: Fired when a form element is invalid.
- onReset: Fired when a form is reset.

'Touch Events'
- onTouchStart: Fired when a touch point is placed on the touch surface.
- onTouchMove: Fired when a touch point is moved along the touch surface.
- onTouchEnd: Fired when a touch point is removed from the touch surface.
- onTouchCancel: Fired when a touch point has been disrupted.

'Clipboard Events'
- onCopy: Fired when the content is copied to the clipboard.
- onCut: Fired when the content is cut from an element.
- onPaste: Fired when the content is pasted into an element.

'Drag Events'
- onDrag: Fired when an element is being dragged.
- onDragStart: Fired when the user starts dragging an element.
- onDragEnd: Fired when the user stops dragging an element.
- onDragEnter: Fired when a dragged item enters a drop target.
- onDragLeave: Fired when a dragged item leaves a drop target.
- onDragOver: Fired when a dragged item is over a drop target.
- onDrop: Fired when a dragged item is dropped on a drop target.

'Media Events'
- onLoad: Fired when an element has loaded (e.g., images, scripts).
- onError: Fired when an error occurs while loading an element.
- onPlay: Fired when media begins to play.
- onPause: Fired when media is paused.
- onEnded: Fired when media playback has stopped.

'Window Events'
- onResize: Fired when the window is resized.
- onScroll: Fired when the document is scrolled.

'Other Events'
- onSelect: Fired when text is selected.
- onKeyUp: Fired when a key is released.
```

```bash
'key in React'

- Key helps in identifying what objects have been altered, moved, or deleted from lists
- With the help of keys, it is easier to determine which objects must be re-rendered instead of all components being re-rendered all the time.
```

```bash
'Multi-line comment': /* */.
'Single line comment': //.
```

| React.js                     | Angular                                  |
| ---------------------------- | ---------------------------------------- |
| Library                      | Framework                                |
| Component-based architecture | Model-View-Controller (MVC) architecture |
| Virtual DOM                  | Real DOM                                 |
| Uni-directional              | bi-directional                           |
| faster                       | slower                                   |
| Server-Side                  | Client-Side                              |

```bash
'Higher-Order Component (HOC):'

Fetch data and wrap another component, you can manage shared data efficiently. By fetching the data in the HOC and passing it as props to the wrapped component, you can reuse that data in multiple places without duplicating your fetch logic.
```

```bash
'Element'
- A plain object representing a UI element can be created using JSX syntax.
- Specific instance of a UI element.
- Not reusable on its own

'Component'
- A component is a function or a class that optionally accepts input (props) and returns a React element. Components can be reusable building blocks for the UI.
- Logic and behavior related to a specific part of the UI.
- Designed to be reusable
```

```bash
'What is an event in React.js?'

- When a user presses a key, clicks the mouse, or performs any action on the machine or when the machine itself triggers an action, these actions are registered as events in React.js.

- In React.js, we use camelCase to name events, instead of the lowercase in HTML
```

```bash
'Can you tell two downsides of React?'

It is difficult to integrate with an MVC framework like Rails.
```

```bash
'What is React Router?'

It is a library for routing in React.
```

```bash
'What are stateless components?'

They are pure functions with no render method.
```

```bash
'Can you list some animation packages in React?'

- React Motion
- React Transition Group
- React Spring
```

```bash
'useEffect'
Data fetching, and DOM updates.

'useState'
A state variable that can be updated on demand. It allows you to define a stateful value (a piece of data) that can change over time, and React will automatically re-render the component whenever that state changes.

'useReducer'
Used when you handling multiple state variables or managing state based on actions. It’s similar to how reducers work in Redux.

'useContext'
A lightweight alternative to Higher-Order Components (HOCs) or the Context API without the need to wrap components deeply. It provides an easier and more straightforward way to share data across multiple components without manually passing props down through every level of the component tree.

'useCallback' 
Memoizes a function. It returns a memoized version of the callback function that only changes if one of its dependencies has changed. This is useful when you want to avoid unnecessary re-creations of functions during re-renders, particularly when those functions are passed as props to child components.

'useMemo' is used to memoize a calculated value. It only recalculates the memoized value when one of the dependencies changes.

'useRef' is a hook that provides a way to persist a mutable reference to a value or a DOM element. It doesn’t cause the component to re-render when the reference value changes. It's commonly used to access DOM elements directly or to hold onto values across renders without triggering re-renders.

```

### Resorces

- [React JS Official](/)
