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

navigation.forEach(item => {
  item.addEventListener("mouseleave", function(event) {
    event.target.style.color = "black";
    event.target.style.fontSize = "16px";
    event.preventDefault();
  });
});

const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "60px";
  event.target.style.color = "red";
});
logoHeading.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "40px";
  event.target.style.color = "black";
});

const image = document.querySelectorAll("img");
image.forEach(function(item) {
  item.addEventListener("mouseover", function(event) {
    event.target.style.borderRadius = "100px";
  });
});

image.forEach(function(item) {
  item.addEventListener("mouseleave", function(event) {
    event.target.style.borderRadius = "15px";
  });
});

const btn = document.querySelectorAll(".btn");
btn.forEach(item => {
  item.addEventListener("click", function(event) {
    event.target.style.borderWidth = "thick";
    event.target.style.background = "crimson";
    event.preventDefault();
  });
});

btn.forEach(item => {
  item.addEventListener("mouseout", function(event) {
    event.target.style.borderWidth = "thin";
    event.target.style.background = "#17A2B8";
    event.target.style.color = "#FFFFFF";
    event.preventDefault();
  });
});

const funBus = document.querySelector(".fun-bus");
funBus.addEventListener("mouseover", function(event) {
  event.target.style.borderRadius = "100px";
  event.target.style.transform = "rotate(10deg)";
  event.target.style.animation = "rotate .8s infinite linear";
});

funBus.addEventListener("mouseout", function(event) {
  event.target.style.transform = "rotate(0deg)";
  event.target.style.animation = "rotate .8s infinite linear";
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

const input = document.querySelectorAll(".input");
input.forEach(item => {
  item.addEventListener("focus", function(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.fontSize = "20px";
    event.target.style.color = "white";
  });
});

input.forEach(item => {
  item.addEventListener("mouseleave", function(event) {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
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

const adAwaits = document.getElementById("adAwaits");
adAwaits.addEventListener("click", function(event) {
  console.log(`ad awaits fired!`);
});

const pickDestine = document.getElementById("pickDestine");
pickDestine.addEventListener("click", function(event) {
  console.log(`pick destination fired!`);
  // event.stopPropagation();
});
