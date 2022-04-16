let button = document.getElementById("button");

button.addEventListener("click",mobileNav);

window.onresize = desktopNav;


  function mobileNav() {
    $("#mobile-header-menu").slideToggle();
  }

  function desktopNav() {
      let y = document.getElementById("desktop-site-navigation");
      if(window.innerWidth >499) {
          y.style.display = "flex";
        
      } else {
          y.style.display = "none";
      }
  }