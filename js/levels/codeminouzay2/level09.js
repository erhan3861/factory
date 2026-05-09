
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14,  1,  1,  1, 1,  1,  1,  14, 0],
					    [0,  6,  1,  1,  1,  101,15, 15, 15, 0],
					    [0,  6,  6,  1,  1,  1,  12, 12, 3,  0],
					    [0,  6,  6,  6,  1,  1,  12, 12, 3,  0],
		    			[0,  6,  6,  6,  1,  12, 12, 12, 3,  0],
					    [0,  6,  6,  1,  1,  12, 100,7,  15, 0],
					    [0,  6,  1,  1,  1,  12, 12, 12, 12, 0],
					    [0,  14,  1,  1,  1,  1, 1,  1,  14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:5, y:2 }; 
	var destinationPosition = { x:6, y:6 };
	var targetedBlockNumber = 16;

	startDirection = "right";

	var headerMessage = Space2Level10;
	var explanationMessage = "";

	var jewelnumber = 3;
