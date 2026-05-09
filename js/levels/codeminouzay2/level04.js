
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 13, 13, 13, 6,  6,  6,  6,  0],
					    [0,  1,  13, 13, 13, 6,  15, 15, 101,0],
					    [0,  1,  13, 13, 13, 6,  15, 12, 12, 0],
					    [0,  1,  13, 13, 13, 6,  4,  12, 12, 0],
		    			[0,  1,  13, 13, 13, 6,  15, 3,  100,0],
					    [0,  1,  13, 13, 13, 6,  6,  6,  6,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  14,  1,  1,  1, 1,  1,  1,  14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:8, y:2 }; 
	var destinationPosition = { x:8, y:5 };
	var targetedBlockNumber = 13;

	startDirection = "left";

	var headerMessage = Space2Level4;
	var explanationMessage = "";

	var jewelnumber = 3;
