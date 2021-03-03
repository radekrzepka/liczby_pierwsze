const hamburgerIcon = document.querySelector(".header--hamburger-icon");
const naviagtionList = document.querySelector(".navigation--list");
const navigation = document.querySelector(".navigation");
const headerImage = document.querySelector(".navigation--logo");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    naviagtionList.classList.toggle("open");
    navigation.classList.toggle("open");
    headerImage.classList.toggle("open");
})