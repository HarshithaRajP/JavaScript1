// callbacks

// function loadScript(src){
//    var script = document.createElement("script");
//    script.src = src;
//    document.body.appendChild(script);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// function loadScript(src){
//    var script = document.createElement("script");
//    script.src = src;
//    script.onload = function(){
//    console.log("Loaded script with SRC:" + src);
   
  
// };
// document.body.appendChild(script);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// function loadScript(src ,callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload=function(){
//         console.log("Loaded script with SRC:" + src);
//     };
//     callback();
//     document.body.appendChild(script);
// }
// function hello(){
//  alert("good evening");
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello);
   
//callbacks: callback is a function passed as an arguement into an another function
//pyramid of doom: the phenomenon which happpens when we nest multiple callbacks with a function is called a
//callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also
//called the "Pyramid of doom". it makes the code very difficult to understand and maintain.
//the solution 
