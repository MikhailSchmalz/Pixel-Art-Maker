// Select color input and store in variable selColor
let selColor = document.getElementById("colorPicker");

// Select size input and store in variable selSize
var selSize = document.getElementById("sizePicker");

// Define variables and store values for DOM elements
var pixelCanvas = document.getElementById("pixelCanvas");

selSize.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    //
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    pixelCanvas.innerHTML = null;

    //loop over each row and column or cell and change its color based on selected color
    for (var h = 0; h < height; h++) {
        var row = pixelCanvas.insertRow(h);
        for (var w = 0; w < width; w++) {
            var cell = row.insertCell(w);
            cell.addEventListener('click', function(event) {
                // change color of cell when it is clicked
                event.target.style.backgroundColor = selColor.value;
            });
        }
    }
}
