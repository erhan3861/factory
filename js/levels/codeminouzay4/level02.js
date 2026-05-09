
	var world = [
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,   0],
					    [0,  14,  14,  14,  14,  14,  14,  14,  14,  0],
					    [0,  13,  1,   1,   1,   1,   1,   1,   13,  0],
					    [0,  13,  1,   1,   12,  101, 12,  12,  13,  0],
					    [0,  13,  13,  1,   12,  15,  12,  12,  13,  0],
		    			[0,  13,  1,   1,   12,  15,  12,  12,  13,  0],
					    [0,  13,  13,  1,   12,  15,  15,  100, 13,  0],
					    [0,  13,  1,   1,   12,  12,  12,  12,  13,  0],
					    [0,  13,  1,   1,   1,   1,   1,   1,   13,  0],
					    [0,  0,   0,   0,   0,   0,   0,   0,   0,   0]
				];

	var playerPosition = { x:5, y:3 }; 
	var destinationPosition = { x:7, y:6 }; 
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level2;
	var explanationMessage = "";

	var jewelnumber = 0;
