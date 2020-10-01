// hamburger button 
var btn =document.getElementById("hamburger-menu")
var navbrand = document.getElementById("navbrand");


btn.addEventListener('click', ({ target }) => {
    target.classList.toggle('open')	
    
})


//brand name highlight on hamburger click
var hanbclick=true
btn.addEventListener('click',({ target }) => {navbrand.style.color= "rgb(255, 0, 0)";
if (hanbclick == true) {
navbrand.style.boxShadow ="0 0 25px rgb(255, 7, 10),0 0 5px rgb(255, 7, 10),0 0 25px rgb(255, 7, 10)"
hanbclick=false;
}
else{
navbrand.style.boxShadow = "none"
hanbclick=true;
}
});

//brand name highlight on mouse hover
navbrand.addEventListener("mouseover", brandover, false);
navbrand.addEventListener("mouseout", brandnothover, false);
function brandover(){
    navbrand.style.boxShadow = "0 0 25px rgb(255, 7, 10),0 0 5px rgb(255, 7, 10),0 0 25px rgb(255, 7, 10)" 
}
function brandnothover(){
    navbrand.style.boxShadow = "none" 
}


//navbar tubelight colour changing
var clrstatewhite = true;
setInterval(function startlogo(){

    if(clrstatewhite == true)
    {
      navbrand.style.color="red";
      clrstatewhite=false
    }
    else
      {
        navbrand.style.color="white";  
        clrstatewhite=true
    }
},1500);



// contact us button hover
var cntctbtn = document.getElementById("cntct-us-btn");
cntctbtn.addEventListener("mouseover",function(){
    cntctbtn.style.background = "linear-gradient(to right,#B80F0A , #410101)";
    cntctbtn.style.color= "rgb(255, 213, 213)";
    cntctbtn.style.fontWeight = "700";


})
var cntctbtn = document.getElementById("cntct-us-btn");
cntctbtn.addEventListener("mouseout",function(){
    cntctbtn.style.background = "none";
    cntctbtn.style.color= "Red";
    cntctbtn.style.fontWeight = "500";
})

//landing title
var lndtit = document.getElementById("landing-title-id");
var x = 0;
setInterval(() => {
    x=6
    lndtit.style.fontSize= x+"vh";
   },500);

//contact us
setInterval(() => {
document.getElementById("cntct-us-btn").style.visibility="visible";
},1800);




    const abtuscntl = document.getElementById('left-content-txt') ;
    const abtuscntr = document.getElementById('right-content-id') ;
    var abtid = document.getElementById("About-Us");
    window.addEventListener('scroll', function scrolleffect() {
       
        var x = (abtid.offsetHeight)+400;
     

    if(window.scrollY >= 250 && window.scrollY <= x) {
        abtuscntl.style.opacity = '0.9';
        abtuscntl.style.transform = 'translateX(0px)';
        abtuscntl.style.transition = '1s ease-in-out';

        abtuscntr.style.opacity = '1';
        abtuscntr.style.transform = 'translateX(0px)';
        abtuscntr.style.transition = '1s ease-in-out';
        
    }
    else{
        abtuscntl.style.opacity ='0';
        abtuscntl.style.transform = 'translateX(+1400px)';
  

        abtuscntr.style.opacity ='0';
        abtuscntr.style.transform = 'translateX(-1400px)';
        
    }
});




var ftrid = document.getElementById("features");
var ftrtubelightid = document.querySelectorAll("span");

ftrid.addEventListener('mouseover', function() {
    
        ftrtubelightid[11].style.visibility="visible";
        // ftrtubelightid[12].style.visibility="visible";
        ftrtubelightid[13].style.visibility="visible";
        // ftrtubelightid[14].style.visibility="visible";

}); 




ftrid.addEventListener('mouseout', function() {
    
    ftrtubelightid[11].style.visibility="hidden";
    ftrtubelightid[12].style.visibility="hidden";
    ftrtubelightid[13].style.visibility="hidden";
    ftrtubelightid[14].style.visibility="hidden";
   
}); 

var bil = document.getElementById("bicepimgl"); 
var bir = document.getElementById("bicepimgr");  

setInterval(function trnr(){

  bicepvis=true; 
    if(bicepvis == true)
    {
      bil.style.visibility="visible";
      bicepvis=false;
    }
    else
      {
        bil.style.visibility="hidden";
        bicepvis=true;
    }
},1000);






















