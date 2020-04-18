var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function gradientcolor() {
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ","
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

function random() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = "#" + randomColor;
    color1.value = "#" + randomColor;
    color2.value = "#" + randomColor1;

    gradientcolor();
}
//another method
// function rgbToHex(r, g, b) {
//     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
//  }
//  function componentToHex(c) {
//     var hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
//  }
//  function random() {
//      const x = Math.floor(Math.random()* 255);
//      const y = Math.floor(Math.random()* 255);
//      const z = Math.floor(Math.random()* 255);
//      color1.value = rgbToHex( x , y , z);gradientcolor();
//      color2.value = rgbToHex( x , y , z);gradientcolor();
//  }
button.addEventListener("click", random);

color1.addEventListener("input", gradientcolor);
color2.addEventListener("input", gradientcolor);