var foo = function() {
  var a = 1;
  function bar () {
    console.log(a);
  }
  
  baz(bar);
}


function baz(fn) {
  console.log('I am in baz but have access to foos scope! CLOSURE!');
  fn();
};
foo();
