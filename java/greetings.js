document.addEventListener('DOMContentLoaded', function() {
  var nameTypeTextElement = document.querySelector('.nameTypeText');

  var callTotalElement = document.querySelector('.callTotalOne');

  var afrikaansElement = document.querySelector('.addToKaansBtn');
  var englishElement = document.querySelector('.addToEnglBtn');
  var xhosaElement = document.querySelector('.addXhosaBtn');

  var greetingsObj = greetingsFoctory();

  function myFunction() {
    var x = document.getElementById("nameTypeText").value;
    document.getElementById("greet").innerHTML = x;
}

  function runOnLanguagesButtons() {

    var name = nameTypeTextElement.value.trim();
    greetingsObj.greetings(nameTypeTextElement);
    nameTypeTextElement.innerHTML = greetingsObj.greetings();

  }


  addToKaansBtn.addEventListener('click', function() {
    runOnLanguagesButtons();

  });
  addToEnglBtn.addEventListener('click', function() {
    runOnLanguagesButtons();

  });
  addXhosaBtn.addEventListener('click', function() {
    runOnLanguagesButtons();

  });
});
