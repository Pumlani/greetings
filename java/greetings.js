document.addEventListener('DOMContentLoaded', function() {

  var nameTypeTextElement = document.querySelector('.nameTypeText');

  var checkedRadioBtn = document.querySelector(".languageSelected");

  var greetBtnElement = document.querySelector('.greetBtn');
  var resetBtnElement = document.querySelector('.resetBtn');
  var demoElement = document.querySelector(".demo");

  var counterElement = document.querySelector(".counter");

  var greetingsObj = greetingsFoctory();

  greetBtnElement.addEventListener('click', function() {
    var checkedRadioBtn = document.querySelector("input[name='RadioButton']:checked");
    var language = checkedRadioBtn.value;
    var name = nameTypeTextElement.value;
    if (name === "") {
      alert('Please enter A name and Language')
    }
    if (language === "") {
      alert('Please enter A name and Language')
    }

    var greeting = greetingsObj.greet(language, name);
    demoElement.innerHTML = greeting;
  });

});
