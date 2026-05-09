
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,   0,  0],
					    [0,  14, 14, 1,  1,  1,  1,  14,  14, 0],
					    [0,  14, 1,  1,  1,  1,  1,  1,   14, 0],
					    [0,  1,  1,  1,  12, 101,12, 100, 12, 0],
					    [0,  1,  1,  1,  12, 15, 12, 15,  12, 0],
		    			[0,  1,  1,  1,  12, 15, 15, 15,  12, 0],
					    [0,  1,  1,  1,  12, 12, 12, 12,  12, 0],
					    [0,  14, 1,  1,  1,  1,  1,  1,   14, 0],
					    [0,  14, 14, 1,  1,  1,  1,  14,  14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,   0,  0]
				];

	var playerPosition = { x:5, y:3 }; 
	var destinationPosition = { x:7, y:3 }; 
	var targetedBlockNumber = 9;

	var headerMessage = Space1Level5;
	var explanationMessage = "";

	var jewelnumber = 0;