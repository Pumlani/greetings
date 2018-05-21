function greetingsFoctory() {
  var numOfNames = 0;
  var namesGreeted = {};

  function greet(language, name) {

    if (namesGreeted[name] === undefined) {
      namesGreeted[name] = 0;
      numOfNames += 1;
    }

    if (language === "English") {
      return 'Hello, ' + name;
    }
    if (language === "Afrikaans") {

      return 'hallo, ' + name;
    }
    if (language === "Xhosa") {

      return 'Molo, ' + name;
    }

  }

  function NumberOfGreetedPple() {

    return numOfNames;
  }

  return {
    greet,
    NumberOfGreetedPple
  }
}
