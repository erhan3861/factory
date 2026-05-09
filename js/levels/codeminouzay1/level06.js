
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 14, 1,  1,  1,  1,  14, 14, 0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  13, 0],
					    [0,  13, 1,  1,  12, 100,12, 1,  13, 0],
					    [0,  13, 1,  1,  12, 15, 12, 1,  13, 0],
		    			[0,  13, 1,  1,  12, 15, 12, 1,  13, 0],
					    [0,  13, 1,  1,  12, 15, 12, 1,  13, 0],
					    [0,  13,  1, 1,  12, 101,12, 1,  13, 0],
					    [0,  14, 14, 1,  1,  1,  1,  14, 14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:5, y:7 }; 
	var destinationPosition = { x:5, y:3 };
	var targetedBlockNumber = 7;

	var headerMessage = Space1Level6;
	var explanationMessage = "";
	var jewelnumber = 0;
