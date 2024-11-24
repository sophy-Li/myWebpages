document.addEventListener("DOMContentLoaded", function() {
  function updateScreenInfo() {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const screenInfoDisplay = document.getElementById("screen-info");
    screenInfoDisplay.innerHTML = `屏幕实际宽度：${screenWidth}px，屏幕实际高度：${screenHeight}px<br>
                                  浏览器窗口宽度：${windowWidth}px，浏览器窗口高度：${windowHeight}px`;
  }

  window.onresize = updateScreenInfo; // 浏览器窗口尺寸改变时更新
  updateScreenInfo(); // 初次加载时更新
});
