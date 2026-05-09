
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  13, 13, 13, 13, 13, 13, 13, 13, 0],
					    [0,  1,  1,  1,  1,  1,  101,1,  1,  0],
					    [0,  14, 1,  1,  12, 12, 100,12, 12, 0],
					    [0,  14, 14, 1,  1,  12, 1,  12, 1,  0],
		    			[0,  14, 14, 1,  1,  1,  1,  1,  14, 0],
					    [0,  14, 14, 1,  1,  1,  1,  14, 14, 0],
					    [0,  14, 14, 1,  1,  1,  1,  14, 14, 0],
					    [0,  13, 13, 13, 13, 13, 13, 13, 13, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:6, y:2 }; 
	var destinationPosition = { x:6, y:3 }; 
	var targetedBlockNumber = 2;

	var headerMessage = Space1Level1;
	var explanationMessage = "";

	var jewelnumber = 0;