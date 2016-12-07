#Q: What is Hoisting in JavaScript?
A: In JS, variable and function declarations happen during compile time and their assignments happen in place during run time. So in a way, declarations are "moved" to the top of the code, or "hoisted", while the rest of the code (logic) runs in place and in order.
```js
foo();

function foo() {
  console.log(a); // undefined
  var a = 2;
}
```

`a` is `undefined` because its assignment happens after its value retrieval in the console.log.

Furthermore, `foo()` is called and executed with no errors because its declarations was moved to the top of the code.

Hoisting is per-scope.

Function declarations are hoisted, but function expressions are not.

#Q: Function Declaration vs. Function Expression?
A: ```js function foo () { ... } ``` vs. ```js var foo = function() { ... } ```


#Q: What is Closure?
A: The reference to the outer lexical scope of a function that is passed around as a value and is invoked outside its author time lexical scope.

In example below, `bar` has access to a even after `foo` is run.

```js
function foo() {
  var a = 1;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz = foo();
baz(); // 1
```

Whenever a function is transported outside of its lexical scope it will retain access to the lexical scope that it was originally declared in. This is Closure.



#Q: What is a `module` in JS?
A: Modules have two characteristics:
1. they have an outer  wrapping function aronud them that can be invoked to create the enclosing scope.
2. the return value of that function must include a reference to at least one inner function that has closure over the private inner scope of the wrapper.





