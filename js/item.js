clearClass = list => {
    for (var element of list) {
        element.classList.remove("active-img");
    };
}

{
    var imgChilds = document.querySelector(".owl-stage").children;
    for (var element of imgChilds) {
        element.addEventListener('click', function () {
            clearClass(imgChilds);
            var refreshImg = document.querySelector(".item-image");
            refreshImg.style.background = `${this.firstChild.style.background}`;
            this.classList.add("active-img");
        })
    }
}
