function Share() {
    var shareContainer = document.querySelector("#share");
    var container = document.querySelector("#container");
    var shareImage = document.querySelector("#image");
    var shareIcon = document.querySelector("#image svg path");
    var avatarInfo = document.querySelector("figure");
    var avatar = document.querySelector("#avatar");
    var triangle = document.querySelector("#triangle");
    var bg =  getComputedStyle(shareImage).backgroundColor;

    if(window.innerWidth > 768) {
        if (bg === "rgb(236, 242, 248)") {
            shareContainer.style.display = "flex";
            shareImage.style.backgroundColor = "hsl(214, 17%, 51%)"; 
            shareIcon.setAttribute("fill", "#ecf2f8");
            container.style.display = "flex"
            triangle.style.display = "block";
        } else {
            shareContainer.style.display = "none";
            shareImage.style.backgroundColor = "rgb(236, 242, 248)";
            shareIcon.setAttribute("fill", "#6E8098");
            triangle.style.display = "none";
            container.style.display = "none";
        }
    } else {
        if (bg === "rgb(236, 242, 248)") {
            shareImage.style.backgroundColor = "hsl(214, 17%, 51%)"; 
            shareIcon.setAttribute("fill", "#ecf2f8");
            container.style.display = "flex";
        } else {
            shareImage.style.backgroundColor = "rgb(236, 242, 248)";
            shareIcon.setAttribute("fill", "#6E8098");
            container.style.display = "none";
        }
    }
}