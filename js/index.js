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

window.addEventListener("keydown", function(event) {
  console.log(`you pressed down this key ${event.key}`);
});

window.addEventListener("resize", display);
function display() {
  const x = document.querySelectorAll(".text-content");
  x.forEach(function(event) {
    event.style.background = "purple";
    event.style.padding = "20px";
    event.style.borderRadius = "30px";
    event.style.color = "white";
  });
}

window.addEventListener("resize", play);
function play() {
  const x = document.querySelector("adAwaits");
  x.style.background = "purple";
  x.style.padding = "20px";
  x.style.borderRadius = "30px";
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
  function() {
    const mainNavig = document.querySelector(".main-navigation");
    mainNavig.style.background = "crimson";
    mainNavig.style.color = "white";
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
