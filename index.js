const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener(`click`, () => {
    nav.classList.add(`active`);
  });
}
if (close) {
  close.addEventListener(`click`, () => {
    nav.classList.remove(`active`);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const responseDiv = document.getElementById("response");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can implement your form submission logic here.
    // For this example, we'll display a success message.
    responseDiv.innerHTML = "Message sent successfully!";
    contactForm.reset();

    setTimeout(() => {
      responseDiv.innerHTML = "";
    }, 5000);
  });
});

var mainimage = document.getElementById("main-image");
var simage = document.getElementsByClassName("s-image");

simage[0].onclick = function () {
  mainimage.src = simage[0].src;
};
simage[1].onclick = function () {
  mainimage.src = simage[1].src;
};
simage[2].onclick = function () {
  mainimage.src = simage[2].src;
};
simage[3].onclick = function () {
  mainimage.src = simage[3].src;
};
