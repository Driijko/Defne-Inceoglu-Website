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
// We connect to the DOM. Note that we have two lists here.
const picGridList = document.querySelectorAll(".gridImage");
const zoomImageList = document.querySelectorAll(".zoomImage");
const zoomLayer = document.querySelector(".zoomLayer");
const zoomImageContainer = document.querySelector(".zoomImageContainer");
const zoomTextBox = document.querySelector(".zoomTextBox");

// We'll use these two variables to keep track of whether the user has clicked on an image to zoom it,
// and what image is currently zoomed.
let zoom = false;
let currentZoomImage;


// Each image has a different accompanying text, displayed in the zoomTextBox Element.
// We'll organize these into three arrays, one for either the design, painting or photography pages.
// We check to see if we are on the design, painting, or photography page.
const currentNavString = document.querySelector(".currentNav").innerHTML;
let currentPage;
if (currentNavString === "VISUAL DESIGN") currentPage = "design";
else if (currentNavString === "PAINTING") currentPage = "painting";
else if (currentNavString === "PHOTOGRAPHY") currentPage = "photography";

const designPageZoomTexts = [];
designPageZoomTexts[0] = "Gentle Persuasion EP Cover, cassette tape and zine (2013)";
designPageZoomTexts[1] = "Fallen Love Records Logo (2012-2013)";
designPageZoomTexts[2] = "Fallen Love Records Poster (2013)";
designPageZoomTexts[3] = "Arkadas Logo (2013)";
designPageZoomTexts[4] = "Donate Poster (2018)";
designPageZoomTexts[5] = "Dios Mio Logo (2019)";
designPageZoomTexts[6] = "Rise Above Ad #1 (2018)";
designPageZoomTexts[7] = "Love Me Tender Poster (2017)";
designPageZoomTexts[8] = "Play Well Poster (2019)";
designPageZoomTexts[9] = "Play Well Poster (2019)";
designPageZoomTexts[10] = "Rise Above Special Menu (2017)";
designPageZoomTexts[11] = "Rise Above Special Menu (2017)";
designPageZoomTexts[12] = "Rise Above Ad #2 (2017)";
designPageZoomTexts[13] = "Vintage Tech Poster (2018)";
designPageZoomTexts[14] = "Form on a Pastel Plane: Feel (2017)";
designPageZoomTexts[15] = "Form on a Pastel Plane: Hashtag (2017)";
designPageZoomTexts[16] = "Form on a Pastel Plane: (2017)";
designPageZoomTexts[17] = "Form on a Pastel Plane: (2017)";
designPageZoomTexts[18] = "Form on a Pastel Plane: (2017)";
designPageZoomTexts[19] = "Form on a Pastel Plane: Push Here to Cry (2017)";
designPageZoomTexts[20] = "Form on a Pastel Plane: Pyramids at Night (2017)";
designPageZoomTexts[21] = "Form on a Pastel Plane: Vampire Teeth Falling (2017)";

const paintingPageZoomTexts = [];


const photoPageZoomTexts = [];

// Zoom in on an image by clicking it.
const clickGridPic = function(event) {
  if (zoom === false) {
    zoomLayer.style.display = "flex";
    zoomImageContainer.style.display = "flex";
    for (let i = 0; i < picGridList.length; i++) {
      if (event.target === picGridList[i]) {
        zoomImageList[i].style.display = "block";
        currentZoomImage = zoomImageList[i];
        zoom = true;
        if (currentPage = "design") {
          zoomTextBox.innerHTML = designPageZoomTexts[i];
        } else if (currentPage = "painting") {
          zoomTextBox.innerHTML = paintingPageZoomTexts[i];
        } else if (currentPage = "photography") {
          zoomTextBox.innerHTML = photoPageZoomTexts[i];
        }
        break;
      }
    }
  }
};

picGridList.forEach(pic => {
  pic.onclick = clickGridPic;
});

// Click anywhere on the zoomLayer Element to un-zoom and return to the starting display of the page.
zoomLayer.onclick = function() {
  if (zoom === true) {
    zoomLayer.style.display = "none";
    zoomImageContainer.style.display = "none";
    zoomImageContainer.style.alignItems = "initial";
    currentZoomImage.style.display = "none";
    zoom = false;
  }
};
