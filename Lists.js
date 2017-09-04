/**
 =====================================================================
 - LISTS -------------------------------------------------------------
 =====================================================================
Defintion : A representation of an ordered sequence of values, where the same
value may appear many times
*/

class List {

  constructor() {
    this.memory = [];
    this.length = 0;
  }

// returns a specified element from a Map object
  get(address) {
    return this.memory[adress];
  }

  push(value) {
   this.memory[this.length] = value;
   this.length++;
  }



}


/**
New concepts:
**constructor - method for creating and initializing an object created within a class.
    Description:only one instance of constructor method in a class
    A constructor can use the super keyword to call the constructor of a parent class.
  -------------------------------------------------------------
** let
  similar to var, different in
  Purpose: free up memory when not needed in certain blocks by
          being existent only when


*/

// Write implementation of pop:
// Description: Removes last elem of an array, changing length of an array
// Returns: the element

function pop() {
	var array = ['1','2','3','4'];
	length = array.length
	var indexArray = length - 1;
	var val = array[indexArray];
	delete val;
	array.length--;
  return val
}

// unshift
// Description: Adds elem at beginning of array, changing length of the array
// Returns: the new length of property of the array


function unshift(value) {
  // have an array
  var array = [1,2,3,4]
  // have an array length
  var arrayLength = array.length
  // have a value parameter which will be inserted as previous value
  var previous = value;
  // make a for loop to iterate through every item of the array
  for(var i=0; i < array.length; i++) {
    //get the current value iterated
    var currentValue = array[i];
    // replace current value to previous value
    array[i] = previous;
    previous = currentValue;
    //set previous value to current value for next iteration
  };
  //when the last elem in the array is reached he will be the previous val
  //get the length of the array
  // at the position of the length add the last elem from iteration
  array[arrayLength] = previous;
  // increase length by 1
  arrayLength++;
  return arrayLength;
}


// shift
// Description:removes the first element from an array and returns that elemen, changing length of the array
// Returns: The removed element from the array


function unshift() {
  // make an array
	var array = [1,2,3,4];
  //get first value because it will be returned at the end
	let value = array[0]
// if the array is empty, just return(do nothing)
	if(array.length === 0) {
		return;
	}else {
    // otherwise iterate through each elem in array
		for(var i=0; i< array.length; i++) {
    // each current value will be set to next value
			array[i] = array[i+1];
		}
		// when the last item appears delete it since its position is already occupied
		array.length--;
	}
	return value;
}
