let text1 = document.getElementById("mm")
text1.addEventListener("mouseover", function() {
    this.style.color = "gray";
});

text1.addEventListener("mouseleave", function() {
    this.style.color = "black";
});

document.getElementById("plane").addEventListener("click", function() {
    var plane = this;
    var width = document.documentElement.clientWidth; // ビューポートの幅を取得
    plane.style.transition = "left 2s ease-in-out"; // アニメーション効果を設定
    plane.style.left = width + "px"; // 飛行機を画面外まで移動させる
  });

  document.getElementById("kitetsu").addEventListener("click", function() {
    document.getElementById("kitetsu").style.left = "200px";
  })

  document.getElementById("kitetsu").addEventListener("click", function() {
    var plane = this;
    var width = document.documentElement.clientWidth; // ビューポートの幅を取得
    plane.style.transition = "left 2s ease-in-out"; // アニメーション効果を設定
    plane.style.left = width + "px"; // 飛行機を画面外まで移動させる
  });