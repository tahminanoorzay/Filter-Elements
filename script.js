function btnAll() {
  document.getElementById("cars").style.display = "block";
  document.getElementById("animals").style.display = "block";
  document.getElementById("fruits").style.display = "block";
  document.getElementById("colors").style.display = "block";
}

function btnCars() {
  document.getElementById("cars").style.display = "block";
  document.getElementById("animals").style.display = "none";
  document.getElementById("fruits").style.display = "none";
  document.getElementById("colors").style.display = "none";
}

function btnAnimals() {
  document.getElementById("animals").style.display = "block";
  document.getElementById("cars").style.display = "none";
  document.getElementById("fruits").style.display = "none";
  document.getElementById("colors").style.display = "none";
}

function btnFruits() {
  document.getElementById("fruits").style.display = "block";
  document.getElementById("cars").style.display = "none";
  document.getElementById("animals").style.display = "none";
  document.getElementById("colors").style.display = "none";
}

function btnColors() {
  document.getElementById("colors").style.display = "block";
  document.getElementById("cars").style.display = "none";
  document.getElementById("animals").style.display = "none";
  document.getElementById("fruits").style.display = "none";
}
