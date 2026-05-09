
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  1,  1,  1,  12, 1,  12, 1,  1,  0],
					    [0,  8,  8,  8,  12, 101,12, 8,  8,  0],
					    [0,  1,  1,  1,  12, 4,  12, 1,  1,  0],
					    [0,  8,  8,  8,  12, 4,  12, 8,  8,  0],
		    			[0,  1,  1,  1,  12, 15, 12, 1,  1,  0],
					    [0,  8,  8,  8,  12, 100,12, 8,  8,  0],
					    [0,  1,  1,  1,  12, 12, 12, 1,  1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:5, y:2 }; 
	var destinationPosition = { x:5, y:6 }; 
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level7;
	var explanationMessage = "";

	var jewelnumber = 4;
