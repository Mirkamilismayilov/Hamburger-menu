let burg = document.querySelector(".fa-bars");
let clos = document.querySelector(".fa-xmark");
let bod = document.querySelector("body")
let ope = document.querySelector(".fa-bars-open")

 burg.addEventListener("click" , ()=> {
     ope.style.left = "0"
     ope.style.display ="block"
    
 })
 




clos.addEventListener("click" , ()=> {
    ope.style.left = "-100%"
})
