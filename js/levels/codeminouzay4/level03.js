
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 1,  1,  1,  1,  1,  1, 14,  0],
					    [0,  14, 1,  1,  1,  1,  1,  1, 14,  0],
					    [0,  14, 13, 12, 101,12, 1,  13, 14, 0],
					    [0,  14, 13, 12, 15, 12, 1,  13, 14, 0],
		    			[0,  14, 13, 12, 15, 12, 1,  13, 14, 0],
					    [0,  14, 13, 12, 15, 12, 1,  13, 14, 0],
					    [0,  14, 13, 12, 100,12, 13, 13, 14, 0],
					    [0,  14, 13, 13, 13, 13, 13, 13, 14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:4, y:3 }; 
	var destinationPosition = { x:4, y:7 };  
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level3;
	var explanationMessage = "";

	var jewelnumber = 0;
