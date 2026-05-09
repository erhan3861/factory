
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  13, 1,  1, 1,   12, 12, 12, 12, 0],
					    [0,  13, 13, 1, 1,   12, 15, 15, 101,0],
					    [0,  13, 13, 13, 1,  12, 7,  12, 14, 0],
					    [0,  13, 13, 13, 13, 12, 7,  12, 14, 0],
					    [0,  13, 13, 13, 13, 12, 3,  12, 14, 0],
		    			[0,  13, 13, 13, 1,  12, 100,12, 14, 0],
					    [0,  13, 13, 1,  1,  12, 12, 12, 14, 0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:8, y:2 }; 
	var destinationPosition = { x:6, y:6 }; 
	var targetedBlockNumber = 11;

	startDirection = "left";

	var headerMessage = Space2Level6;
	var explanationMessage = "";


	var jewelnumber = 1;
