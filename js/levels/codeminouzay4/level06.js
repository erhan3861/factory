
	var world = [
					   	[0,  1,  12,  101, 13,  13,  13,  12,  1,  0],
					    [0,  1,  12,  15,  13,  13,  100, 12,  1,  0],
					    [0,  1,  12,  15,  13,  13,  15,  12,  1,  0],
					    [0,  1,  12,  15,  15,  15,  15,  12,  1,  0],
					    [0,  1,  12,  12,  12,  12,  12,  12,  1,  0],
		    			[0,  1,  1,   1,   1,   1,   1,   1,   1,  0],
					    [0,  7,  1,   7,   1,   7,   1,   7,   1,  0],
					    [0,  1,  7,   1,   7,   1,   7,   1,   7,  0],
					    [0,  7,  1,   7,   1,   7,   1,   7,   1,  0],
					    [0,  0,  0,   0,   0,   0,   0,   0,   0,  0]
				];

	var playerPosition = { x:3, y:0 };
	var destinationPosition = { x:6, y:1 };  
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level6;
	var explanationMessage = "";
	
	var jewelnumber = 0;
