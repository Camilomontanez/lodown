'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * indetity: is a function design to take a value and return the same value.
 * 
 * @param {value} it takes a value.
 * @return {value} it return the same value given in the parameter.
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 *typeOf: Designed to take a value and tested for datatype. it returns an array 
 * with the name of the data type as a string.
 * 
 * @param {value} the value to be tested to find out its datatype
 * @return {string} action: the function returns a string with the name of the
 * datatype
 */

function typeOf(value){
    if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to slice the first elements of an array and return
 * them in a new array.
 * the parameter(number) dictates the amount of elements we want slice out 
 * from the begining (index 0) of the 'original' array.
 * There are a few exceptions to the description above based on parameters:
 * if param array is not an array it returns an empty array
 * if param number is not given or not a number it return just the
 * first element in param array.
 * if param number is a negative number it returns an empty array
 * if the param number is greater than the  length of the param array it 
 * return the whole array.
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {Number} Number: The number dictates the amount elements we want to 
 * slice out from the param array starting at index 0
 * @return {newArray} new Array: it returns a new array full off all the elements
 * sliced out of the original array.
 * 
 */
 
 function first (array, number){
    if(!Array.isArray(array)){
        return [];
    } else if(isNaN(number)){
        return array[0];
    } else if(number < 0){
        return [];
    }else if(number > array.length){
        return array;
    }else{
     return array.slice(0,number);
    }
}
 
module.exports.first = first; 

/**
 * last: is design to slice the last elements of the array and return them into
 * a new array.
 * 
 * the parameter(number) dictates the amount of elements we want slice out 
 * from the end  of the 'original' array.
 * 
 * There are a few exceptions to the description above based on parameters:
 * if param array is not an array it returns an empty array
 * if param number is not given or not a number it return just the
 * last element in param array.
 * if param number is a negative number it returns an empty array
 * if the param number is greater than the  length of the param array it 
 * return the whole array.
 * 
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {Number} Number: The number dictates the amount elements we want to 
 * slice out from the param array starting at index 0
 * @return {newArray} new Array: it returns a new array full off all the elements
 * sliced out of the original array.
 * 
 */

  function last(array,number){
    if(!Array.isArray(array)){
        return [];
    } else if(isNaN(number) || number === undefined){
        return array[array.length -1];
    } else if(number < 0){
        return [];
    } else if(number > array.length){
        return array;
    }else{
    return array.slice(-number);    
    }
}

module.exports.last = last; 

/**
 * indexOf: is design to find the index of the first occurance of a specific 
 * value given within an array.
 * if the value is found ill return a number number that represents the index
 * if the value is not found it will return a -1
 * 
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {value} value: A value to search for within the param array.
 * @return {number} number: it returns a positive number represeting the index 
 *                          or -1 to represent the value was not found.
 * 
 */
 
 function indexOf(array, value){
   for(var i = 0; i < array.length; i++){
        if(array[i] === value){
         return i;
        } 
     }
         return -1;
    
}

module.exports.indexOf = indexOf; 


/**
 * contains: is design to  communicates wether a value is inside an array.
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {Value} Value: The value that we want to look for within the array
 * @return {Boolean} Boolean:it return truet to confirm the value exists within 
 *                   the array or false if the value is not found withing the 
 *                   array.
 * 
 * 
 */
 
 function contains(array, value){
       return indexOf(array,value) !== -1? true:false;
}

module.exports.contains = contains; 

/**
 * unique: is design to iterate over an array and return a new array  
 *         with the same elements but with no duplicates.
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @return {Array} Array: it returns a new array containing the same elelemts 
 *                        of param array but with no duplicates.
 * 
 * 
 */
 
 function unique(array){
    var uniqueArray = [];
    for(var i = 0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1){
           uniqueArray.push(array[i]); 
        }
    }
   return uniqueArray;
}

module.exports.unique = unique; 

/**
 * filter: is design to  to filter the elements of an array that pass 
 *         a test given by param function and return them into a new array.
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {function} function: the function or test in this case we want to call
 *                             upon every element of the array.
 * @return {Array} Array:it returns a new array full of all the elements from the 
 *                       param array that passes the test the param fucntion 
 *                       provided.
 */
 
 function filter(array, test){
     let filteredArray = [];
     each(array,function(e,i,a){
      if(test(e,i,a)){
          filteredArray.push(e);
      }   
     });
      return filteredArray;
}

module.exports.filter = filter; 

/**
 * reject: is design to  filter the elements of an array that do not pass the
 *          test of the param function and returns them into a new array.
 * 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {function} function: the function or test in this case we want to call
 *                             upon every element of the array.
 * @return {Array} Array:it returns a new array full of all the elements from the 
 *                       param array that  DO NOT pass the test the param function 
 *                       provided.
 */
 
function reject(array,test){
  return filter(array,function(e,i,a){
        return  !test(e,i,a);
    });

}

module.exports.reject = reject; 

/**
 * partition: is design to iterate over an array and evaluate every element to
 *            truthy or falsy. The elements that are truthy will be placed 
 *            in a subarray  and the falsy in another subarray. the Function
 *            will return an array with the falsy and truthy subarrays in it. 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {function} function: the function or test in this case we want to call
 *                             upon every element of the array.
 * @return {Array} Array:it returns a new array that contains two subarrays. 
 *                   one with the truthy values and one with the falsey values.
 */
 
function partition(array, test){
    let truthArray = [];
    let falseArray = [];
    let bigArray = [truthArray,falseArray];
    each(array,function(e,i,a){
        if(test(e,i,a)){
          truthArray.push(e);  
        } else {
          falseArray.push(e); 
        }
    });
    return bigArray;
}
    
module.exports.partition = partition;    

/**
 * map: is design to iterate over a collection and call a function upon each 
 *      element if it is an array or eveny keyvalue pair if it is an object. It 
 *      returns an array full of the elements the function acted on. 
 * 
 * @param {Array} Array: The array over which to iterate.
 * @param {function} function: the function that acts or that is called 
 *                             upon every element of the array.
 * @return {Array} Array:it returns a new array that contains all the elements
 *                       of the original array after have ben called by the 
 *                       param function.
 */
 
 function map(collection, action){
    let mappedArr = [];
   each(collection,function(e,i,a){
       mappedArr.push(action(e,i,a));
   }); 
   return mappedArr;
}

module.exports.map = map;   

/**
 * pluck: is design to iterate over an array of objects while looking for a
 *         a specific properties value within the objects of the array. 
 *         These values are returned in a new array. 
 * 
 * @param {Array} Array: The array of objects over which to iterate.
 * @param {property} property: the property that is being searched for
 * @return {Array} new Array:it returns a new array that contains all the values
 *                           that matched the property in each object inside the
 *                           param array.
 * 
 * 
 */
 
 function pluck(array, property){
    return map(array,function(e,i,a){
       return e[property]; 
    });
}

module.exports.pluck = pluck;  

/**
 * every: is design to iterate over a collection and test with a function wether
 *  all elements of of the collection evaluate to truthy or truth.
 * 
 * 
 * @param {collection} collection: a collection over which to iterate.
 * @param {function} function: the function that is used to test every element
 *                             collection for true or truthy
 * @return {boolean} Boolean:it returns a boolean, that states true if all elements 
 *                           pass the test or false if at least one fails.
 * 
 */

 function every(collection, test){
var answer = [];
   each(collection,function(e, i, a) {
    if(test === undefined && e){
     answer.push(e);
    }else if(test){
        if(test(e,i,a)){
            answer.push(e);
        }
    }
    });
    
    if(typeof collection === 'object'){
        return Object.values(collection).length === answer.length;
    }else{
       return collection.length === answer.length;
    }
}

module.exports.every = every;  

/**
 * some: is design to iterate over a collection and test with a function if
 *  at least one element of of the collection evaluate to truthy or truth.
 * 
 * 
 * @param {collection} collection: a collection over which to iterate.
 * @param {function} function: the function that is used to test every element
 *                             collection for true or truthy.
 * @return {boolean} Boolean:it returns a boolean, that states true if at least
 *                           one element passes the test or false if all dont 
 *                           dont pass the test.
 * 
 */
 
function some(collection, test){
 var answer = [];
  each(collection,function(e, i, a) {
    if(test === undefined && !e){
     answer.push(e);
    }else if(test){
        if(!test(e,i,a)){
            answer.push(e);
        }
    }
     
    });
    if(typeof collection === 'object'){
        return Object.values(collection).length !== answer.length;
    }else{
       return collection.length !== answer.length;
    }
}

module.exports.some = some;  

/**
 * reduce: is design to iterate over an array and act upon every element of the
 *          array with a function, the results of whatever im trying to do with 
 *          function are assigned to the seed which later is returned.
 *          if the seed param is not passed the iterations starts at the first 
 *          element of the array and the seed will take the type of the first 
 *          element of the array.
 * 
 * @param {array} array: an array over which to iterate.
 * @param {function} function: the function that is used to act on every element
 *                             of the array
 * @param {seed} seed: is an accumulator and i have the option of  passing 
 *                     it or not passing it. 
 * @return {seed} seed:it returns the seed which holds final answer of what you
 *                       have chossesn to reduce or do with the param function.
 */
 
 
function reduce(array,action,seed){
    each(array,function(e,i,a){
    if(seed === undefined){
        seed =array[0];
    } else {
        seed = action(seed,e,i,a);
    }
    });
    return seed;
}

module.exports.reduce = reduce;  

/**
 * extend: is design to iterate over an infinite number of objects and copy
 *        all tthey key values pairs into the first param object. If the keys
 *        are already exist this are overwritten with the key value pair with 
 *        the key value pair from other objects.
 * 
 * @param {object1} object1: in an object that will hold other key values
 *                            from other objects.
 * @param {other objects} other objects: the objects that hold elements that 
 *                                       will be copied into first object.
 * 
 * @return {Object1} object1:it returns object1 with the transfered/copied key
 *                           value pairs from other objects.
 *    
 */
 
 function extend(object1,collection){
    let objects =Array.from(arguments);
    for(let i = 0; i< objects.length; i++){
        Object.assign(object1,objects[i]);
    }
    return object1;
    }
    
module.exports.extend = extend; 
 
 