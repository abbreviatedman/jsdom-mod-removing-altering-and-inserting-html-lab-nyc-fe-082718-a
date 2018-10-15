/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */

let newHeader = document.createElement('div');

document.body.appendChild(newHeader);

// Make a UL Node:
var ul = document.createElement('ul')

// Three times, do this:
for (let i = 0; i < 3; i++) {

// Make an LI node.
  let li = document.createElement('li')
  
  // Put a 1 in the LI the first time through the loop, then 2, then 3.
  li.innerHTML = (i + 1).toString()
  
  // Append the LI (with its text!) to the UL.
  ul.appendChild(li)
}

// Put the UL (with its LIs!) in our div we made.
newHeader.appendChild(ul)

ul.style.backgroundColor = '#ff0090'
ul.style.fontSize = "30px"


// ul.removeChild(ul.querySelector('li:nth-child(2)'))

let secondLI = ul.querySelector('li:nth-child(2)')
// ul.removeChild(secondLI);

secondLI.id = "second-li";

