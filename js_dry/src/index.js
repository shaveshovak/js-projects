document.querySelector(".names").innerHTML += "Bob is here <br />";
document.querySelector(".names").innerHTML += "John is here <br />";
document.querySelector(".names").innerHTML += "Sarah is here <br />";

// const listEl = document.querySelectorAll("li");
// console.log(listEl);

const addName = (name, lName) =>
  (document.querySelector(
    ".names"
  ).innerHTML += `${name} is here ${lName} <br />`);

// name + 'is here <br />' + lastname

// +=.   1 + String + 2 ......

addName("Bob", "Smith");
addName("John", "Smith");
addName("Sarah", "Smith");

// Another example
const names = ["Bob", "John", "Sarah"];

names.forEach((name) => console.log(`${name} is here`));

names.forEach(
  (name) =>
    (document.querySelector(".names").innerHTML += `${name} is here <br /> `)
);

// another example
const names2 = ["Bob", "John", "Sarah"];

names2.forEach((item) => {
  document.querySelector(".names").innerHTML += item + " is here <br />";
});
