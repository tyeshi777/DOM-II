// Your code goes here
window.addEventListener("load", function() {
  console.log(`your page is loaded`);
});

const navigation = document.querySelectorAll("a");
// console.log(navigation);
navigation.forEach(item => {
  item.addEventListener("mouseenter", function(event) {
    event.target.style.color = "red";
    event.target.style.fontSize = "20px";
    event.preventDefault();
  });
});

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "60px";
  event.target.style.color = "red";
});

const btn = document.querySelectorAll(".btn");
btn.forEach(item => {
  item.addEventListener("click", function(event) {
    event.target.style.borderWidth = "thick";
    event.target.style.background = "crimson";
    event.preventDefault();
  });
});

const funBus = document.querySelector(".fun-bus");
funBus.addEventListener("dblclick", function(event) {
  event.target.style.width = "1000px";
  event.target.style.height = "500px";
});

window.addEventListener("keydown", function(event) {
  console.log(`you pressed down this key ${event.key}`);
});

window.addEventListener("resize", display);
function display() {
  const x = document.querySelector(".text-content");
  x.style.background = "purple";
  x.style.color = "white";
}

var input = document.querySelectorAll(".input");
input.forEach(item => {
  item.addEventListener("focus", function(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
  });
});

window.addEventListener(
  "scroll",
  function(event) {
    console.log(event);
  },
  true
);

function mySelectFunction() {
  document.getElementById("myText").select();
}
