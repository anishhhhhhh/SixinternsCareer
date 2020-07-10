const bo = document.querySelector(".BO");
const bd = document.querySelector(".BD");
const t = document.querySelector(".t");
const cards = document.querySelector(".cards")

const businessO = document.querySelector(".businessO");
const businessD = document.querySelector(".businessD");
const tech = document.querySelector(".tech");

const toggleButton = document.querySelector("toggle-button");
const navbarLinks = document.querySelector("navbar-links");

bo.addEventListener("click",()=>{
    
    if(businessO.classList.contains("show")){
        return;
    }
    else{
        bd.classList.remove("active");
        t.classList.remove("active");
        bo.classList.add("active");
        businessO.classList.remove("hide");
        businessO.classList.add("show");
        businessD.classList.remove("show");
        businessD.classList.add("hide");
        tech.classList.remove("show");
        tech.classList.add("hide");
    }

})
bd.addEventListener("click",()=>{
    if(businessD.classList.contains("show")){
        return;
    }
    else{
        bo.classList.remove("active");
        t.classList.remove("active");
        bd.classList.add("active");
        businessD.classList.remove("hide")
        businessD.classList.add("show");
        businessO.classList.remove("show");
        businessO.classList.add("hide");
        tech.classList.remove("show");
        tech.classList.add("hide");
    }

})
t.addEventListener("click",()=>{
    if(tech.classList.contains("show")){
        return;
    }
    else{
        bd.classList.remove("active");
        bo.classList.remove("active");
        t.classList.add("active");
        tech.classList.remove("hide")
        tech.classList.add("show");
        businessO.classList.remove("show");
        businessO.classList.add("hide");
        businessD.classList.remove("show");
        businessD.classList.add("hide");
    }

})



// $(".toggle-button").on("click", function(){
//     $(".toggle-button").toggleClass("change");
//     $(".navbar-links").toggleClass("open");