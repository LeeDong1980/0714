var imgArray = [
  "https://images.unsplash.com/photo-1426901523280-39daa6101bce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1433878455169-4698e60005b1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1429497587953-2e68f09d4283?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1426901403100-9c1c6b77a54a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1427847856029-612f5e500306?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1426901555017-389235de7b0d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1425321556545-264e4650274c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
  "https://images.unsplash.com/photo-1461711513774-c78b437a740b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
];

function init() {
  loadImage(imgArray, function () {
    hideLoadingScene();
    setImageSrc(imgArray);
  });
}

function setImageSrc(imgArr) {
  for (var s = 0; s < imgArr.length; s++) {
    document.getElementById("img" + String(s + 1)).src = imgArr[s];
  }
}

function hideLoadingScene() {
  document.getElementsByClassName("loading")[0].style.display = "none";
}

init();
