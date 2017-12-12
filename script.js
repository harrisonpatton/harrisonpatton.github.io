var image = document.getElementById("headshot");
var curr = 0;
var headshots = ["images/belden_headshot1.jpg", "images/belden_headshot2.jpg", "images/belden_headshot3.jpg", "images/belden_headshot4.jpg", "images/belden_headshot5.jpg", "images/belden_headshot6.jpg", "images/belden_jewel.png"];

function changepic(){
  var image = document.getElementById("headshot");
  var index = Math.floor(Math.random() * 5)+0;
  console.log(index);
  console.log(headshots[index]);
  image.src= headshots[index];
}

function test(){
  setInterval(changepic, 4000);
}
