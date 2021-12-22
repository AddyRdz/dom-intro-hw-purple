/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'
const element =document.getElementById('first')
console.log(element)
// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?
My console is empty.
// 3. Get the elements with a class of 'second' with getElementsByClassName:
const element = document.getElementsByClassName('second')
console.log(element)
// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?
I lose an element, instead of having the length of 3, I have 2.
// 5. Get the span element using getElementsByTagname:
const element = document.getElementsByTagName('span')
console.log(element)
// 6. Add a span anywhere, and re-run the last piece of code. What's different?
My length increases to 3. 