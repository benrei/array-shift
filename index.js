"use strict";

function shift(array, old_index, new_index) {
  if (new_index >= array.length) {
    var k = new_index - array.length + 1;
    while (k--) {
      array.push(undefined);
    }
  }
  array.splice(new_index, 0, array.splice(old_index, 1)[0]);
};

function down(array, index) {
  if (array && index >= 0 && index < array.length - 1) shift(array, index, index + 1);
};

function up(array, index) {
  if (array && index > 0) shift(array, index, index - 1);
};

module.exports.shift = shift;
module.exports.down = down;
module.exports.up = up;