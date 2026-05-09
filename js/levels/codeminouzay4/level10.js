
	var world = [
					    [0,  0,   0,  0,   0,  0,   0,  0,  0,  0],
					    [0,  12,  1,  1,   1,  1,   1,  1,  12, 0],
					    [0,  1,  12,  12,  12,  12, 12, 12, 1,  0],
					    [0,  1,  12,  15,  100, 1,  1,  12, 1,  0],
					    [0,  1,  12,  7,   13,  13, 1,  12, 1,  0],
		    			[0,  1,  12,  15,  101, 1,  1,  12, 1,  0],
					    [0,  1,  12,  12,  12,  12, 12, 12, 1,  0],
					    [0,  1,  1,   1,   1,   1,  1,  1,  1,  0],
					    [0,  12, 12,  12,  12,  12, 12, 12, 12, 0],
					    [0,  0,  0,   0,   0,   0,  0,  0,  0,  0]
				];

	var playerPosition = { x:4, y:5 }; 
	var destinationPosition = { x:4, y:3 }; 
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level10;
	var explanationMessage = "";

	var jewelnumber = 0;
