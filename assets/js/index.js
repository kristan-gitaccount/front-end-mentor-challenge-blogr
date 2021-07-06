window.addEventListener("load", function () {
  // navbar
  var hamburger = this.document.querySelector(".hamburger");
  var menu_icon = this.document.querySelector(".menu-icon");
  var close_icon = this.document.querySelector(".close-icon");
  var nav = document.querySelectorAll(".nav-list");
  // dropdowns - contents
  var arrow = document.querySelectorAll(".arrow");
  var dropdown = document.querySelectorAll(".dropdown-content");
  

  // navbar
  hamburger.addEventListener("click", (e) => {
    menu_icon.classList.toggle("deactive-menu");
    close_icon.classList.toggle("active-menu");
    nav.forEach((element) => {
      element.classList.toggle("show-nav-list");
    });
  });

  // dropdowns - contents
  arrow.forEach((arrow_element, index, arr) => {
    arr[index].addEventListener("click", (e) => {
      dropdown[index].classList.toggle("show-dropdown-content");
      arrow[index].classList.toggle("arrow-rotate");

    });
  });
});
