---
id: 11,
title: 'React Query Mindmap.'
para: 'After follow these steps, you can get master on SCSS beginner to master level.'
date: '7-02-2024'
cat: 'SCSS'
image: '/blog/scss.png'
keyword: ['SCSS', 'SCSS learning', 'SCSS learning path', 'SCSS master level']
---

# SCSS

SCSS (Sassy CSS) is a syntax of Sass (Syntactically Awesome Stylesheets), a preprocessor scripting language that is interpreted or compiled into CSS. SCSS is fully compliant with CSS syntax, meaning every valid CSS stylesheet is valid SCSS as well. This makes it easier for developers to transition from CSS to SCSS.

## SCSS Variable

Variables: SCSS allows you to define variables, which can store values like colors, fonts, or any CSS value, making your code more maintainable and reusable.

```bash
$primary-color: #3498db;
$secondary-color: #2ecc71;
```

## Nesting 

SCSS supports nesting, which allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.

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

### Advantages
- <strong>Maintainability:</strong> SCSS makes it easier to keep your styles organized and maintainable.
- <strong>Reusability:</strong> Variables, mixins, and functions promote reusability, reducing redundancy.
- <strong>Modularity:</strong> Partials and modules help in breaking down styles into smaller, manageable pieces.
- <strong>Enhanced Features:</strong> SCSS extends the capabilities of CSS with features like variables, nesting, and control directives.

### Resorces

- [SCSS Official](https://sass-lang.com/documentation/)
- [How we setup SCSS with Next JS.](/)
