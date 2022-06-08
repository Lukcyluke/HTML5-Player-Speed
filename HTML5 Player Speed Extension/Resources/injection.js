// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log("Set video.playbackRate to "+this.value, browser);
  document.querySelector('video').playbackRate = this.value;
}
