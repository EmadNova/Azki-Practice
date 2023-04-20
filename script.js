const burgerIcon = document.querySelector(".header__burger-menu");
const burgerMenu = document.querySelector(".navbar");
const cover = document.querySelector(".cover");
const goTop = document.querySelector(".header__desktop");
const dropdowns = document.querySelectorAll(".input__dropdown");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    cover.classList.toggle("cover__show");
});

document.onclick = function (e) {
    if (!burgerMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        burgerMenu.classList.remove("active");
        cover.classList.remove("cover__show");
    }
}

window.addEventListener("scroll", (e) => {
    const scroll = this.scrollY;
    if (scroll > 0) {
        goTop.classList.add("header__desktop__go-top");
    } else {
        goTop.classList.remove("header__desktop__go-top");
    }
})

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.dropdown__select');
    const caret = dropdown.querySelector('.dropdown__arrow');
    const menu = dropdown.querySelector('.dropdown__menu');
    const options = dropdown.querySelectorAll('.menu__list');
    const selected = dropdown.querySelector('.select__selected');

    select.addEventListener('click', () => {
        caret.classList.toggle('arrow-rotate');
        menu.classList.toggle('menu-open');
    });

     options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            caret.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active-list');
            });
            option.classList.add('active-list');

        });
    });
});
