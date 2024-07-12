---
id: 3,
title: 'SCSS Mindmap.'
para: 'After follow these steps, you can get master on SCSS beginner to master level.'
date: '7-12-2024'
cat: 'SCSS'
image: '/blog/scss.png'
keyword: ['SCSS', 'SCSS learning', 'SCSS learning path', 'SCSS master level']
---

# SCSS

[SCSS](https://sass-lang.com/documentation/) (Sassy CSS) is a syntax of Sass (Syntactically Awesome Stylesheets), which is a CSS preprocessor that adds features like variables, nested rules, mixins, inheritance, and more. SCSS is a superset of CSS, meaning any valid CSS is also valid SCSS. The main difference is that SCSS allows for more advanced features and a cleaner, more maintainable syntax.

```bash
npm install -g sass
```

## SCSS Variable

SCSS allows you to define `variables`, which can store values like colors, fonts, or any CSS value, making your code more maintainable and reusable.

```bash
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

## Nesting

SCSS supports `nesting`, which allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.

```bash
.navbar {
  background-color: $primary-color;
  .nav-item {
    color: white;
    &:hover {
      color: black;
    }
  }
}
```

## Mixins

A `mixin` is a reusable chunk of code that you can include in other parts of your stylesheet. They are defined using the @mixin directive and included using the @include directive.

```bash
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}
.box { @include border-radius(10px); }
```

## Extend / Inheritance

A `extend` allows one selector to inherit the styles of another selector. It is used for inheritance and can help reduce redundancy.

```bash
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.success { @extend .message; border-color: green; }
.error { @extend .message; border-color: red; }
```

## Partials

In SCSS, a `partial` is a file that contains a snippet of CSS that you can include in other SCSS files. Partials are a great way to modularize your CSS and keep your code organized. They help in breaking down large stylesheets into smaller, more manageable pieces, making your codebase easier to maintain and scale.

```bash
// _reset.scss
* {
  margin: 0;
  padding: 0;
}
```

## Import

To use these partials, you need to `import` them into your main SCSS file using the @import directive. Here’s how you can do it:

```bash
@import 'variables';
@import 'mixins';
@import 'reset';
@import 'header';

```

### Advantages

- <strong>Maintainability:</strong> SCSS makes it easier to keep your styles organized and maintainable.
- <strong>Reusability:</strong> Variables, mixins, and functions promote reusability, reducing redundancy.
- <strong>Modularity:</strong> Partials and modules help in breaking down styles into smaller, manageable pieces.
- <strong>Enhanced Features:</strong> SCSS extends the capabilities of CSS with features like variables, nesting, and control directives.

### Resorces

- [SCSS Official](https://sass-lang.com/documentation/)
