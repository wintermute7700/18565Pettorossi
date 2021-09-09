let addButton =document.getElementById("add-button")
addButton.addEventListener("click", addToDoItem);

function addToDoItem(){
    alert("clickeaste boton");
    let itemText = todoEntryBox.value;
    newToDoItem(itemText)
}

let todoEntryBox =document.getElementById("todo-entry-box");
let toDoList =document.getElementById("todo-list");

function newToDoItem (itemText){
    let toDoItem=document.createElement("li");
    let todoText=document.createTextNode(itemText);

    toDoItem.appendChild(toDoText)
    toDoList.appendChild(toDoItem)
}