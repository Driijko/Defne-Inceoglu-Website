// Mobile Navbar ------------------------------------------------------------------------------------
const menuIcon = document.querySelector(".menuIcon");
const mainbody = document.querySelector(".mainbody");
const navbar = document.querySelector(".navbar");
const navbarExitContainer = document.querySelector(".navbarExitContainer");
const navbarExitIcon = document.querySelector(".navbarExit");

menuIcon.onmouseover = function() {
  menuIcon.src = "Resources/General/menuIconHover.png";
};

menuIcon.onmouseout = function() {
  menuIcon.src =
    "Resources/General/68898280_501021763988092_1101596984722063360_n.png";
};

menuIcon.onclick = function() {
  menuIcon.style.display = "none";
  mainbody.style.display = "none";
  navbar.style.position = "static";
  navbar.style.display = "flex";
  navbar.style.width = "40%";
  navbar.style.fontSize = "1.5em";
  navbar.top = "2em";
  navbarExitContainer.style.display = "flex";
};

navbarExitIcon.onclick = function() {
  menuIcon.style.display = "block";
  mainbody.style.display = "block";
  navbar.style.position = "fixed";
  navbar.style.display = "none";
  navbar.style.width = "12%";
  navbar.style.fontSize = "1em";
  navbar.top = "0";
  navbarExitContainer.style.display = "none";
};

// Restore NavBar upon enlargening window width.
function restoreNavBar() {
  windowWidth = window.innerWidth;
  if (windowWidth > 480) {
    navbar.style.display = "flex";
  } else navbar.style.display = "none";
}

window.addEventListener("resize", restoreNavBar);

// PicGrid Zooming -----------------------------------------------------------------------------------
let zoom = false;

//const testBox = document.querySelector(".testBox");
//  testBox.innerHTML = "Hello";
const picGridList = document.querySelectorAll(".gridImage");
const zoomImageList = document.querySelectorAll(".zoomImage");
const horizontalList = document.querySelectorAll(".horizontalImage");
const zoomLayer = document.querySelector(".zoomLayer");

// testBox.innerHTML = String(horizontalList.length);
// const zoomLayer = document.querySelector(".zoomLayer");
const zoomImageContainer = document.querySelector(".zoomImageContainer");
let currentZoomImage;

const clickGridPic = function(event) {
  if (zoom === false) {
    zoomLayer.style.display = "flex";
    zoomImageContainer.style.display = "flex";
    for (let i = 0; i < picGridList.length; i++) {
      if (event.target === picGridList[i]) {
        zoomImageList[i].style.display = "block";
        currentZoomImage = zoomImageList[i];
        zoom = true;
        break;
      }
    }
    for (let i = 0; i < horizontalList.length; i++) {
      if (event.target === horizontalList[i]) {
        zoomImageContainer.style.alignItems = "center";
      }
    }
  }
};

picGridList.forEach(pic => {
  pic.onclick = clickGridPic;
});

zoomLayer.onclick = function() {
  if (zoom === true) {
    zoomLayer.style.display = "none";
    zoomImageContainer.style.display = "none";
    zoomImageContainer.style.alignItems = "initial";
    currentZoomImage.style.display = "none";
    zoom = false;
  }
};
