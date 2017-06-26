(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    //                     ┌ Change this to what it should be
    assert.equal( value, 'hello tests');
    //                           ┌ Change this to what it should be
    assert.equal( some_number, '484');
  });
//the below code sets up the test with QUit.test
  QUnit.test("Functions can access outer scope.", function(assert){
    var outside_the_function = null; //because this is outside the function it is global
    function yay(){
      var inside_the_function = "can you see me?";
      outside_the_function = inside_the_function; //this is possible because
      //this function has access to the global scope
    }

    yay(); //running this function changes the value of the global var outside_the_function

    assert.equal(outside_the_function, "can you see me?");
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){
//this test is checking if param is equal to whatever is passed into it
//the argument is the value that is passed into a parameter
    function yay(param){
      assert.equal(param, "a fine kettle of fish");
    }

    yay("a fine kettle of fish");
  });

  QUnit.test("A functions local scope is not available in an outer scope.", function(assert){
    function yay(){
      var kix = "kid tested mother approved";
      assert.equal(kix, "kid tested mother approved");
    }
    yay();
    var has_kix; //new var declared but not assigned
    if(this.kix){
      has_kix = kix;
    } else {
      has_kix = "i prefer cheerios";
    }
    assert.equal(has_kix, "i prefer cheerios");
  });

  QUnit.test("Functions don't have access to eachothers scope", function(assert){
    function yay(){
      var from_yay = "i'm inside yay;";
    }

    function foo(){
      var in_foo = "i'm in foo";
      if(this.from_yay){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "i'm in foo");
      assert.equal(this.from_yay, undefined);
    }
    yay();
    foo();
  });

  QUnit.test("Inner scope variables override outter scope variables.", function(assert){

    var peanuts = 300;

    function yay(){
      var peanuts = "roasted";

      assert.equal(peanuts, "roasted");
    }
    yay();

    assert.equal(peanuts, "300");
  });

  QUnit.test("Variables created with var in a funtion are re-created each time", function(assert){
    function yay(){
      if(this.counter){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
  });

  QUnit.test("Inner scope can access outer scope", function(assert){
    var im_outside = "alpha";
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), "alphaomega");
  });

  QUnit.test("Functions retain outer scope references between calls.", function(assert){
    var im_outside = 13;
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, "14"); //this number is the new variable stored outside the function
    yay();
    assert.equal(im_outside, "15");
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, "greg");
    yay();
    assert.equal(name, "greggreg");
    yay();
    assert.equal(name, "greggreggreg");
  });

  QUnit.test("We can pass functions to other functions and then run them.", function(assert){
    var im_outter = 10;
    function yay(){
      im_outter /= 5;
    }
    function something(whatever){
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, "40");

  });

  QUnit.test("We can get crazy with returns.", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog");
  });

})();
