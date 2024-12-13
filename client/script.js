const url = "http://localhost:3000/users";
const contentBox = document.createElement("div");
const ul = contentBox.appendChild(document.createElement("ul"));
document.body.appendChild(contentBox);

function styleBg() {
  // document.body.style.backgroundColor = "#013f5c";
  document.body.style.background = "linear-gradient(135deg, #AC90A9, #E0BBE4)";
  document.body.style.height = "100vh";
}
styleBg();

const pastelHeaven = {
  blue: "#ADD8E6",
  green: "#C6F4D6",
  yellow: "#F7DC6F",
  red: "#FFC0CB",
  purple: "#C5C3C8",
  gray: "#D3D3D3",
};

//--- logiken för att hämta och göra listan --//
fetch(url)
  .then((svaret) => {
    console.log(svaret);
    return svaret.json();
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
    styleListItems(); //den lär stå här inne
  });
//----- end logiken -----//

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
    li.style.marginBottom = "10px";
    li.style.padding = "5px";
    li.style.border = "1px solid lightgray";
    li.style.borderRadius = "5px";
  });
}

// console.log(changeColor);
// console.log(userId);
// const li = (document.createElement("li").style.textColor = user.color);
// console.log(`${li}`);
