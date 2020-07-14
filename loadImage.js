function loadImage(imgArray, OnCopleted) {
  var loadInt = 0;
  for (var i = 0; i < imgArray.length; i++) {
    var img = new Image();
    img.src = imgArray[i];
    img.onload = function () {
      loadInt++;
      if (loadInt === imgArray.length) {
        OnCopleted();
      }
    };
  }
}
