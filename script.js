// Tambah angka/operator ke layar
function addToDisplay(value) {
  const displayInput = document.getElementById("display");
  displayInput.value += value;
}

// Hapus seluruh isi layar
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Hapus karakter terakhir
function deleteLast() {
  const displayInput = document.getElementById("display");
  displayInput.value = displayInput.value.slice(0, -1);
}

// Hitung hasil ekspresi
function calculate() {
  const displayInput = document.getElementById("display");
  try {
    // Validasi sederhana: hanya angka dan operator
    if (/^[0-9+\-*/.]+$/.test(displayInput.value)) {
      displayInput.value = Function('"use strict";return (' + displayInput.value + ')')();
    } else {
      displayInput.value = "Invalid Input";
    }
  } catch {
    displayInput.value = "Error";
  }
}
