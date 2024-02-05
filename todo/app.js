document.addEventListener("DOMContentLoaded", function () {
  const add = document.querySelector(".btn");
  const ul = document.querySelector(".ul");

  add.addEventListener("click", () => {
    const input = document.getElementById("myInput").value;

    if (input.trim() !== "") {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const label = document.createElement("label");
      label.appendChild(document.createTextNode(input));

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "⛌";
      deleteBtn.className = "btnDelete";

      deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);
        ul.removeChild(divider); 
      });

      const divider = document.createElement("div");
      divider.className = "divider";

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      ul.appendChild(li);
      ul.appendChild(divider);

      document.getElementById("myInput").value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded" , function () {
  const moonImg = document.querySelector(".moon");
  const mainDiv = document.querySelector(".Main");
  const liDiv = document.querySelector(".LI");
  const BODY = document.body
  const inputElement = document.getElementById("myInput");



  moonImg.addEventListener("click", function () {
    mainDiv.style.backgroundColor = "#232B2B";
    liDiv.style.backgroundColor = "#36454F";
    document.body.style.backgroundColor = "black";
    inputElement.style.backgroundColor = " rgb(54, 69, 79)";
    inputElement.style.borderColor = " rgb(54, 69, 79)";
    moonImg.src = "Combined_Shape.sun.jpg";
  });
});
