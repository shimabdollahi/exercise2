 const body=document.querySelector("body");
 console.log(body);
 const menu=document.getElementById("offcanvas");
const hamburgerBtn=document.getElementsByClassName("hamburger-btn")[0];
 function toggleMenu(){
   menu.classList.remove("hide");   
   menu.classList.add("drawer-show");
   hamburgerBtn.classList.add("hide");

 }
 function closeMenu(){
   menu.classList.remove("drawer-show");
   menu.classList.add("drawer-hide");
   setTimeout(()=>{
      menu.classList.add("hide");
      menu.classList.remove("drawer-hide");
      hamburgerBtn.classList.remove("hide");
   },390 );
 }
 body.addEventListener('click' , (e)=>{
   if(!(menu.classList.contains("hide"))){
      closeMenu();
   }
 });

 menu.addEventListener('click' , (e)=>{
   e.stopPropagation();
 });
 hamburgerBtn.addEventListener('click' , (e)=>{
   e.stopPropagation();
 });