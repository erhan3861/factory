
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 1,  1,  1,  1,  1,  1,  14, 0],
					    [0,  1,  1,  15, 3,  7,  100,101,1,  0],
					    [0,  1,  1,  15, 12, 12, 12, 3,  1,  0],
					    [0,  1,  1,  7,  12, 12, 12, 7,  1,  0],
		    			[0,  1,  1,  3,  12, 12, 12, 15, 1,  0],
					    [0,  1,  1,  15, 15, 7,  3,  15, 1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  14, 1,  1,  1,  1,  1,  1,  14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];


	var playerPosition = { x:7, y:2 }; 
	var destinationPosition = { x:6, y:2 };  
	var targetedBlockNumber = 9;

	var headerMessage = Space3Level13;
	var explanationMessage = "";

	var jewelnumber = 4;
