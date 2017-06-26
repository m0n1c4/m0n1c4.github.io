// This is the proper way to start a javascript library
(function() {

// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {}; //this is now an empty object that will conatin our APIs
//this object is now available at '_'

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //now whenever this (_.identity) is referenced it will call this function
    return value; //this is a pass-thru function - it just passes the value back out\
    //this is truthy or falsey
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if(Array.isArray(value)) return 'array';
    if(value === null) return 'null';
    if(value instanceof Date) return 'date';
    return typeof value;
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a", "b", "c"]) -> "a"
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.first = function(array, n) {
    //test if an array, if not, return []
    // if n is undefined or nan, return array [0]
    // otherwise, return first n number of elements
    if(!Array.isArray(array) || n < 0) return [];
    if(n === undefined || typeof n !== 'number') return array[0]; //returns first index 
    return array.slice(0, n); //return the numbers up to but not including n
    
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/
_.last = function(array, n){
    //test if array is an array, if not, or if n < 0, return []
    //if number is not given, or nan, return last array element(array[0])
    //if number is greater than array.length - return whole array
    //return the last number of items in array
    if (!Array.isArray(array) || n < 0) return [];
    if (n === undefined || typeof n !== 'number') return array[array.length - 1];
    if (n > array.length) return array;
    return array.slice(-n); //this selects the numbers at indexes from the n parameter
    /*this expression ensures we START at the index provided by
    * the number arg (n) then allows all elements after that index to be returned*/
}

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, funct){
    //test if the collection is an array
    // if collection is an array, call the function for each element
   
    
    if(Array.isArray(collection)){
        //make sure to declare the brevity variables
        //inside the scope where they will be used
        var length = collection.length; //brevity variable to hold length of array
        
        for(var i = 0; i < length; i++){
            
            var element = collection[i]; //brevity variable to hold current index
            funct(element, i, collection); //calling the function on the current index, index, and collection
        }
    } else if (typeof collection === 'object') { //checking if the collection is an object
        // in case the collection is an object
        // call funct() once for each property
        // with the arguments (property value, property key, collection)
        // var properties = Object.keys(collection);//creating an array of all object key:value pairs
        for(var key in collection){//checking each item in collection object
            funct(collection[key], key, collection);
        }
    }
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
* DO NOT USE indexOf in your function!
*/

_.indexOf = function(array, target){
    //loop over the elements of array[] and return the index of any match
    for (var i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
    return -1; //in case the target is not found
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, test){
    let testPass = []; //array for all elements that pass the test() function
    // non-working code commented out
    
    var length = array.length;
    for (var i = 0; i < length; i++){
        var element = array[i]; // var to hold current index
        var result = test(element, i, array); //testing each argument
    
    // // below is the code with _.each
    // //this code breaks all currently passing tests for some reason
    
    // _.each(array, function(value, index, array){
    //     if(test(value, index, array)){
    //         testPass.push(value);
    //     }
    // });    
    // 
         if (result){ //if the element passes the test...
            testPass.push(element); //...it gets pushed to the array
        } 
    }
    return testPass;
};


/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
//must use _.filter
//call function on every element in array
//push all non-passing elements to new array
//return new array
// modelling from underscore.js docs


_.reject = function(list, truthTest){
    var falseyArr = [];
 _.filter(list, function(e, i, a) { 
        if(!(truthTest(e, i, a))){//if the items do not return true
            falseyArr.push(e);//only push the passing element, not the index or array
        }
    });
    return falseyArr; // make sure to include your return statement!!
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//modelling from underscore.js documents at:
//http://underscorejs.org/docs/underscore.html
_.partition = function(array, func){
    var pass = [], fail = []; // arrays for passing and failing 
    _.each(array, function(value, key, array) {
        //we will pass func() all the usual arguments
        //we use a ternary with .push to give true values to the pass array
        //and false values to the fail array
        (func(value, key, array) ? pass : fail).push(value); //using ternary operation
        //ternary syntax => (condition) ? truecase : falsecase
    });
    return [pass, fail]; //both arrays are returned inside an encompassing array
};
//this now passes all tests


/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
//similar to dedup on functionMaster

_.unique = function(array){
//     var seen = {};
//     var output = [];
//     var count = 0;
    
//     for(var i = 0; i < array.length; i++){ 
//         var current = array[i];
//         if(seen[current] !== 1){
//             seen[current] = 1;
//             output[count++] = current;
//         }
//     }
//     return output;
// };
//later relaced this with _.each
var uniqueArr = [];
    _.each(array, function(v, i, a){
        if(_.indexOf(array, v) === i){
            uniqueArr.push(v);
        }
    });
    return uniqueArr;
};
/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
//   var newArr = []; //holds returns
 
//   //test if the collection is an array or an object
//   if(Array.isArray(collection)){
//     //call function for element, index, and collection
//     for(var i = 0; i < collection.length; i++){ //could be replaced with each, but it might break
//       //function call
//       if(func(collection[i], i, collection)){
//       newArr.push(func(collection[i], i, collection));
           
//       }//pushing
    
//     }
//   } else if(typeof collection === 'object'){
//     //call function for each value, key, and collection
//     for(var key in collection){
//       if(func(collection[key], key, collection)){
//       newArr.push(func(collection[key], key, collection));
          
//       }//pushing
    
//     }
//   }
//   return newArr; // Mat helped me discover this belonged here, not under each control flow statement
//WHAT IF we can do all this with _.each??
var mapResult = [];
    _.each(collection, function(value, index, collection){ //iterating through collection (no matter what type)
        mapResult.push(func(value, index, collection)); //pushing altered values to new array
    });
   return mapResult;
};

/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(objArr, property){
    //we can use just a couple lines here because _.map already returns an array
    return _.map(objArr, function(value){
        return value[property];
        //map is going through each key in the collection objArr
        //we're going to use map to make an array of all object keys & properties
        //then we just tell the anonymous function we declared to return only
        //the [property] on value (key)
        
    });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value){
    //loop through the array
  //check if array contains value
  //if value is found return true
  //otherwise return false
  return arr.indexOf(value) > -1 ? true : false; //ternary operator use
}
// ternary syntax:
// condition ? true case : false case;

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(coll, func){
    // ARE elements all true? - Run _.each and set to false if even ONE is false
    // ELSE they're all true
    var result = true; //default result is true
    _.each(coll, function(x){if(!x){result = false}}); // if one does not pass, the result is false
        // we want to make sure EVERY value in the collection
        // returns a truthy value - otherwise it's not every!
    // check if the argument func is not a function - control flow
    if(typeof func !== 'function' && result === true){return true}
    else if(typeof func !== 'function' && result === false){return false}
    // RUN the func argument on every item in collection
    var testTrue = false, testFalse = true; // setting boolean variables for testing
    _.each(coll, function(v, i, c){// running through collection with each and a function taking value, index, collection
        if(!func(v, i, c)){testFalse = false}
        else{testTrue = true}
    });
    // BOOLEAN RESULTS - Determining what to return 
    if(testFalse && !testTrue){return result}
    else if(!testFalse){return false}
    else if(testTrue){return true}
       
    
};


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, action){
  /** Returns true if any of the values in the list pass the truth test.
   * Short-circuits and stops traversing the list if a true element is found.
   */
   var result = false;
     _.each(collection, function(any){if(any){result = true}}); //if one passes the whole passes
     
     // if any of the results are true, the entire collection passes
     if(typeof action !== 'function' && result === true){return true}
     else if(typeof action !== 'function' && result === false){return false}
     
     //cases if the var is not a function
     var isTrue = false;
     var isFalse = true; //variables for testing each
     
     //CALL <action> on every element in <collection>
     _.each(collection, function(v, i, c){ 
         //IF the value of any <action> call is true, return true
         if(action(v, i, c)){isTrue = true}
         else{isFalse = false}
     });
     
     //boolean results - what to give back
     if(isTrue){return true}
     else if(!isFalse){return false} //checking if isFalse is falsey
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(collect, func, seed){

    //iterating through the collection
    _.each(collect, function(element, index, collection){
       
        // if seed is not provided, the seed should be set to the first element of <collect>
        if(seed === undefined){seed = collection[0]}
        
        // if seed exists, (or we created it) it will be used in the iteration
        else{seed = func(seed, element, index)}
    });
    return seed;
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// Copies every property of the input object(s) into the first object
// Returns the update on the first object

_.extend = function(massObj, obj2){
  
    //!) loop through all elements of the array of objects
    _.each(arguments, function(obj, index, args){
        // if we are not beginning on the first index - where everything is going
        if(index > 0){
    //!) loop through all properties inside each element object
           _.each(obj, function(value, key, obj){
               massObj[key] = value;
           });
        }
    });
    return massObj;
};

// This is the proper way to end a javascript library
}());
