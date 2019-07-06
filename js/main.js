document.addEventListener("click", function(e) {
  console.log("Event: " + e.type + ", target: " + e.target.name);
})

let credentials = [];

document.addEventListener("keypress", function(e) {
  if (e.keyCode == 8) {
    credentials.pop();
    console.log(credentials.join(''));
  } else {
    credentials.push(String.fromCharCode(e.charCode));
    console.log(credentials.join(''));
  }
})

// document.addEventListener("keypress", function(e) {
//   console.log(e.keyCode);
// })
