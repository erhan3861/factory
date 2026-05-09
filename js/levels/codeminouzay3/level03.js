
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  14, 0],
					    [0,  13, 13, 1,  1,  1,  1,  12, 101,0],
					    [0,  13, 13, 13, 1,  1,  1,  12, 15, 0],
					    [0,  13, 13, 13, 12, 12, 12, 12, 15, 0],
		    			[0,  13, 13, 13, 12, 100,15, 15, 15, 0],
					    [0,  13, 13, 13, 12, 12, 12, 12, 12, 0],
					    [0,  13, 13, 1,  1,  1,  1,  1,  1,  0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:8, y:2 }; 
	var destinationPosition = { x:5, y:5 }; 
	var targetedBlockNumber = 6;

	var headerMessage = Space3Level3;
	var explanationMessage = "";

	var jewelnumber = 0;
