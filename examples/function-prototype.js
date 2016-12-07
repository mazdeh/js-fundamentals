

function Foo (name) {
  this.name = name
}

Foo.prototype.myName = function() {
  console.log(this.name);
}

var bar = new Foo('vahid');
var baz = new Foo('mazdeh');

bar.myName();
baz.myName();

console.log('bar proto: ', Object.getPrototypeOf(bar));
console.log('baz proto: ', Object.getPrototypeOf(baz));
console.log('foo proto: ', Object.getPrototypeOf(Foo));



