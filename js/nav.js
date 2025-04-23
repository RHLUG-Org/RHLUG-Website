function changeNav() {
    if(document.scrollingElement.scrollTop == 0) {
        document.getElementById("mainNav").classList.add("topOfPage");
    } else {
        document.getElementById("mainNav").classList.remove("topOfPage");
    }
}
