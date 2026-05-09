
var world = [
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  1,   1,  1,  1,   1,  1,  1,  1,  0],
	[0,  101, 12, 12, 12,  12, 12, 1,  1,  0],
	[0,  15,  12, 15, 15,  15, 15,  1,  1,  0],
	[0,  15,  12, 15, 12,  12, 15,  1,  1,  0],
	[0,  15,  12, 15, 100, 12, 15,  1,  1,  0],
	[0,  15,  12, 12, 12,  12, 15,  1,  1,  0],
	[0,  7,   15, 15, 15,  15, 7,  1,  14, 0],
	[0,  0,   0,  0,  0,   0,  0,   0,  0,  0]
];

	var playerPosition = { x:1, y:3 };
	var destinationPosition = { x:4, y:6 }; 
	var targetedBlockNumber = 21;

	var headerMessage = Space3Level6;
	var explanationMessage = "";

	var jewelnumber = 0;
