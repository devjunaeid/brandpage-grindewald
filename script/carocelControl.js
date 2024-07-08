const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const carocelReel = document.getElementById("reel");
const slide = document.querySelector(".carocel-card");

const contentWith = carocelReel.clientWidth;

// NextBtn controller.
btnNext.addEventListener("click", () => {
  if(btnPrev.hasAttribute("disabled")){
    btnPrev.removeAttribute("disabled")
  }
  if (parseInt(carocelReel.scrollWidth) - parseInt(carocelReel.scrollLeft) == contentWith) {
    console.log("inside if");
    btnNext.setAttribute("disabled", "");
  } else {
    carocelReel.scrollLeft += slide.clientWidth + 30;
  }
});

// PrevBtn controller.
btnPrev.addEventListener("click", () => {
  if(btnNext.hasAttribute("disabled")){
    btnNext.removeAttribute("disabled")
  }
  if (parseInt(carocelReel.scrollLeft) == 0) {
    console.log("inside if");
    btnPrev.setAttribute("disabled", "");
  } else {
    carocelReel.scrollLeft -= slide.clientWidth + 30;
  }
});
