//task 1

//// Clicking on the button the font, font size, and color of the paragraph text will be changed.
function js_style(){
const textElement = document.getElementById('text')
textElement.style.fontSize = '36px';
textElement.style.color = 'purple';
textElement.style.fontFamily = 'veranda';
}

//task 2 
// Write a JavaScript function to get the values of 
//First and Last name of the following form. 


function getFormvalue(submitEvent) {
  submitEvent.preventDefault();
  const fName = document.getElementById('firstname').value;
  const lName = document.getElementById('lastname').value;

  console.log(`First name: ${fName}, Last name: ${lName}`)

}

//task 3 // Write a JavaScript program to set the background color of a paragraph
function set_background() {
  const pBackgroundColor = document.getElementById('change-color');
  pBackgroundColor.style.backgroundColor = 'red';
   }
   
//task 4//Write a JavaScript function to get the value of the 
//href, hreflang, rel, target, and type attributes of the specified link.
   
function getAttributes() {
  const link = document.getElementById('w3r');
  
  for (let i = 0; i < link.attributes.length; i++) {
      let attribute = link.attributes[i]; 
      console.log(attribute.name + " = " + attribute.value);
      
  } 

}

   //task 5 // Write a JavaScript function to add rows to a table.

function insert_Row() {
  const table = document.getElementById('sampleTable');
  let rowElement = table.children.length+1;

  const newElement = `
  <tr><td>Row${rowElement} cell1</td>
  <td>Row${rowElement} cell2</td></tr>`
  ;
  table.innerHTML += newElement;
}

//task 6

// Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
// Table + form with 3 elements: input field and 2x select fields to pick the row and column

