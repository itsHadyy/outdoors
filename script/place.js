//script for automatic fade slideshow
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

const radioElement = document.querySelectorAll('.star');

const rating = document.querySelector('.rating-value');

radioElement.forEach((radio) => {
    radio.addEventListener('click', () => {
        let value = radio.value;
        rating.innerText = `${value} of 5`;
    });
});