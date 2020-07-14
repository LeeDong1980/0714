function init(){
    var TL = gsap.timeline();
    TL.to(".page1",{duration: 1.2,width: "100%"})
      .to(".page2",{duration: 1,height: "100%"})
      .from([".title",".about"],{duration: 0.7, opacity: 0, y: function(i){var yPos = [-100,30];return yPos[i]}})
}
init();

// function可回傳i，回傳發生此事件時此按鈕各參數狀況(上一層的資訊)
document.getElementsByClassName("btn")[0].addEventListener("click", function f(i){
    console.log(i);
});

