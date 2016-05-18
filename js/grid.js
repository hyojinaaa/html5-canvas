// Find the grid canvas 
var gridCanvas = document.querySelector('#grid');

// Get the drawing context
var gridCtx = gridCanvas.getContext('2d');

// Settings
gridCtx.strokeStyle = '#cccccc';
gridCtx.lindWidth = 1;

// Calculate the spread
var numLines = 10;
var spread = gridCanvas.width / 10;

for( var i=0; i<numLines; i++ ) {

	gridCtx.moveTo(i*spread,0);
	gridCtx.lineTo(i*spread,gridCanvas.height);

}

for( var i=0; i<numLines; i++) {

	gridCtx.moveTo(0,i*spread);
	gridCtx.lineTo(gridCanvas.width,i*spread)

}

gridCtx.stroke();