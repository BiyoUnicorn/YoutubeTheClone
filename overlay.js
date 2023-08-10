/*  const menuToggler = document.querySelector(".openMenu");
const overlay = document.querySelector(".overlay");

menuToggler.addEventListener('click', function(){
    overlay.style.display = "block";
});
 */

 const menuToggler = document.querySelector(".openMenu");
const menuClose = document.querySelector('.closeMenu');
const overlayer = document.querySelector(".sector");

menuToggler.onclick = function(){
    overlayer.style.display = "block";
    overlayer.classList.toggle('overlay')
}

menuClose.addEventListener('click', function () {
    overlayer.style.display = "none";
    overlayer.classList.remove('overlay')
});  

/* if (window.matchMedia("(max-width: 900px)").matches) {
    menuToggler.onclick = function(){
        overlayer.style.display = "block";
        overlayer.classList.toggle('overlay')
    }
    
    menuClose.addEventListener('click', function () {
        overlayer.style.display = "none";
        overlayer.classList.remove('overlay')
    });
  } else {
        overlayer.style.display = "block";
        overlayer.classList.remove('overlay')
    } */
  
    // Create a match Function
/*  function myFunction(x) {
    if (x.matches) {
        menuToggler.onclick = function(){
            overlayer.style.display = "block";
            overlayer.classList.toggle('overlay')
        }
        
        menuClose.addEventListener('click', function () {
            overlayer.style.display = "none";
            overlayer.classList.remove('overlay')
        });
    } else {
        overlayer.style.display = "block";
        overlayer.classList.remove('overlay')
    }
  }
  
  // Create a MediaQueryList object
  const mmObj = window.matchMedia("(max-width: 900px)")
  
  // Call the match function at run time:
  myFunction(mmObj);
  
  // Add the match function as a listener for state changes:
  mmObj.addListener(myFunction) */



/*   menuToggler.onclick = function(){
    overlayer.classList.toggle('open-bar')
    overlayer.classList.toggle('overlay')
}

menuClose.addEventListener('click', function () {
    overlayer.classList.remove('open-bar')
    overlayer.classList.remove('overlay')
}); */