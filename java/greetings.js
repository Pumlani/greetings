document.addEventListener('DOMContentLoaded', function() {
  //elements references
  var inputName = document.querySelector('.takesText');

  var checkedRadioBtn = document.querySelector(".languageRadio");

  var greetBtnElem = document.querySelector('.greetBtn');
  var resetBtnElem = document.querySelector(".resetBtn");

  var displayCountElem = document.querySelector("#counting");

  var displayOutput = document.querySelector(".displayOut");

  var storage = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : {};


  var greetingsObj = greetingsfactory(storage);
  displayCountElem.innerHTML = greetingsObj.count();

  //greet button
  greetBtnElem.addEventListener('click', function() {

    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn) {
      var language = checkedRadioBtn.value;
      var name = inputName.value.toUpperCase();
      displayOutput.innerHTML = greetingsObj.greet(name, language);
      localStorage.setItem('names', JSON.stringify(greetingsObj.names()));
      displayCountElem.innerHTML = greetingsObj.count();

    }
    //error messages
    if (name === "") {

      displayOutput.innerHTML = "please write a name of a person on the Box!"
    }
    //  var language = checkedRadioBtn.value;
    if (checkedRadioBtn === null) {

      displayOutput.innerHTML = "please select one of our languages!"
    }

    //clear text
    function clearBox() {

      inputName.value = "";
    }
    clearBox();

  });

  //reset button
  resetBtnElem.addEventListener('click', function() {
    // localStorage.setItem('namesGreeted', JSON.stringify({}));
    displayCountElem.innerHTML = 0;
    //localStorage.removeItem();
    location.reload();
    localStorage.clear();




  });


});
