const D = document;
const body = D.querySelector("body");

//Toggler menu
(function menuToggler() {
  let toggler = D.querySelector(".header-toggler"),
    headerMenu = D.querySelector(".header-menu");
  function openMenu() {
    this.classList.toggle("header-toggler_opened");
    headerMenu.classList.toggle("header-menu_open");
    body.classList.toggle("overflow_h");
  }
  toggler.addEventListener("click", openMenu);
})();

//Custom select
if (document.querySelector(".ui-select-label")) {
  const select = document.querySelector(".ui-select-label");
  const options_list = document.querySelector(".ui-select-list");
  const options = document.querySelectorAll(".ui-select-list__option");
  const selectedValue = D.querySelector(".ui-select__options");
  //show & hide options list
  select.addEventListener("click", () => {
    select.classList.toggle("ui-select-label_open");
    options_list.classList.toggle("active");
    select
      .querySelector(".ui-select-label__icon")
      .classList.toggle("ui-select-label__icon_open");
  });

  //select option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((option) => {
        option.classList.remove("selected");
      });
      select.querySelector("span").innerHTML = option.innerHTML;
      selectedValue.value = option.innerHTML;
      option.classList.add("selected");
      options_list.classList.toggle("active");
      select
        .querySelector(".ui-select-label__icon")
        .classList.toggle("ui-select-label__icon_open");
      select.classList.remove("ui-select-label_open");
    });
  });
}

//Input range
if (D.querySelector(".ui-field-range__input")) {
  let rangeValue = D.querySelector(".ui-field-range__value-num"),
    rangeInput = D.querySelector(".ui-field-range__input");

  rangeValue.innerHTML = rangeInput.value;
  rangeInput.oninput = function () {
    rangeValue.innerHTML = this.value;
  };
}


//carousel

const fbItems = D.querySelectorAll('.feedback-item'),
 fbWrap = D.querySelector('.feedback-wrapper'),
 fbDir = D.querySelectorAll('.feedback-arrows__item');


 let fbWidth =  fbWrap.offsetWidth;
 window.addEventListener('resize', () => {
  console.log('asd')
  fbWidth =  fbWrap.offsetWidth;
})
 let fbPosition = 0;

fbDir.forEach((arrow) => {
  arrow.addEventListener('click', (elem) => {
    const fbDataSet =  elem.target.dataset.direction;
    const blockedArrow = D.querySelectorAll('.feedback-arrows__item_blocked')
    blockedArrow.forEach((e) => {
      e.classList.remove('feedback-arrows__item_blocked')
    })
    if(fbDataSet == 'prev') {
      if(fbPosition +  fbWidth <= fbWidth) {
        arrow.classList.add('feedback-arrows__item_blocked')
        return
      } else {
        arrow.classList.remove('feedback-arrows__item_blocked')
        fbPosition =  fbPosition - fbWidth
        fbWrap.style.right = fbPosition + 'px';
      }
      
    }
    if(fbDataSet == 'next') {
      if(fbPosition >= fbWidth * 2) {
        arrow.classList.add('feedback-arrows__item_blocked')
        return
      } else {
        arrow.classList.remove('feedback-arrows__item_blocked')
        fbPosition =  fbPosition + fbWidth
        fbWrap.style.right = fbPosition + 'px';
      }
    }
  })
})
