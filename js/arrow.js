const arrowSide = document.querySelector(".arrow-side");

window.addEventListener("scroll" , () => {
    if(this.pageYOffset > 300) {
        arrowSide.classList.remove("closed");
    }
    else arrowSide.classList.add("closed");
})