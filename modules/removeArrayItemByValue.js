/**
 * Remove array item by value
 *
 * @param {Array} array
 * @returns {Array}
 */
let removeArrayItemByValue = function (array) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && array.length) {
    what = a[--L];
    while ((ax = array.indexOf(what)) !== -1) {
      array.splice(ax, 1);
    }
  }
  return array;
};

export default removeArrayItemByValue;
