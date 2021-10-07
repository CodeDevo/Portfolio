"use strict";

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // Aufgabe erledigt
    function crossOut() {
        li.classList.toggle("done");
    }

           // Entfernen Button hinzufügen

           var dBtn = document.createElement("button");
           dBtn.appendChild(document.createTextNode("X"));
           li.appendChild(dBtn);
           dBtn.addEventListener("click", deleteListItem);
       
           //Delete Klasse hinzufügen
       
           function deleteListItem() {
               li.classList.add("delete");
           }

    li.addEventListener("click", crossOut);
}

    function addListAfterClick() {
        if (inputLength() > 0) {
            createListElement();
        }
    }

    function addListAfterKeypress(event){
        if (inputLength() > 0 && event.which ===13) {
            createListElement();
        }
    }

    enterButton.addEventListener("click", addListAfterClick);

    input.addEventListener("keypress", addListAfterKeypress);

