const url = "http://localhost:3000/users";
const contentBox = document.createElement("div");
const ul = contentBox.appendChild(document.createElement("ul"));
document.body.appendChild(contentBox);

//--- logiken för att hämta och göra listan --//
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((jsonData) => console.log(jsonData));

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const html = `<li id="${user.id}">Name: ${user.firstName} ${user.lastName} <br> Username: ${user.username}</li>`;

      ul.insertAdjacentHTML("beforeend", html);

      const userId = document.getElementById(user.id);

      // för att slippa fel om color inte finns
      if (user.color) {
        userId.style.backgroundColor = pastelHeaven[user.color];
      }
    });
    styleListItems(); //den lär stå här inne, det blir fel med syncen annars
  });
//----- end logiken -----//

//--- styling ---//

//färgsamling
const pastelHeaven = {
  blue: "#ADD8E6",
  green: "#C6F4D6",
  yellow: "#F7DC6F",
  red: "#FFC0CC",
  purple: "#D9C4EC",
  gray: "#D3D3D3",
};

function styleBg() {
  document.body.style.background = "linear-gradient(135deg, #AC90A9, #E0BBE4)";
  document.body.style.height = "100vh";
}
styleBg();

//bakgrundsrutan
function styleContentBox() {
  contentBox.style.backgroundColor = "#957DAD";
  contentBox.style.padding = "20px";
  contentBox.style.borderRadius = "10px";
  contentBox.style.boxShadow = "0 4px 8px #000";
  contentBox.style.maxWidth = "600px";
  contentBox.style.margin = "20px auto";
}
styleContentBox();

//själva li-itemsen
function styleListItems() {
  const listItems = document.querySelectorAll("ul li");
  console.log(listItems);
  listItems.forEach((li, index) => {
    li.style.fontFamily = "Arial, sans-serif";
    li.style.lineHeight = "1.8";
    li.style.marginBottom = "10px";
    li.style.padding = "5px";
    li.style.border = "1px solid lightgray";
    li.style.borderRadius = "5px";
    li.style.margin = "10px 0";
    li.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    li.style.transition = "all 0.3s ease";

    // Hover-effekt
    li.addEventListener("mouseenter", () => {
      li.style.transform = "scale(1.02)"; // Subtil skala
      li.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Djupare skugga
    });

    li.addEventListener("mouseleave", () => {
      li.style.color = "#000"; // Återställ textfärg
      li.style.transform = "scale(1)"; // Återställ skala
      li.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // Återställ skugga
    });
  });
}
//--- end styling ---//
