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
        setImageSrc(res.data.img);
      });
    })

    .catch(function (err) {
      // handle error
      console.log(err);
    });
}

function setImageSrc(imgArr) {
  var html = "";
  //   將html透過字串處理成原本在.html編寫的格式，並把取得資料的src放進來
  for (var s = 0; s < imgArr.length; s++) {
    // document.getElementById("img" + String(s + 1)).src = imgArr[s];
    html += "<div>";
    html += '<img src="' + imgArr[s] + '" alt="">';
    html += "</div>";
  }
  //   把處理好的html再放到app底下
  document.getElementById("app").innerHTML = html;
}

function hideLoadingScene() {
  document.getElementsByClassName("loading")[0].style.display = "none";
}

init();
