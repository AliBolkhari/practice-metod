function showAlert() {
  window.alert("Hello Ali!");
}

function askConfirm() {
  const result = window.confirm("Do you like JavaScript?");
  document.getElementById("output").innerText = "Confirm result: " + result;
}

function askName() {
  const name = window.prompt("What is your name?");
  document.getElementById("output").innerText = "Your name is: " + name;
}

function goToGoogle() {
  window.open("https://www.google.com", "_blank");
}

function refreshPage() {
  window.location.reload();
}

function scrollDownPage() {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
}

function showSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("output").innerText =
    "Width: " + width + "px, Height: " + height + "px";
}
