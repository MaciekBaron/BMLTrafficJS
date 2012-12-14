var BML = function (n, mainArray, rule) {
	this.n = n;

	this.mainArray = mainArray;

	this.supportArray = new Array(n);
	for (var i = 0; i < n; i++) {
		this.supportArray[i] = new Array(n);
	}

	this.State = {
		EMPTY: 0,
		RED: 1,
		BLUE: 2
	}

	this.rule = rule;
};

BML.prototype = {
	move_step: function(number) {
		
		for (var i = 0; i < number; i++) {
			for (var x = 0; x < this.n; x++) {
				for (var y = 0; y < this.n; y++) {
					this.supportArray[x][y] = this.rule[this.mainArray[(x+1)%n][y] + 3*this.mainArray[x][y] + 9*this.mainArray[(x-1+n)%n][y]];
				}
			}

			for (var x = 0; x < this.n; x++) {
				for (var y = 0; y < this.n; y++) {
					this.mainArray[x][y] = this.rule[this.supportArray[x][(y+1)%n] + 3*this.supportArray[x][y] + 9*this.supportArray[x][(y-1+n)%n]];
				}
			}
		}
	},

	render: function(context, canvasWidth, canvasHeight) {
		var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);

		for (var x = 0; x < this.n; x++) {
			for (var y = 0; y < this.n; y++) {
				var index = (x + y * canvasWidth) * 4;
				canvasData.data[index    ] = (this.mainArray[x][y] == this.State.RED) ? 200 : 0; // Red
				canvasData.data[index + 1] = 0; // Green
				canvasData.data[index + 2] = (this.mainArray[x][y] == this.State.BLUE) ? 200 : 0; // Blue
				canvasData.data[index + 3] = (this.mainArray[x][y] == this.State.EMPTY) ? 0 : 255; //Alpha
			}
		}

		context.putImageData(canvasData, 0, 0);
	}
}