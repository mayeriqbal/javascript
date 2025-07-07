//example 1

let hold = document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "eggs";
  document.getElementById("shoppingList").appendChild(newitem);
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("tasklist");
    tasklist.firstChild.remove();
  });

// example 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("hello");
});

//example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected:" + event.target.textContent);
  }
});

//example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });
//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom fully loaded ";
});
//example 10

document.getElementById("toggleHighlight").addEventListener("click", function () {
  let descriptionText = document.getElementById('descriptionText')
  descriptionText.classList.toggle('highlight')
});
