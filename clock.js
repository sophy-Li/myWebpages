document.addEventListener("DOMContentLoaded", function() {
  function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 月份从0开始，需加1
    const date = now.getDate();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const daysOfWeek = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const clockDisplay = document.getElementById("clock");

    clockDisplay.innerHTML = `今天是：${year}年${month}月${date}日 ${daysOfWeek[day]}<br>
                              当前时间：${hours}:${minutes}:${seconds}`;

    if (minutes === 20 || minutes === 50) {
      alert("站起来活动一下吧！");
    }
  }

  setInterval(updateClock, 1000); // 每秒更新时钟
});
