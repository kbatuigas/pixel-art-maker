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


grid.on('mousedown mouseover', 'td', function ( event ) { //click and drag to paint
    colorInput();
    if (event.buttons === 1) {
        if ($(this).is('td[style^="background-color"]')) {
            $(this).css('background-color', '');
        } else {
            $(this).attr('style', 'background-color: '+ color);
        }
    }
})


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
    
