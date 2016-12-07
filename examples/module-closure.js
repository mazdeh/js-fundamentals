function coolModule() {
  var name = 'Vahid';
  var last = 'Mazdeh';

  function printFirst() {
    console.log('Firstname: ', name);
  }

  function printLast() {
    console.log('Lastname: ', last);
  }

  return {
    printFirst: printFirst,
    printLast: printLast
  }
}

var cool = coolModule();
cool.printFirst();
cool.printLast();



