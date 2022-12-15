// take ref of img tag
let img = document.getElementById("cat-img");
// take ref of next button
let nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function () {
  console.log("clicked");
});

function setRandImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((data) => data.json())
    .then((data) => (img.src = data[0].url))
    .catch((err) => console.log(err));
}
setRandImage();
