module.exports = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;
// var isArray = Array.isArray;


/**
 * Copies properties from one or more source objects to a target object.
 * 
 * The extend function takes an object target as its first argument, and any 
 * number of additional objects as subsequent arguments. It copies all properties 
 * from each source object to the target object, and returns the modified target object.
 * 
 * Only copies properties that are directly on the source object (not inherited).
 * 
 * @param {Object} target - The target object to copy properties to.
 * @param {...Object} sources - One or more source objects to copy properties from.
 * @returns {Object} The modified target object.
 */
function extend(target) {
  for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]

      for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
              target[key] = source[key]
          }
      }
  }

  return target
}
