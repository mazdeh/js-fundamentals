function Foo () {
  console.log('vahid');
  var baz = function (){
    console.log('baz called');
  }
  var a = 2;
}

//var bar = new Foo();
var bar = Object.create(Foo);

console.log('bar.prot: ', Object.getPrototypeOf(bar));
//bar.a = 3;
console.log(bar.a);
