function myFunction() {
  var person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }else{
    document.getElementById("demo").innerHTML =
    "Hello " + 'wacha wana' + "! How are you today?";
  }
}