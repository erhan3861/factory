
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 14, 1,  6,  12, 12, 12, 12, 0],
					    [0,  14, 1,  1,  6,  12, 15, 15, 101,0],
					    [0,  14, 1,  1,  6,  12, 15, 12, 12, 0],
					    [0,  14, 1,  1,  6,  12, 15, 4,  12, 0],
		    			[0,  14, 1,  1,  6,  12, 12, 15, 12, 0],
					    [0,  14, 1,  1,  6,  12, 100,7,  12, 0],
					    [0,  14, 1,  1,  6,  12, 12, 12, 12, 0],
					    [0,  14, 14, 1,  6,  6,  6,  6,  6,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:8, y:2 }; 
	var destinationPosition = { x:6, y:6 }; 
	var targetedBlockNumber = 15;

	startDirection = "left";

	var headerMessage = Space2Level5;
	var explanationMessage = "";

	var jewelnumber = 2;
