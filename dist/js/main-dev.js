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
