function addtodo() {
    var input = document.getElementById("inputField");

    var liElememt = document.createElement("li");
    var liText = document.createTextNode(input.value);
    liElememt.appendChild(liText);


    var delElement = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delElement.appendChild(delText);
    delElement.setAttribute("onclick","delbutton(this)")
    liElememt.appendChild(delElement);


    var editElement = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editElement.appendChild(editText)
    editElement.setAttribute("onclick","editbutton(this)")
    liElememt.appendChild(editElement);

    var list = document.getElementById("list")

    list.appendChild(liElememt);
    console.log(liElememt);

    input.value = "";
}

function DeleteAll() {
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function delbutton(x){
    console.log(x.parentNode.remove())
}

function editbutton(e){
    input=prompt("Enter your updated value...")
    e.parentNode.firstChild.nodeValue = input;
}