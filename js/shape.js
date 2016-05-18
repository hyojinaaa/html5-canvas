var shapesCanvas = document.querySelector('#shapes');

// Make a variable to draw something 
var shapesContext = shapesCanvas.getContext('2d');

// Draw a rectangle
// Choose a colour of your brush
shapesContext.fillStyle = '#00b9ff';
// Use the function drawing a rectangle, need 4 values (where this rectangle begins and ends)
shapesContext.fillRect(10, 10, 100, 100);
shapesContext.fillRect(10, 30, 150, 50);

// Change the color 
shapesContext.fillStyle = 'rgba(100, 0, 0, .5)';
shapesContext.fillRect(10, 40, 300, 200);

// Draw a line
shapesContext.strokeStyle = '#333';
// Choose the thickness
shapesContext.lineWidth = 2;
// Where do I want to start my line
shapesContext.moveTo(50, 150);
// Where do I want to finish my line
shapesContext.lineTo(100, 150);
shapesContext.lineTo(120, 170);
shapesContext.lineTo(140, 130);
// Start to draw
shapesContext.stroke();