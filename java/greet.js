function greetingsfactory(storage) {
  var namesGreeted = storage || {}

  function greet(name, language) {
    if (name != "") {

    }

    if (namesGreeted[name] === undefined) {
      namesGreeted[name] = 0;
    }
    if (language != "") {

    }

    if (language === 'xhosa') {
      return 'Molo ' + name
    }

    if (language === 'english') {
      return 'Hello ' + name
    }

    if (language === 'afrikaans') {
      return 'Hallo ' + name
    }
  }

  function count() {
    return Object.keys(namesGreeted).length;
  }

  function names() {

    return namesGreeted;

  }

  return {
    names,
    count,
    greet
  }
}
