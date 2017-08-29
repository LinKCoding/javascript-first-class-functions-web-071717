function receivesAFunction(callback) {
  console.log(callback());
}

function returnsANamedFunction() {
  // return var newFunction = function() {}
  return returnsANamedFunction
}

function returnsAnAnonymousFunction() {
  return function() {}
}
