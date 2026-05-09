
var world = [
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  1,   1,  1,  1,   1,  1,  1,  1,  0],
	[0,  101, 12, 12, 12,  12, 12, 1,  1,  0],
	[0,  15,  12, 15,15,  15, 3,  1,  1,  0],
	[0,  15,  12, 15,  12,  12, 15,  1,  1,  0],
	[0,  15,  12, 100,  1,   12, 15,  1,  1,  0],
	[0,  15,  12, 12, 12,  12, 15,  1,  1,  0],
	[0,  3,  15, 15, 15,  15, 15,  1,  14, 0],
	[0,  0,   0,  0,  0,   0,  0,   0,  0,  0]
];

	var playerPosition = { x:1, y:3 };
	var destinationPosition = { x:3, y:6 }; 
	var targetedBlockNumber = 17;

	var headerMessage = Space3Level6;
	var explanationMessage = "";

	var jewelnumber = 2;
