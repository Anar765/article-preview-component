# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/article-preview-component-solution-CRrwijOZ6b)
- Live Site URL: (https://anar765.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow*

### What I learned

In this project, I learned the following:

1) `The getComputedStyle()` built-in function, which helped me retrieve the computed styles of an `svg` image and modify them based on a button click: 

```js

var bg = getComputedStyle(shareImage).backgroundColor;

if(bg === "rgb(236, 242, 248)") {
  ...
}

```

2) The `object-position` CSS property, which allowed me to adjust the position of an image to make the layout more closely match the design:

```css
object-position: 0rem;
```

### Continued development

In the future, I want to update the functionality and styles of this project to improve its UI/UX.

## Author

- Frontend Mentor - [@Anar765](https://www.frontendmentor.io/profile/Anar765)
