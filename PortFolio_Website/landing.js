function myfunction(e) {
    // e.preventDefault();
    e.stopPropagation();
    let parent = document.getElementById("nav_items");

    console.log(e);
    let child = parent.childNodes;
    child.forEach((el) => {
        if (el.className) {
            el.classList.remove("active");
        }
    });
    console.log();
    e.target.parentElement.classList.add("active");
}