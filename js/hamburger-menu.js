const hamburgerIcon = document.querySelector(".header--hamburger-icon");
const naviagtionList = document.querySelector(".navigation--list");
const navigation = document.querySelector(".navigation");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    naviagtionList.classList.toggle("open");
    navigation.classList.toggle("open");
})