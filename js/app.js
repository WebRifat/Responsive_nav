let menubtn = document.querySelector(".menubtn");
let body = document.querySelector("body");
let menu = document.querySelector(".menu");




function Menubutton () {

    body.classList.add("active");




}


menubtn.addEventListener("click", Menubutton);





let cancelbtn = document.querySelector(".cancelbtn");


function cancelbutton () {
    body.classList.remove("active");

}


cancelbtn.addEventListener("click", cancelbutton);