
var world = [
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  1,  12,  12, 101,  12, 12,  1,  1,  0],
	[0,  1,  12,  3,  15,   7, 12, 1,  1,  0],
	[0,  1,  12,  15,  12,  1,  12, 1,  1,  0],
	[0,  1,  12,  15,  12,  1,  12, 1,  1,  0],
	[0,  1,  12,  3,  15,   7,  12, 1,  1,  0],
	[0,  1,  12,  12, 100, 12, 12,  1,  1,  0],
	[0,  14,  1,  1,  1,   1,  1,  1,  14, 0],
	[0,  0,   0,  0,  0,   0,  0,  0,  0,  0]
];

	var playerPosition = { x:4, y:2 };
	var destinationPosition = { x:4, y:7 }; 
	var targetedBlockNumber = 13;

	var headerMessage = Space3Level6;
	var explanationMessage = "";

	var jewelnumber = 2;