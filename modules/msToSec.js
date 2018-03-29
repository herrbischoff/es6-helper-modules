/**
 * Milliseconds to fractions of seconds
 *
 * This can be helpful for CSS animation timings you want to count up
 * dynamically. Just change the `animation-delay` property.
 *
 * @param {number} ms milliseconds
 * @returns {number} seconds
 */
let msToSec = ms => {
  let s = ((ms % 60000) / 1000).toFixed(2);
  return s;
};

export default msToSec;
