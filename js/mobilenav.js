// MOBILE MENU TOGGLE-CLOSE
document.getElementById("menuburger").addEventListener("click", toggleMenu);
function toggleMenu() {
  let toggle = document.getElementById("mobile");
  if (toggle.style.display === "none") {
    toggle.style.display = "flex";
  } else {
    toggle.style.display = "none";
  }
};

document.getElementById("menuburgerclose").addEventListener("click", closeMenu);
function closeMenu() {
  let close = document.getElementById("mobile");
  if (close.style.display === "flex") {
    close.style.display = "none";
  } else {
    close.style.display = "flex";
  }
};
