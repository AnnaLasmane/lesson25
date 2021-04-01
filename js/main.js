//task 1
function js_style(){
const textElement = document.getElementById('text')
textElement.style.fontSize = '36px';
textElement.style.color = 'purple';
textElement.style.fontFamily = 'veranda';
}


//task 3
function set_background() {
    docBody = document.getElementsByTagName("body")[0];
     myBodyElements = docBody.getElementsByTagName("p");
     myp1 = myBodyElements[0];
     myp1.style.background = "red";
   }

   //task 5

   function insert_Row() {
    var table = document.getElementById("sampleTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }

//task 2 

function getFormvalue(){
    var firstName= document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    document.getElementById("show").innerText = firstName+" "+lastName;        
}

//task 4

function getAttributes()
{
 var u = document.getElementById("w3r").href;
 console.log('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("w3r").hreflang;   
 console.log('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("w3r").rel; 
 console.log('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("w3r").target; 
 console.log('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("w3r").type; 
 console.log('The value of the type attribute of the link is : '+y);  
}