const toggleButton = document.querySelector(".hamburger");
const toggleIcon = document.querySelector(".hamburger i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleButton.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleIcon.classList = isOpen ? "fa fa-xmark" : "fa fa-bars";
});
