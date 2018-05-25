function GreetingsFactory(greetedPeople) {

  function greetNow(inputName, language) {


    inputName = inputName.toLowerCase();
    let tmpString = inputName.substr(1, inputName.length);
    let firstCh = inputName.charAt(0).toUpperCase();
    inputName = firstCh + tmpString

    //counter init
    if (localStorage['counter'] === undefined) {
      localStorage.setItem('counter', JSON.stringify(0));
    }

    if (greetedPeople[inputName] === undefined) {
      greetedPeople[inputName] = 0;
      var counter = JSON.parse(localStorage.getItem('counter'));
      localStorage.setItem('counter', JSON.parse(counter + 1));

    }
    //return a greeting based on the given language
    if (language === 'Xhosa') {
      return 'Molo ' + inputName
    }
    if (language === 'English') {

      return 'Hello ' + inputName


    }

    if (language === 'Afrikaans') {

      return 'Hallo ' + inputName


    }
  }

  function setLanguage(value) {
    var languChosen = '';
    if (value === 'Xhosa') {
      languChosen = 'Xhosa';
    }
    if (value === 'English') {
      languChosen = 'English';
    }
    if (value === 'Afrikaans') {
      languChosen = 'Afrikaans';
    }
    return languChosen
  }

  return {
    greetNow,
    setLanguage,
    greetedPeople
  }


}
