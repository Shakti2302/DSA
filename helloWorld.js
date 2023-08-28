// How to create hello world using function // 

var createHelloWorld = function() {
  return function() {
      return console.log("Hello World");

      
  }
  const output = createHelloWorld();
  console.log(output());
};