var sizePicker = $("#sizePicker");
var pixelCanvas = $("#pixelCanvas");
var colorPicker = $("#colorPicker");
var inputColor = "#000000";

// Select color input
colorPicker.change(function(event){
	inputColor = $(this).val();
});

pixelCanvas.click(function(event){
	$(event.target).attr("bgcolor",inputColor);
});

// Select size input
var inputHeight = $("#inputHeight");
var inputWeight = $("#inputWeight");

// When size is submitted by the user, call makeGrid()
sizePicker.submit(makeGrid);

function makeGrid(event) {
	// Your code goes here!
	event.preventDefault();
	pixelCanvas.children().remove();
	pixelCanvas.attr("bgcolor","#FFFFFF");
	for (var i = 0; i < inputHeight.val(); i++) {
		pixelCanvas.append("<tr></tr>");
		for (var j = 0; j < inputWeight.val(); j++) {
			pixelCanvas.children().last().append("<td></td>");
		}
	}
}
