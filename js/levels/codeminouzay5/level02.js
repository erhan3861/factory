
	var world = [
					[0,  0,    0,  0,  0,  0,  0,  0,  0,  0],
					[0,  14,    1,  1,  1,  1,  1,  1,  14,  0],
					[0,  12,   12, 12, 12, 12, 12, 12, 1,  0],
					[0,  101,  1,  1,  1,  1,  12, 12,  1, 0],
					[0,  15,   1,  1,  1,  12, 1,  12,  1, 0],
					[0,  15,   1,  1,  12, 1,  1,  12,  1, 0],
					[0,  15,   1,  12, 1,  1,  1,  12,  1, 0],
					[0,  15,   12, 1,  1,  1,  1,  12,  1, 0],
					[0,  15,   15, 15, 15, 15, 100,12,  14, 0],
					[0,  0,    0,  0,  0,  0,  0,   0,  0,  0]
				];

	var playerPosition = { x:1, y:3 }; 
	var destinationPosition = { x:6, y:8 }; 
	var targetedBlockNumber = 6;

	var headerMessage = Space3Level2;
	var explanationMessage = "";

	var jewelnumber = 0;
