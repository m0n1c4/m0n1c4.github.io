/*GLOBAL OBJECT VALUES*/
function objectValues(testObject){
    var newArray = []; // will hold object values
    for(var value in testObject){
        
        newArray.push(testObject[value]); // pushes each value to newArray
    }
    return newArray; // returns the newArray
}

/*GLOBAL KEYS TO STRING*/
function keysToString(objectKeys){
    var freshArray = [];
    freshArray.push(Object.keys(objectKeys));
    var stringTime = freshArray.toString();
    var reString = stringTime.replace(/,/g, " "); // using replace method with RegEx 
    return reString;
}

/* GLOBAL VALUES TO STRING
*Should take an object and return all its string values in a 
*string each separated with a space.
*/


function valuesToString(object){
 var stringBox = "";
  for (var key in object){
   if(typeof object[key] === 'string'){ //check if each element at index [key] is a string
      stringBox += object[key] + " "; //concat qualified element to string with spaces
     
//       console.log(stringBox.trim()); //debug
    }
  }
  return stringBox.trim(); //return string trimmed of extra spaces
}


// ARRAY OR OBJECT //
/*
* Should take one argument and return 'array' if its an array and 'object' if its an object
*
*/
function arrayOrObject(testArgument){
    var result = "";
    if (Array.isArray(testArgument)){
        result = "array";
    } else if (typeof testArgument === 'object'){
        result = 'object';
    }
    return result;
}


// CAPITALIZE WORD //
/*
*
*Should take a string of one word, and return the word with its first letter capitalized
*
*/

function capitalizeWord(string){
    var firstLetter = string.charAt(0); // takes first letter
    var goodString = firstLetter.toUpperCase() + string.slice(1); //capitalize and reattach
    return goodString;
}

// CAPITALIZE ALL WORDS //
/*
*Should take a string of words and return a string with all the words capitalized
*/

function capitalizeAllWords(string){
    var splitString = string.split(' '); //splitting string at spaces into an array of strings
   //splitString is now an array containing each word of the string separately
    for(var i = 0; i < splitString.length; i++){
      var letters = splitString[i].split(''); //separating each word in array into an array of letters
      letters[0] = letters[0].toUpperCase(); //sets letter at index[0] to upper case
      splitString[i] = letters.join(''); //slaps em all back together
    }
  return splitString.join(' ');
}


// WELCOME MESSAGE //
/*
*Should take an object with a name property and return 'Welcome <Name>!'
*/
function welcomeMessage(object){
  var givenName;
  var firstLetter;
    for(var key in object){

          givenName = object[key];
          console.log(givenName);
          firstLetter = givenName.charAt(0).toUpperCase(); 
          console.log(firstLetter);
          var properName = firstLetter + givenName.slice(1);

      return "Welcome " + properName + "!";
    }
    
}

// PROFILE INFO //
/*
*Should take an object with a name an a species and return '<Name> is a <Species>'
*/


function profileInfo(profileObject){
  var name;
  var species;
  var name1st;
  var species1st;
    for(var key in profileObject){
//       if (profileObject.hasOwnProperty(name) && profileObject.hasOwnProperty(species)){
        name = profileObject.name;
        name1st = name.charAt(0).toUpperCase() + name.slice(1);
        species = profileObject.species;
        species1st = species.charAt(0).toUpperCase() + species.slice(1);
//       }
    } 
   return name1st + " is a " + species1st;
}

// MAYBE NOISES //
/*
*Should take an object, if this object has a noises array return 
*them as a string separated by a space, if there are no noises return 
*'there are no noises'
*/
function maybeNoises(noisyObject){
  var noisyString;
  var lessNoisy;
  //first we have to test if the noisyObject is empty
  if(Object.keys(noisyObject).length === 0){
   
    return "there are no noises";
  } else if (noisyObject.hasOwnProperty('noises')){ //checking if noises is a property
    //if noises exists but has no content
    if(noisyObject.noises.length === 0){
      return "there are no noises";
    } else { //if noises exists and has a length above 0
          noisyString = noisyObject.noises.toString(); //changes the noises array to a string
          lessNoisy = noisyString.replace(/,/g, " "); //replaces commas with spaces
          return lessNoisy;
    }
  }
}

// HAS WORD //
/*
*Should take a string of words and a word and return true if 
* <word> is in <string of words>, otherwise return false.
*/

function hasWord(noveltyStr, testWord){

  if(noveltyStr.search(testWord) > -1){ //if the string contains the substring
    //code to execute if word is found
    return true;
  } else {
    //word is not found
    return false;
  }
}

// ADD FRIEND //
/*
* Should take a name and an object 
* and add the name to the object's friends array 
* then return the object
*/
function addFriend(name, objFrnd){
    objFrnd['friends'].push(name);
    return objFrnd;
}

// IS FRIEND //
/*
* Should take a name and an object and 
* return true if <name> is a friend of <object> 
* and false otherwise
*/
function isFriend(name, object){
  if (Object.keys(object).length === 0){ //testing if the object is empty
      return false;
  } else if (object.hasOwnProperty('friends')){ //testing if 'friends' is a key
    if (object.friends.length === 0){
      return false; //returns false if 'friends' is empty
    } else { // in case friends is not empty
      var nameFinder = object['friends'].indexOf(name);
       if (nameFinder > -1) {
         return true;
       } else {
         return false;
       }
    }
    
  }
}

// NON FRIENDS //
/*
* Should take a name and a list of people,
* and return a list of all the names that <name> is not friends with
*/
    //not done //
// DON'T FORGET 'data' is an array of objects!
function nonFriends(name, peepList){
  //Still the most difficult of them all - ALOT to account for

    var allNonFriends = []; // array to be filled with nonfriends
    peepList.forEach(pushNonFriends);
    return allNonFriends; //this is the final result
    
    // 1st FOR EACH FUNCTION
    function pushNonFriends(element, index){
        if(element.name === name) {
            //DO NOTHING because you cannot be friends with yourself
        } else if(!element.friends.some(isFriendCheck)){ //applies a function (declared later) to check something
                allNonFriends.push(element.name);//pushing each name that is not a friend
        }
    }
        
    //2nd FOR EACH- use some() to test if name exists
    //if name DOES NOT EXIST, false is returned and we add that name to NONfriends
    function isFriendCheck(friend, index){
    	return name === friend; //checking if the name is in friend
    }
            

 
}// TOP function -END

// UPDATE OBJECT //
/*
* Should take an object, a key and a value. Should update the 
* property <key> on <object> with new <value>. 
* If <key> does not exist on <object> create it.
*/

function updateObject(object, key, newValue){
    // if(object[key] === key){ //if the object has the key property already
    //   object[key] = newValue;
    // } else { //if the object does not have the key
    //   object[key] = newValue; //creating a key holding newValue
    // }
    //the above code works, but let's try something simpler //
  object[key] = newValue;
  return object;
}
// currently alters object, carries that over each time it is called

// REMOVE PROPERTIES //
/*
* Should take an object and an array of strings. 
* Should remove any properties on <object> that are listed in <array>
*/
// can you make a filter do this?
function removeProperties(object, strArr){
    strArr.forEach(removeTest) //calling a removeTest on each array element
    return object
    
    //FOR EACH FUNCTION - removeTest
    function removeTest(element, index){
        for( var key  in object){ //look at each key in object
            if(key === element){ //if there is a match
                delete object[key]; //delete that key
            }
        }
    }
}


// DEDUP //
/**
*Should take an array and return an array with all the duplicates removed
*/

function dedup(array){
  var seen = {};
  var output = [];
  var length = array.length;
  var count = 0;
  
  for (var i = 0; i < length; i++){ //checking through the array
    var current = array[i];
    if(seen[current] !== 1){
       seen[current] = 1;
      output[count++] = current;
    }
  }
  return output;
}
