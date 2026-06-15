// @ts-nocheck
let switcherLis = document.querySelectorAll(".switcher li");
let imgColmns = document.querySelectorAll(".our-work .row .all");
switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgcolumns);
});

// remove active class from all imgcolumns and add to currnt
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    // @ts-ignore
    this.classList.add("active");
  });
}
//manage images
function manageImgcolumns() {
  imgColmns.forEach((imgColumn) => {
    imgColumn.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
