const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const carocelReel = document.getElementById("reel");
const slide = document.querySelector(".carocel-card");

const contentWith = carocelReel.clientWidth;

// NextBtn controller.
btnNext.addEventListener("click", () => {
  if (parseInt(carocelReel.scrollWidth) - parseInt(carocelReel.scrollLeft) == contentWith) {
    btnNext.setAttribute("disabled", "");
  } else {
    carocelReel.scrollLeft += slide.clientWidth + 30;
  }
  if(btnPrev.hasAttribute("disabled")){
    btnPrev.removeAttribute("disabled")
  }
});

// PrevBtn controller.
btnPrev.addEventListener("click", () => {
  if (parseInt(carocelReel.scrollLeft) == 0) {
    btnPrev.setAttribute("disabled", "");
  } else {
    carocelReel.scrollLeft -= slide.clientWidth + 30;
  }
  if(btnNext.hasAttribute("disabled")){
    btnNext.removeAttribute("disabled")
  }
});


