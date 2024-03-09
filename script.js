// OPENTAB FUNCTION
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// PRELOADER
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})
// NAVIGATON BAR RESPONSIVE
var res = document.getElementById("sidemenu");
function openmenu(){
    res.style.right="0";
}
function closemenu(){
    res.style.right="-200px";
}
// Dark,Light Mode Switch
var theme=document.getElementById("theme-btn");
localStorage.setItem("theme", "dark");
theme.onclick = function(){
    document.body.classList.toggle("light");
}