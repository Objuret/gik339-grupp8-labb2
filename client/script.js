const url = "http://localhost:3000/users";
const ul = document.createElement("ul");
document.body.appendChild(ul);

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
        userId.style.color = user.color;
      }
    });
  });

const listItems = document.querySelectorAll("ul li");

function changeColor() {
  listItems.style.fontFamily = "Arial, sans-serif"; // Ändra font
  listItems.style.marginBottom = "10px"; // Lägg till lite avstånd
  listItems.style.padding = "5px"; // Lägg till padding
  listItems.style.border = "1px solid lightgray"; // Lägg till en ram
  listItems.style.borderRadius = "5px"; // Rundade hörn

  // Ändra bakgrundsfärg varannan rad (alternativ styling)
  if (index % 2 === 0) {
    li.style.backgroundColor = "#f9f9f9"; // Ljusgrå
  } else {
    li.style.backgroundColor = "#e0e0e0"; // Mörkare grå
  }
}
changeColor();
// console.log(userId);
// const li = (document.createElement("li").style.textColor = user.color);
// console.log(`${li}`);
