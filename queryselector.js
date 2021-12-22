/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector
const element = document.querySelector('#first')
console.log(element)
// 2. Get the elements with a class of 'second' with querySelector
const element = document.querySelector('.second')
console.log(element)
// 3. Try the above prompt with querySelectorAll. What's the difference between
//    what these two methods return?
const element = document.querySelectorAll('.second')
console.log(element)
// The different between these two methods is that querySelectorAll returns all items while querySelector returns only the first one.
// 4. Get the span element using querySelector
const element = document.querySelector('span')
console.log(element)
// 5. Get multiple span elements using querySelectorAll
const element = document.querySelectorAll('span')
console.log (element)
// 6. Select only "a" tags *directly inside* of a div (no grandchildren).
const atags = document.querySelectorAll('div>a')
console.log(atags)
// 7. Select all elements that contain a "data-target" attribute
const element = document.querySelectorAll('[data-target]')
console.log(element)
// 8. Select all elements where the data-target attribute equals "#false"
const element = document.querySelectorAll('[data-target='#false']')
console.log(element)

// const newItem = document.createElement(`innerHTML`)
// newItem.innerText="Hello"
// console.log(newItem)

