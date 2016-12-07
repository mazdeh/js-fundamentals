"use strict";


var foo = {
  a: 2
}

// when adding properties like this
// writable is defaulted to false.
Object.defineProperty(foo, 'b', {
  value: 'up up',
  writable: true
});

var bar = Object.create(foo);

console.log('foo.b: ', foo.b);

console.log('bar.prot: ', Object.getPrototypeOf(bar));
bar.b = 'shadow';
console.log('bar.b is shadowed: ', bar.b);
console.log('foo.b after shadowing bar.b: ', foo.b);
