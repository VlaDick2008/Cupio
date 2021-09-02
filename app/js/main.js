$(function(){

  const infoIco = document.querySelector(".info-ico");
  const infoText = document.querySelector(".info-text");
  const infoBtn = document.querySelector(".info-btn");
  if (infoIco) {
    infoIco.addEventListener("click", function (splash) {
      infoIco.classList.toggle("info-ico--active");
      infoText.classList.toggle("info-text--active");
    });
  };



  
});