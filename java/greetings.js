//adding querySelectors and refs

var demoName = document.querySelector('#demo');
var getInput = document.querySelector('#inputBox');
var greetBtn = document.querySelector('#greetBtn');
var resetBtn = document.querySelector('#resetBtn');
var displayCount = document.querySelector('#countNumber');


function getName() {
  var name = getInput.value;

  return {
    name
  }
}

function clearBox() {
  getInput.value = "";
}

function getCounter() {

  displayCount.innerHTML = localStorage.getItem('counter');
}
getCounter();

function checkCounter() {
  //counter init
  if (localStorage['counter'] === undefined) {
    localStorage.setItem('counter', JSON.stringify(0));
  }

}

//create a map if it's empty un local storage
function checkMap() {
  if (!localStorage.getItem('namesGreeted')) {
    localStorage.setItem('namesGreeted', JSON.stringify({}));
  }
}


function submitForm() {
  checkMap();
  //instance of the greet Factory
  var greet = GreetingsFactory(JSON.parse(localStorage.getItem('namesGreeted')));

  var radioBtn = document.querySelector('input[name="radioLang"]:checked');
  var nameFromDom = getName().name;
  console.log('type of name from DOM : ' + typeof(parseFloat(nameFromDom)));
  //ensure no empy name and there is a chaecked radio button
  if (nameFromDom) {
    if (radioBtn !== null) {
      //getName();
      var langFromDom = greet.setLanguage(radioBtn.value);
      checkCounter();
      demoName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
      localStorage.setItem('namesGreeted', JSON.stringify(greet.greetedPeople));
      getCounter();
      clearBox();
    } else {
      demoName.innerHTML = 'Please type in a name first';
    }
  } else {

    demoName.innerHTML = ('Please select your language');

  }
  return false;
};


resetBtn.addEventListener('click', function run() {
  localStorage.setItem('counter', JSON.stringify(0));
  localStorage.setItem('namesGreeted', JSON.stringify({}));
  displayCount.innerHTML = 0;
  demoName.innerHTML = 'Greet Widget!';
});
