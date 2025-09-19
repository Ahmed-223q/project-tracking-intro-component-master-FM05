let listIcon = document.getElementById("listIcon");
let list = document.getElementById("list");

listIcon.onclick = () => {
  if (listIcon.getAttribute("src") === "images/icon-hamburger.svg") {
    listIcon.src = "images/icon-close.svg";
    list.style.display = "flex";
  } else {
    listIcon.src = "images/icon-hamburger.svg";
    list.style.display = "none";
  }
};
