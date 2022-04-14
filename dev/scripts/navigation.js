let button = document.getElementById("button");

button.addEventListener("click",myFunction);

window.onresize = myFunction2;



function myFunction() {
	let x = document.getElementById("mobile-header-menu");
    if(window.innerWidth < 500){
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
    } 
    // else {
    //     x.style.display = "flex";
    // }
  }

  function myFunction2() {
      let y = document.getElementById("desktop-site-navigation");
      if(window.innerWidth >499) {
          y.style.display = "flex";
        
      } else {
          y.style.display = "none";
      }
  }