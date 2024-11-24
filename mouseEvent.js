document.addEventListener("DOMContentLoaded", function() {
  document.body.onclick = function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const coordinatesDisplay = document.getElementById("mouse-coordinates");
    coordinatesDisplay.innerHTML = `你点击的坐标是：X = ${x}, Y = ${y}`;
  };
});
