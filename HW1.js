var imgIndex = 0;
var imgData = [];

function init() {
  // Make a request for a user with a given ID
  axios
    //   取得API
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
    // 拿到資料後執行...
    .then(function (res) {
      // handle success

      loadImage(res.data.img, function () {
        hideLoadingScene();
        imgData = res.data.img;
        setImageSrc(res.data.img, imgIndex);
        showImageNum(imgIndex, imgData);
      });
    })

    .catch(function (err) {
      // handle error
      console.log(err);
    });
}

function setImageSrc(imgArr, imgInt) {
  var html = "";
  html += "<div>";
  html += '<img src="' + imgArr[imgInt] + '" alt="">';
  html += "</div>";
  document.getElementsByClassName("imgBox")[0].innerHTML = html;
}

function hideLoadingScene() {
  document.getElementsByClassName("loading")[0].style.display = "none";
}

function setImage(value) {
  imgIndex += value;
  if (imgIndex < 0) {
    imgIndex = imgData.length - 1;
  } else if (imgIndex > imgData.length - 1) {
    imgIndex = 0;
  }
}

function showImageNum(currentImg, imgArray) {
  //   console.log(imgArray.length);
  var imgNumHtml = "";
  imgNumHtml += "<h3>" + (currentImg + 1) + "/" + imgArray.length + "</h3>";
  console.log(document.getElementsByClassName("imgNum")[0]);
  document.getElementsByClassName("imgNum")[0].innerHTML = imgNumHtml;
}

console.log(document.getElementsByClassName("imgNum"));

init();
document
  .getElementsByClassName("triangle-left")[0]
  .addEventListener("click", function () {
    setImage(-1);
    console.log(imgIndex);
    setImageSrc(imgData, imgIndex);
    showImageNum(imgIndex, imgData);
  });
document
  .getElementsByClassName("triangle-right")[0]
  .addEventListener("click", function () {
    setImage(1);
    console.log(imgIndex);
    setImageSrc(imgData, imgIndex);
    showImageNum(imgIndex, imgData);
  });
