/* Project: Pixel Art Maker 
For Grow with Google Udacity Challenge Scholarship
v. 1 - 4/8/2018
by Kat Batuigas
*/

// When size is submitted by the user, save inputs in variables
// Call makeGrid() with the inputs passed in as arguments
const grid = $('#pixelCanvas');
let heightInput, widthInput;

$('#sizePicker').submit(function( event ) {
        grid.empty(); //clear table and creates new one based on new inputs
        heightInput = $('#inputHeight').val();
        widthInput = $('#inputWidth').val();
        event.preventDefault();
   
        makeGrid(widthInput, heightInput);    
});

// Select color input
let color;
grid.on('click', 'td', function ( event ) {
    /*color =*/ colorInput();
    // if event target already has a background color style property, clear it
    if ($(this).is('td[style^="background-color"]')) {
        $(this).css('background-color', '');
    } else {
        $(this).attr('style', 'background-color: '+ color);
    }
});

// get selected color from picker
function colorInput() {
    color = $('#colorPicker').val();
    return color;
};

function makeGrid(w, h) {
    for (let y = 1; y <= h; y++) {
        grid.append("<tr>"); //adds new row
        for (let x = 1; x <= w; x++) {
            $(grid.children("tr")).last().append("<td></td>"); //adds td for that row -- last() will match on "current" row
        }
        grid.append("</tr>");    
    }
}
    

/*
1. User enters desired width and height for grid.
2. On clicking submit, save entered width and height.
3. Create grid based on saved width and height.
3a. Take width and create number of columns based on width.
One box = td
3b. Take height and create number of rows based on height.
4. User selects desired color from color picker.
5. Save selected color.
6. Click a box on the grid, and color box with selected picker.
6a. If the box is already colored, clear the color.
7. Repeat 4 to 6 as desired.
*/