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
// We add an event listener that checks to see when a page has finished loading, and then checks
// if we are on the design, painting or photo page.
// Further down, on the event listener for clicking an image, we will use the variable currentPage
// to determine which text to select to accompany a given image.
let currentPage;
let currentNavButton;
window.addEventListener("load", event => {
  currentNavButton = document.querySelector(".currentNav");
  if (currentNavButton.innerHTML === "VISUAL DESIGN") {
    currentPage = "design";
  } else if (currentNavButton.innerHTML === "PAINTING") {
    currentPage = "painting";
  } else if (currentNavButton.innerHTML === "PHOTOGRAPHY") {
    currentPage = "photography";
  }
});

const designPageZoomTexts = [];
designPageZoomTexts[0] =
  "Gentle Persuasion EP Cover, cassette tape and zine (2013)";
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
designPageZoomTexts[16] = "Form on a Pastel Plane: Hexa-gone (2017)";
designPageZoomTexts[17] =
  "Form on a Pastel Plane: I Miraculously Woke Up (2017)";
designPageZoomTexts[18] =
  "Form on a Pastel Plane: Moons Waxing and Waning (2017)";
designPageZoomTexts[19] = "Form on a Pastel Plane: Push Here to Cry (2017)";
designPageZoomTexts[20] = "Form on a Pastel Plane: Pyramids at Night (2017)";
designPageZoomTexts[21] =
  "Form on a Pastel Plane: Vampire Teeth Falling (2017)";

const paintingPageZoomTexts = [];
paintingPageZoomTexts[0] = "No Middle (2014) Pencil Crayon on Paper";
paintingPageZoomTexts[1] = "Self-Portrait (2015) Watercolour on Paper";
paintingPageZoomTexts[2] = "Mountain Man (2014) Pencil Crayon on Paper";
paintingPageZoomTexts[3] = "Untitled (2014) Pencil Crayon on Paper";
paintingPageZoomTexts[4] =
  "Self-Portrait (2014) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[5] = "Bathtub 2 (2012) Watercolour on Paper";
paintingPageZoomTexts[6] = "Sketchbook Page (2012) Pen on Paper";
paintingPageZoomTexts[7] = "Kissin (2013) Watercolour and Pencil on Paper";
paintingPageZoomTexts[8] =
  "Self-Portrait (2013) Watercolour and Collage on Paper";
paintingPageZoomTexts[9] = "Don't Bother (2012) Ink and Watercolour on Paper";
paintingPageZoomTexts[10] =
  "A Birthday Card (2014) Ink and Pencil-Crayon on Paper";
paintingPageZoomTexts[11] = "Bathtub (2011) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[12] =
  "Mountain Man Revisits (2015) Ink and Acrylic on Cardboard";
paintingPageZoomTexts[13] =
  "Self-Portrait (2014) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[14] = "Deathbed (2012) Watercolour and Collage on Paper";
paintingPageZoomTexts[15] = "Black Hole Lover (2012) Ink on Paper";
paintingPageZoomTexts[16] =
  "Self-Portrait (2012) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[17] = "Andrew (2012) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[18] = "Lindsay (2014) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[19] =
  "Afghan Center (2012) Acrylic, Watercolour and Collage on Paper";
paintingPageZoomTexts[20] =
  "Self-Portrait (2014) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[21] = "It's Really Foggy Today (2012) Ink on Paper";
paintingPageZoomTexts[22] = "Green Guy (2013) Acrylic and Watercolour on Paper";
paintingPageZoomTexts[23] = "Sketchbook Page (2014) Pencil-Crayon on Paper";
paintingPageZoomTexts[24] =
  "Self-Portrait (2014) Acrylic and Watercolour on Paper";

const photoPageZoomTexts = [];
photoPageZoomTexts[0] = "New York (2012)";
photoPageZoomTexts[1] = "Paris (2012)";
photoPageZoomTexts[2] = "Shelby (2013)";
photoPageZoomTexts[3] = "Denis (2013)";
photoPageZoomTexts[4] = "Versailles (2012)";
photoPageZoomTexts[5] = "Munich (2012)";
photoPageZoomTexts[6] = "That's Entertainment (2014)";
photoPageZoomTexts[7] = "New York City (2012)";
photoPageZoomTexts[8] = "Times Square (2013)";
photoPageZoomTexts[9] = "Coney Island (2013)";
photoPageZoomTexts[10] = "Chinatown (2013)";
photoPageZoomTexts[11] = "Munich (2012)";
photoPageZoomTexts[12] = "Vimy Ridge (2012)";
photoPageZoomTexts[13] = "Defne (2014)";
photoPageZoomTexts[14] = "Gord #1 (2016)";
photoPageZoomTexts[15] = "Legs (2016)";
photoPageZoomTexts[16] = "Gord #2 (2016)";
photoPageZoomTexts[17] = "Gord #3 (2016)";
photoPageZoomTexts[18] = "Open in Kelowna (2016)";
photoPageZoomTexts[19] = "Budweiser (2012)";
photoPageZoomTexts[20] = "Wall Street Rose (2013)";
photoPageZoomTexts[21] = "Sandcastles at Coney Island (2013)";
photoPageZoomTexts[22] = "Cart (2011)";
photoPageZoomTexts[23] = "Brandon (2014)";
photoPageZoomTexts[24] = "My Mom and Aunt in New York City (2013)";
photoPageZoomTexts[25] = "My Kitchen Window (2013)";
photoPageZoomTexts[26] = "Brian (2014)";
photoPageZoomTexts[27] = "Pool (2015)";
photoPageZoomTexts[28] = "Chris (2014)";
photoPageZoomTexts[29] = "Carolina (2014)";
photoPageZoomTexts[30] = "Paris (2012)";
photoPageZoomTexts[31] = "Paris (2012)";
photoPageZoomTexts[32] = "London (2012)";

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
        if (currentPage === "design") {
          zoomTextBox.innerHTML = designPageZoomTexts[i];
        } else if (currentPage === "painting") {
          zoomTextBox.innerHTML = paintingPageZoomTexts[i];
        } else if (currentPage === "photography") {
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
