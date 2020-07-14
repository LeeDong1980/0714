function log() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}
function timer(time, callback) {
  setTimeout(function () {
    console.log(100);
    callback();
  }, time);
}

timer(2000, log);
