var button = document.getElementById("button");

button.addEventListener("click",myFunction);

window.onresize = myFunction2;



function myFunction() {
	var x = document.getElementById("header-menu");
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
      var x = document.getElementById("header-menu");
      if(window.innerWidth >499) {
          x.style.display = "flex";
        
      } else {
          x.style.display = "none";
      }
  }