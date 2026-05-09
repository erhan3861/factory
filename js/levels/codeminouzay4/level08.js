
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  13, 13, 13, 13, 13, 13, 13, 13, 0],
					    [0,  6,  6,  6,  6,  6,  6,  6,  13, 0],
					    [0,  6,  1,  1,  100,3,  15, 6,  13, 0],
					    [0,  6,  1,  12, 12, 12, 3,  6,  13, 0],
		    			[0,  6,  1,  1,  101,3,  15, 6,  13, 0],
					    [0,  6,  6,  6,  6,  6,  6,  6,  13, 0],
					    [0,  13, 13, 13, 13, 13, 13, 13, 13, 0],
					    [0,  13, 13, 13, 13, 13, 13, 13, 13, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:4, y:5 }; 
	var destinationPosition = { x:4, y:3 }; 
	var targetedBlockNumber = 0; 

	var headerMessage = Space4Level8;
	var explanationMessage = "";

	var jewelnumber = 3;
