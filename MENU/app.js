const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

one.addEventListener("click", () => {
  sidebar.className = "sidebar one";
  activeListItem = "list-item active"
})

two.addEventListener("click", () => {
  sidebar.className = "sidebar two";
  activeListItem = "list-item active two"
})

three.addEventListener("click", () => {
  sidebar.className = "sidebar three";
  activeListItem = "list-item active three"
})