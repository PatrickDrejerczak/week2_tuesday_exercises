let message = document.getElementById("result");

const yes = ["Yes!", "Sure!", "Of course!"];
const no = ["No way!", "Never!", "Not a chance!"];

function getRandomItem() {
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber == 1) {
    let randomYesValue = yes[Math.floor(Math.random() * yes.length)];
    message.innerHTML = randomYesValue;
  } else if (randomNumber == 0) {
    let randomNoValue = no[Math.floor(Math.random() * no.length)];
    message.innerHTML = randomNoValue;
  }
}
