const section = document.createElement("section");
const paragraph = document.createElement("p");
const link = document.createElement("a");
const root = document.getElementById("root");
link.href = "#";
link.appendChild(document.createTextNode("Click me"));
paragraph.appendChild(link);
section.appendChild(paragraph);
root.appendChild(section);

section.addEventListener("click", () => {
  console.log("Section");
});

link.addEventListener("click", () => {
  console.log("Link");
});
