(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
  console.log("help");
var theImages = document.querySelectorAll('.data-ref'),
    selectImg = ["#F55","#F56","#R58"],
    ModelTxt = document.querySelector('.modelName'),
    detailsTxt = document.querySelector('.modelDetails'),
    carPrice = document.querySelector('.priceInfo');
  const httpRequest = new XMLHttpRequest();




    function getcarData() {
      const url = './includes/functions.php?carModel=' + this.id;

      // the fecth API uses new JS Promise API
      fetch(url)  // do an ajax call with fetch
        .then((resp) => resp.json()) // convert to json
        .then(({modelName, pricing, modelDetails, model }) => {
          ModelTxt.textContent = modelName;
          carPrice.innerHTML = pricing;
          detailsTxt.textContent = modelDetails;

          console.log("Car Info");

          for (var i=0;i<theImages.length;i+=1) {
            theImages[i].classList.add("nonActive");
          }

          // this is a template string constructor - look it up! (also new for ES6)
          document.querySelector(`#${model/*data.model*/}`).classList.remove('nonActive');


        }) // call the process functions (so it can be car because its about cars)
        .catch(function(error) {
          // will catch absolutely any error and report it to the console
          console.log(error);
        });

      // make an AJAX call to the DB; handle errors first
      // if (!httpRequest) {
      //   alert('giving up... your browser sucks');
      //   return false;
      // }
      //
      // httpRequest.onreadystatechange = processRequest;
      // httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
      // httpRequest.send();
    }

  //   function processRequest() {
  //   let reqIndicator = document.querySelector('.request-state');
  //   reqIndicator.textContent = httpRequest.readyState;
  //   // debugger;
  //
  //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     if (httpRequest.status === 200) { // 200 means everything is awesome
  //       //debugger;
  //       let data = JSON.parse(httpRequest.responseText);
  //
  //       processResult(data);
  //     } else {
  //       alert('There was a problem with the request.');
  //     }
  //   }
  // }

    // i want to change all the content on the page
    // function processResult(data) {
    //   const {modelName, pricing, modelDetails} = data;
    //   ModelTxt.textContent = modelName;
    //   carPrice.innerHTML = pricing;
    //   detailsTxt.textContent = modelDetails;
    //
    //   console.log("Car Info");
    //
    //   for (var i=0;i<theImages.length;i+=1) {
    //     theImages[i].classList.add("nonActive");
    //   }
    //
    //   // this is a template string constructor - look it up! (also new for ES6)
    //   document.querySelector(`#${data.model}`).classList.remove('nonActive');
    //
    //   this.classList.remove("nonActive");

      // let objectIndex = carData[this.id];
      //     // change the text using the values of the properties in the object
      //     ModelTxt.firstChild.nodeValue = objectIndex.headline;
      //     carPrice.firstChild.nodeValue = objectIndex.price;
      //     detailsTxt.firstChild.nodeValue = objectIndex.text;
      //
          // var theSelected = selectImg.indexOf(String(this.id));
          // theImages[theSelected].classList.remove("nonActive");

          // for this.id the image should stay non opaque
          // theImage.
        // }

        for (var i=0;i<theImages.length;i+=1) {
          theImages[i].addEventListener("click", getcarData, false);
        }

        // processResult.call(document.querySelector("#F55"));


})();
