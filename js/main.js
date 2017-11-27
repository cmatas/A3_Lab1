(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  console.log("help");
var theImages = document.querySelectorAll('.data-ref'),
    selectImg = ["#F55","#F56","#R58"];
    ModelTxt = document.querySelector('.modelName'),
    detailsTxt = document.querySelector('.modelDetails'),
    carPrice = document.querySelector('.priceInfo'),

    // i want to change all the content on the page
    function changeElements() {
      console.log("lol");

      for (var i=0;i<theImages.length;i+=1) {
        theImages[i].classList.add("nonActive");
      }

      this.classList.remove("nonActive");

      let objectIndex = carData[this.id];
          // change the text using the values of the properties in the object
          ModelTxt.firstChild.nodeValue = objectIndex.headline;
          carPrice.firstChild.nodeValue = objectIndex.price;
          detailsTxt.firstChild.nodeValue = objectIndex.text;

          // var theSelected = selectImg.indexOf(String(this.id));
          // theImages[theSelected].classList.remove("nonActive");

          // for this.id the image should stay non opaque
          // theImage.
        }

        changeElements.call(document.querySelector("#F55"));

        for (var i=0;i<theImages.length;i+=1) {
          theImages[i].addEventListener("click", changeElements, false);
        }

})();
