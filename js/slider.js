const slideList = [{
        img: "./images/slider/slider-img1.jpg",
        text: "Rozpoczynamy!"
    },
    {
        img: "./images/slider/slider-img2.jpg",
        text: "Historia"
    },
    {
        img: "./images/slider/slider-img3.jpg",
        text: "O mnie"
    }
];

const header = document.querySelector(".header");
const headerButton = document.querySelector(".header--button");
const dots = [...document.querySelectorAll(".dot")];
const arrows = document.querySelectorAll(".header--arrow");

let active = 0;

const changeContent = () => {
    header.style.backgroundImage = `url(${slideList[active].img})`;
    headerButton.textContent = slideList[active].text;

    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");

    header.animate([
        { opacity: '0.5' },
        { opacity: '1' }
      ], {
        duration: 750,
      });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active = index;
        changeContent();
    })
})

arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if (index == 1) {
            active++;
            if (active == slideList.length) active = 0;
        } else {
            active--;
            if (active < 0) active = slideList.length - 1;
        }
        changeContent();
    })
})