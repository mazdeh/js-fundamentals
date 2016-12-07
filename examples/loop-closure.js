for (var i = 0; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)
    }, 1000);
  })(i);
}

for (let i = 0; i <=5; i++) {
  setTimeout(function() {
    console.log('--ES6: ', i)
  }, 1000)
}
