const slideList = [{
        img: "./images/slider/slider-img1.jpg",
        text: "Rozpoczynamy!"
    },
    {
        img: "./images/slider/slider-img1.jpg",
        text: "Historia"
    },
    {
        img: "./images/slider/slider-img1.jpg",
        text: "O mnie"
    }
];

const header = document.querySelector(".header");
const headerButton = document.querySelector(".header--button");
const dots = [...document.querySelectorAll(".dot")];

let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        active = index;

        header.style.backgroundImage = `url: ("${slideList[active].img}")`;
        headerButton.textContent = slideList[active].text;

        changeDot();
    })
})