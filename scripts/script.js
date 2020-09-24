"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const openerNavigationMenu = document.querySelector(".menu-bar"),
       darkLayer = document.querySelector(".dark-layer"),
       navigationMenu = document.querySelector(".site-nav"),
       closerNavigationMenu = document.querySelector(".nav-close");
   function showNav() {
      navigationMenu.classList.remove("hide-nav");
      navigationMenu.classList.add("show-nav");
      darkLayer.classList.remove("hide");
      openerNavigationMenu.classList.add("hide");
      document.body.style.overflow = "hidden";
   }
   function closeNav() {
      navigationMenu.classList.remove("show-nav");
      navigationMenu.classList.add("hide-nav");
      darkLayer.classList.add("hide");
      openerNavigationMenu.classList.remove("hide");
      document.body.style.overflow = "";
   }
   openerNavigationMenu.addEventListener("click", showNav);
   closerNavigationMenu.addEventListener("click", closeNav);
   darkLayer.addEventListener("click", closeNav);
   window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
         closeNav();
      }
   })
})