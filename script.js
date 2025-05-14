function changeText() {
  const textElement = document.getElementById("dynamic-text");
  textElement.textContent = "You're now a DOM Manipulator!";
}

function changeStyle() {
  const textElement = document.getElementById("dynamic-text");
  textElement.style.color = "crimson";
  textElement.style.fontSize = "1.5rem";
  textElement.style.fontWeight = "bold";
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "A new EPL club has been added!";
  newPara.className = "box";
  document.getElementById("content-area").appendChild(newPara);
}

function removeElement() {
  const content = document.getElementById("content-area");
  if (content.lastElementChild && content.children.length > 1) {
    content.removeChild(content.lastElementChild);
  }
}
