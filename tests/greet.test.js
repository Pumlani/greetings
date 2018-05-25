describe('greet function', function() {
  it('Should prints out the user names accurately.', function() {

    var greet = GreetingsFactory({});
    assert.equal('Hello Pumlani', greet.greetNow('Pumlani', 'English'));
    assert.equal('Molo Lilo', greet.greetNow('Lilo', 'Xhosa'));
    assert.equal('Hallo Inam', greet.greetNow('Inam', 'Afrikaans'));

  });

  it('Should not increase the counter if the name has been greeted once.', function() {
    var greet = GreetingsFactory({});
    greet.greetNow('Pumlani', 'Xhosa');

    var countOne = JSON.parse(localStorage.getItem('count'));
    greet.greetNow('Pumlani', 'Afrikaans');
    var countTwo = JSON.parse(localStorage.getItem('count'));



    assert.equal(countOne, countTwo);
  });


  it('Should return a name with uppercase first letter even if the name is in lowercase ', function() {
    var greet = GreetingsFactory({});
    assert.equal('Hello Pumlani', greet.greetNow('pumlani', 'English'));
  });

  it('Should not increase the counter if the name has been greeted', function() {
    var greet = GreetingsFactory({});
    greet.greetNow('Pumlani', 'Xhosa');

    var countOne = JSON.parse(localStorage.getItem('count'));
    greet.greetNow('Pumlani', 'Afrikaans');
    var countTwo = JSON.parse(localStorage.getItem('count'));



    assert.equal(countOne, countTwo);
  });

});
