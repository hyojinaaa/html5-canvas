var photoCanvas = document.querySelector('#photo');
var photoCtx = photoCanvas.getContext('2d');

// Get an image from Flickr
var image = new Image();

image.src = 'http://loremflickr.com/200/200';

// Wait until image is downloaded, and then apply a function
image.onload = function() {

	// Image is ready to be manipulated / used
	photoCtx.drawImage( image, 0, 0 );

}

Caman('#filters', 'img/200.jpg', function(){

	this.brightness(-10);
	this.sepia();
	this.render();

});