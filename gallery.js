// image file names
var fileNames = [];
// html for <img> tags
var photos = [];
// full <li> items (image + caption bar)
var imageList = [];

// opening and closing <li> tags
var openList = "<li class='photo'>";
var closeList = "</li>";

// captions
var captions = [
    "Maple",
    "Sunny",
    "Rex",
    "Pepper",
    "Kiko",
    "Bruce"
];

// text descriptions for each image
var infoTexts = [
    // Maple
    "Maple is a 3-month-old Goldendoodle from Austin, TX. She is playful, sweet, and loves snuggling after a long day of exploring.",
    // Sunny
    "Sunny is a 3-month-old Golden Retriever from Seattle, WA. He is cheerful, friendly, and brightens everyone's day with his happy tail wags.",
    // Rex
    "Rex is a 2-month-old Pitbull from Orlando, FL. He is energetic, goofy, and always ready for belly rubs and adventure.",
    // Pepper
    "Pepper is a 4-month-old Pug from San Diego, CA. She is curious, loving, and obsessed with treats and cuddles.",
    // Kiko
    "Kiko is a 3-month-old Shiba Inu from Portland, OR. He is clever, expressive, and loves zooming around the yard.",
    // Bruce
    "Bruce is not available for adoption because he is my cute little furbaby. He loves playing fetch endlessly and brings joy to everyone who meets him."
];

// build the image list
for (var i = 0; i < 6; i++) {
    fileNames.push("img" + (i + 1));
    // <img> tag
    var imgTag =
        "<a href='#/' class='lightbox-toggle'>" +
        "<img src='images/" + fileNames[i] + ".jpg' alt='" + captions[i] + "'>" +
        "</a>";
    // data-index for the caption 
    var captionBar =
        "<div class='descBar' data-index='" + i + "'>" + captions[i] + "</div>";
    // full list item
    var image = openList + imgTag + captionBar + closeList;
    imageList.push(image);
}

// put all <li> items together
document.getElementById("doggies").innerHTML = imageList.join("");

// Event handling for info box
var infoBox = document.getElementById("infoBox");
var infoHeading = document.getElementById("infoHeading");
var infoText = document.getElementById("infoText");
var infoClose = document.getElementById("infoClose");

// add click listener to each caption bar
var captionBars = document.querySelectorAll(".descBar");

captionBars.forEach(function (bar) {
    bar.addEventListener("click", function (event) {
        // gets which caption was clicked
        var index = event.target.getAttribute("data-index");

        // set heading and text in info box
        infoHeading.innerHTML = captions[index];
        infoText.innerHTML = infoTexts[index];

        // making the box visible
        infoBox.style.visibility = "visible";
    });
});

// close info box when "close" link is clicked
infoClose.addEventListener("click", function (event) {
    event.preventDefault(); // prevent default link behavior
    infoBox.style.visibility = "hidden";
});
