
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  14, 14, 1,  1,  1,  1,  1,  1],
					    [0,  0,  14, 14, 1,  12, 12, 12, 12,12],
					    [0,  0,  1,  1,  1,  12, 15, 15, 15,101],
					    [0,  0,  1,  1,  1,  12, 15, 12, 12,12],
					    [0,  0,  12, 12, 12, 12, 15, 12, 1,  1],
		    			[0,  0,  12, 15, 15, 15, 15, 12, 1,  1],
					    [0,  0,  12, 15, 12, 12, 12, 12, 1,  1],
					    [0,  0,  12, 15, 12, 1,  1,  1, 14, 14],
					    [0,  0,  12, 100,12, 1,  1,  1, 14, 14],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:9, y:3 }; 
	var destinationPosition = { x:3, y:9 };  
	var targetedBlockNumber = 10;

	var startDirection = "left";

	var headerMessage = Space3Level5;
	var explanationMessage = "";

	var jewelnumber = 0;
