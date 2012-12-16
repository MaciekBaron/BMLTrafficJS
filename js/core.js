var BML = function (width, height, mainArray, rule, colors) {
	// Size of the visualisation
	this.width = width;
	this.height = height;

	// The array with initial pixels
	this.mainArray = mainArray;

	// An auxiliary array used in our step function
	this.supportArray = new Array(width);

	for (var i = 0; i < width; i++) {
		this.supportArray[i] = new Array(height);
	}

	// Our rule (which should be an array containing 27 digits)
	this.rule = rule;

	// Our colors object containing the first and the second color
	this.colors = colors;
};

BML.prototype = {
	/*
		This function is the main step function. You can ask it to perform
		a certain number of steps at a time.
	*/
	move_step: function(number) {
		
		while (number > 0) {
			for (var x = 0; x < this.width; x++) {
				for (var y = 0; y < this.height; y++) {
					// We apply our rule, first we move the "blue cars"
					this.supportArray[x][y] = this.rule[this.mainArray[(x+1)%this.width][y] + 3*this.mainArray[x][y] + 9*this.mainArray[(x-1+this.width)%this.width][y]];
				}
			}

			for (var x = 0; x < this.width; x++) {
				for (var y = 0; y < this.height; y++) {
					// Now we move our "red cars"
					this.mainArray[x][y] = this.rule[this.supportArray[x][(y+1)%this.height] + 3*this.supportArray[x][y] + 9*this.supportArray[x][(y-1+this.height)%this.height]];
				}
			}
			number--;
		}
	},
	/*
		This is the rendering function. We simply generate image data based
		on the calculated values.
	*/
	render: function(context, canvasWidth, canvasHeight) {
		// Get canvas data so that we can create image data
		var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);

		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {

				var index = (x + y * canvasWidth) * 4;
				// Data is defined by 4 byte "chunks", the first three are red, green and blue values, the last one is the alpha value
				canvasData.data[index    ] = (this.mainArray[x][y] == 1) ? this.colors.first[0] : this.colors.second[0]; // Red
				canvasData.data[index + 1] = (this.mainArray[x][y] == 2) ? this.colors.second[1] : this.colors.first[1];; // Green
				canvasData.data[index + 2] = (this.mainArray[x][y] == 2) ? this.colors.second[2] : this.colors.first[2]; // Blue
				canvasData.data[index + 3] = (this.mainArray[x][y] == 0) ? 0 : 255; // Alpha
			}
		}

		context.putImageData(canvasData, 0, 0);
	}
}