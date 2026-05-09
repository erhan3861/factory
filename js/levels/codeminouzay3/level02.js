
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  6,  6,  6,  6,  6,  6,  6,  6,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  6,  6,  6,  6,  6,  6,  6,  6,  0],
		    			[0,  1,  1,  1,  12, 12, 12, 12, 12, 0],
					    [0,  6,  6,  6,  12, 100,15, 15, 101,0],
					    [0,  1,  1,  1,  12, 12, 12, 12, 12, 0],
					    [0,  6,  6,  6,  6,  6,  6,  6,  6,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:8, y:6 }; 
	var destinationPosition = { x:5, y:6 }; 
	var targetedBlockNumber = 4;

	var headerMessage = Space3Level2;
	var explanationMessage = "";

	var jewelnumber = 0;
