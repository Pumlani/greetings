describe('The greetings function logic', function() {

  it('should prints out a string entered when the button is clicked', function() {

    var greetingsObj = greetingsFoctory();

  });


    it('should greet a person when the button is clicked.' , function(){

      var greetingsObj = greetingsFoctory();

     var name = 'Pumlani';
       assert.equal(greet(name),'Hello, Pumlani');


   });

   it('should return string variables when the button is clicked.' , function(){

     var greetingsObj = greetingsFoctory();

     assert.typeOf(name, 'string', 'name is a string');

   });

   it("should return an error if it's not a string when the button is clicked." , function(){

     var greetingsObj = greetingsFoctory();

     assert.notEqual(3, "3", 'these two are not equal');

   });

   it('should greet the name of a person entered.', function() {
    var greetingsObj = greetingsFoctory();

    assert.equal(greetingsObj.greetings("Pumlani"), 1)

  });

});
