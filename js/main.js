(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  console.log("help");
var theImages = document.querySelectorAll('.mini'),
    selectImg = ["#F55","#F56","#R58"];
    ModelTxt = document.querySelector('.modelName'),
    detailsTxt = document.querySelector('.modelDetails'),
    carPrice = document.querySelector('.priceInfo'),

    f55 = document.querySelector("#F55"),
    f56 = document.querySelector("#F56"),
    r58 = document.querySelector("#R58");

    // i want to change all the content on the page
    function changeElements() {
      console.log("lol");
      var theSelected = selectImg.indexOf(String(this.id));
      theImages[theSelected].classList.add("fadeOut");

      let objectIndex = carData[this.id];
          // change the text using the values of the properties in the object
          ModelTxt.firstChild.nodeValue = objectIndex.headline;
          carPrice.firstChild.nodeValue = objectIndex.price;
          detailsTxt.firstChild.nodeValue = objectIndex.text;
        }

        // for (var i=0;i<theImages.length;i=1) {
        //   theImages[i].addEventListener("click", changeElements, false);
        // }
        // changeElements.call(document.querySelector("#F55"));
        f55.addEventListener('click', changeElements, false);
        f56.addEventListener('click', changeElements, false);
        r58.addEventListener('click', changeElements, false);

})();
