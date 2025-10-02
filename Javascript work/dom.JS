// 1.Change Text Content


function changeText(){
    document.getElementById("text").textContent="Hello,JavaScript"
}

// 2.Style an Element
function styleBox(){
    let box = document.getElementById("box");
    box.style.backgroundColor ="Blue";
    box.style.color = "white";
    box.style.padding = "10px";
    box. style.width = "60px";
}

// 3. Add a New Element
function addItem(){
let li = document.createElement("li");
li.textContent = "Smart Tech";
document.getElementById("List").appendChild(li);
}

// 4. Remove an Element
function removeItem(){
let list = document.getElementById("removeList")
if(list.lastChild){
list.removeChild(list.lastChild);
}
}

// 5.Input & Output
function shwoInput(){
let inputText = document.getElementById("inputBox").value;
document.getElementById("Output").textContent = inputText;
}
