// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "60px";
  event.target.style.color = "red";
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", function(event) {
  event.target.style.borderWidth = "thick";
});

const funBus = document.querySelector(".fun-bus");
funBus.addEventListener("dblclick", function(event) {
  event.target.style.width = "1000px";
  event.target.style.height = "500px";
});
