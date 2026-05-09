
	var world = [
					    [0,   0,  0,  0,  0,   0,  0,   0,  0,  0],
					    [0,  14,  1,  1,  1,   1,  1,   1,  14, 0],
					    [0,  13,  1,  1,  12,  12, 101, 12, 13, 0],
					    [0,  13,  1,  1,  12,  12, 15,  12, 13, 0],
					    [0,  13,  1,  1,  12,  12, 15,  12, 13, 0],
		    			[0,  13,  1,  1,  12,  12, 100, 12, 13, 0],
					    [0,  13,  1,  1,  1,   1,  1,   1,  13, 0],
					    [0,  13,  1,  1,  1,   1,  1,   1,  13, 0],
					    [0,  14,  1,  1,  1,   1,  1,   1,  14, 0],
					    [0  ,0,   0,  0,  0,   0,  0,   0,  0,  0]
				];

	var playerPosition = { x:6, y:2 }; 
	var destinationPosition = { x:6, y:5 };  
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level1;
	var explanationMessage = "";

	var jewelnumber = 0;
