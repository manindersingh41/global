"use strict";
var underlineMenuItems = document.querySelectorAll("ul li");
underlineMenuItems.classList.add("act");

underlineMenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    underlineMenuItems.forEach(function (item) {
      return item.classList.remove("act");
    });
    item.classList.add("act");
  });
});
