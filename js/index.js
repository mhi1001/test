let button = document.getElementById("addstringbutton");
let stringList = document.getElementById("list");
let listItemlistlist = document.getElementsByTagName("li");

button.addEventListener("click", addString);

function addString(){
    
    let idNumber = stringList.childElementCount;
    let inputText = document.createTextNode(document.getElementById("textbox").value)
    let newListItem = document.createElement("li");

    console.log(idNumber)
    console.log(inputText)

    stringList.appendChild(newListItem); 

    newListItem.appendChild(inputText).innerHTML;
    newListItem.setAttribute("id", idNumber);
}





