document.addEventListener("DOMContentLoaded", function() {
  const lastModified = document.lastModified;
  const lastModifiedDisplay = document.getElementById("last-modified");
  lastModifiedDisplay.innerHTML = `网页最后修改时间：${lastModified}`;
});
