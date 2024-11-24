document.addEventListener("DOMContentLoaded", function() {
  // 选择所有员工卡片
  const employeeCards = document.querySelectorAll(".employee-card");

  // 1. 点击卡片时弹窗显示员工信息
  employeeCards.forEach(function(card) {
    card.onclick = function() {
      const name = this.querySelector(".name").textContent;
      const rating = this.querySelector(".rating").textContent;
      alert("你点击了：" + name + " - " + rating);
    };
  });

  // 2. 鼠标悬停和离开时改变颜色
  employeeCards.forEach(function(card) {
    card.onmouseover = function() {
      this.style.backgroundColor = "#ffeb3b"; // 鼠标悬停时背景颜色改变
    };

    card.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标离开时恢复原样
    };
  });
});
