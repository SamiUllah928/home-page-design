let isTrue = true;

// This method is use how to responsive Header through JS (SAME)

// const barSet = document.querySelector(".fa-solid ");
// console.log(barSet);

// barSet.onclick = () => {
//   const getLinks = document.querySelector(".header-links");
//   if (isTrue == true) {
//     getLinks.className = "header-links mobile";
//     console.log(isTrue, "if part");
//     isTrue = false;
//   } else {
//     getLinks.className = "header-links";
//     console.log(isTrue, "else part");

//     isTrue = true;
//   }
// };

// SAME
const barSet = document.querySelector(".fa-bars");
console.log(barSet);
const setNavLinks = document.querySelector(".header-links");

barSet.onclick = () => {
  if (isTrue == true) {
    setNavLinks.classList = "header-links mobile";
    isTrue = false;
  } else {
    setNavLinks.classList = "header-links";
    isTrue = true;
  }
};
