

Question 1: How can you select all the input elements on a web page and change their background color to yellow?
```javascript
const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.style.backgroundColor = "yellow");
```

Question 2: How can you select the third paragraph element on a web page and change its font size to 20 pixels?
```javascript
const thirdParagraph = document.querySelector("p:nth-of-type(3)");
thirdParagraph.style.fontSize = "20px";
```

Question 3: How can you select all the images on a web page and add a class "border" to them?
```javascript
const images = document.querySelectorAll("img");
images.forEach(image => image.classList.add("border"));
```

Question 4: How can you select the first element with a class "highlight" and change its text to "New Text"?
```javascript
const firstHighlight = document.querySelector(".highlight");
firstHighlight.textContent = "New Text";
```

Question 5: How can you select all the elements with a class "row" and hide them from view?
```javascript
const rows = document.querySelectorAll(".row");
rows.forEach(row => row.style.display = "none");
```

Question 6: How can you select all the links on a web page and add a target="_blank" attribute to each one?
```javascript
const links = document.querySelectorAll("a");
links.forEach(link => link.setAttribute("target", "_blank"));
```

Question 7: How can you select the first image on a web page and change its source to a different image?
```javascript
const firstImage = document.querySelector("img");
firstImage.src = "new-image.jpg";
```

Question 8: How can you select all the headings (h1 through h6) on a web page and change their font family to "Arial"?
```javascript
const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
headings.forEach(heading => heading.style.fontFamily = "Arial");
```

Question 9: How can you select all the paragraph elements within a div with class "content" and change their text color to red?
```javascript
const contentParagraphs = document.querySelectorAll(".content p");
contentParagraphs.forEach(paragraph => paragraph.style.color = "red");
```

Question 10: How can you select the last item in an unordered list and change its text to "Last Item"?
```javascript
const lastItem = document.querySelector("ul li:last-of-type");
lastItem.textContent = "Last Item";
```
