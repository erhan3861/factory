
	var world = [
					    [0,  0,  0,  0,   0,  0,  0,  0,  0,  0],
					    [0,  14, 12, 12,  12, 12, 12, 12, 14, 0],
					    [0,  1,  12, 15,  101,1,  1,  12, 1,  0],
					    [0,  1,  12, 15,  12, 12, 1,  12, 1,  0],
					    [0,  1,  12, 15,  12, 12, 1,  12, 1,  0],
		    			[0,  1,  12, 100, 1,  1,  1,  12, 1,  0],
					    [0,  1,  12, 12,  12, 12, 12, 12, 1,  0],
					    [0,  1,  1,  1,   1,  1,  1,  1,  1,  0],
					    [0,  14, 1,  1,   1,  1,  1,  1,  14, 0],
					    [0,  0,  0,  0,   0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:4, y:2 }; 
	var destinationPosition = { x:3, y:5 }; 
	var targetedBlockNumber = 7;

	var headerMessage = Space1Level9;
	var explanationMessage = "";

	var jewelnumber = 0;