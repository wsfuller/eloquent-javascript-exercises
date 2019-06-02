/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

console.log('----------\n ES5: For Loop \n----------');

var forResult = '';

for (i = 1; i < 8; i += 1) {
  console.log((forResult += '#'));
}

console.log('----------\n ES5: While Loop \n----------');

var whileResult = '';
var i = 1;

while (i < 8) {
  console.log((whileResult += '#'));
  i += 1;
}

console.log('----------\n ES6: For Loop, .repeat() \n----------');

for (i = 1; i < 8; i += 1) {
  console.log('#'.repeat(i) + '\n');
}
