function Share() {
  var container = document.querySelector("#container");
  var shareImage = document.querySelector("#image");
  var shareIcon = document.querySelector("#image svg path");
  var triangle = document.querySelector("#triangle");
  var bg = getComputedStyle(shareImage).backgroundColor;

  if (bg === "rgb(236, 242, 248)") {
    shareImage.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.setAttribute("fill", "#ecf2f8");
    container.style.display = "flex";
  } else {
    shareImage.style.backgroundColor = "rgb(236, 242, 248)";
    shareIcon.setAttribute("fill", "#6E8098");
    container.style.display = "none";
  }

  if(window.innerWidth > 768) {
    triangle.style.display = "block";
  } else {
    triangle.style.display = "none";
  }
}