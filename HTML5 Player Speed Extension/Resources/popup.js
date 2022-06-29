console.log("Hello World!", browser);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log("Set video.playbackRate to " + this.value, browser);
  console.log("Set video.playbackRate to "+this.value, browser);
  browser.document.querySelector('video').playbackRate = this.value;

}
