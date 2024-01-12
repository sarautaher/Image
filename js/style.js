var imglist=Array.from(document.getElementsByClassName(" img-item"));
 var lightboxcontainer=document.querySelector(".lightbox-container");
 var lightboxitem=document.querySelector(".lightbox-item");
 var prev=document.getElementById("prev");
 var close=document.getElementById("close");
 var next=document.getElementById("next");
 var currntIndex=0;
 for(var i=0;i<imglist.length;i++){
imglist[i].addEventListener('click',function(e){

    currntIndex=imglist.indexOf(e.target);
    var img=e.target.getAttribute('src');
    lightboxcontainer.classList.replace('d-none','d-flex');
    lightboxitem.style.backgroundImage=`url(${img})`;
})
 }
 function slied(i){
    currntIndex=currntIndex+i;
    if(currntIndex==imglist.length){
        currntIndex=0;
    }
    else if(currntIndex==-1){
        currntIndex=imglist.length-1;
    }
    var img=imglist[currntIndex].getAttribute("src");
    lightboxitem.style.backgroundImage=`url(${img})`;
 }
 prev.addEventListener('click',function(){
    slied(-1);
 });
 next.addEventListener('click',function(){
    slied(1);
 });
 function closej(){
    lightboxcontainer.classList.replace('d-flex','d-none');
 }
 close.addEventListener("click",function(){
   closej();
 });
 document.addEventListener("keydown",function(e){
    if(e.key=='ArrowRight'){
        slied(-1);
    }
    else if (e.key=='ArrowLeft'){
        slied(1);
    }
    else if(e.key=='Escape'    ){
        closej();
    }

 })

