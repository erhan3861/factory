
var world = [
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  1,   1,  1,  1,   1,  1,  1,  1,  0],
	[0,  101, 12, 1,  12,  12, 12, 1,  1,  0],
	[0,  3,   12, 1,  12,  100,12, 1,  1,  0],
	[0,  3,   12, 1,  12,  3,  12, 1,  1,  0],
	[0,  3,   12, 12, 12,  3,  12, 1,  1,  0],
	[0,  3,   3,  3,  3,   3,  1,  1,  1,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0]
];

	var playerPosition = { x:1, y:3 };
	var destinationPosition = { x:5, y:4 }; 
	var targetedBlockNumber = 12;

	var headerMessage = Space3Level6;
	var explanationMessage = "";

	var jewelnumber = 10;
