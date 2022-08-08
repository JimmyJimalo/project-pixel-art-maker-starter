const grid = document.createElement("tBody");
const gridSize = document.querySelector("#sizePicker");
const canvas = document.querySelector("#pixelCanvas")

//Function to be used in addEventListener() method to fill block in canvas
function colorBlock(e) {
    const color = document.querySelector("#colorPicker").value;
    e.target.bgColor = color;
};
/*
Creates grid used as canvas
Rows fit inside the height of grid
Columns fit inside the width of grid
*/
function makeGrid(height, width) {
    grid.innerHTML = "";
    for (let r = 0; r < height;  r++) {
          const row = document.createElement("tr");
          for (let b = 0; b < width; b++) {
              const block = document.createElement("td");
              row.appendChild(block); /*
                                        Adds columns
                                        (amount of blocks in each row)
                                      */
          }
      grid.appendChild(row); //Adds rows + the columns to grid
    }
    canvas.appendChild(grid); //Basically creates canvas by adding grid
    grid.addEventListener("click", colorBlock) /*Fills in block on canvas
                                                 with selected color*/
    event.preventDefault(); //Stops page from refreshing when clicking submit
};

gridSize.addEventListener("submit", function() {
  let height = document.querySelector("#inputHeight").value; //Select
  let width = document.querySelector("#inputWidth").value;   //size input
  makeGrid(height, width);
});
