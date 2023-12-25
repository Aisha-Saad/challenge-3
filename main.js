
let fisrtIndex=1;
function autoSlide(){
  setTimeout(autoSlide,3000);
  let pice;
  const img=document.getElementsByClassName("slide-img");
  for(pice=0; pice<img.length ;pice++){
    img[pice].style.display="none";
  }
  fisrtIndex ++ ;
  if(fisrtIndex >img.length){
    fisrtIndex=1;
  }
  img[fisrtIndex - 1].style.display="block"
}

autoSlide();
