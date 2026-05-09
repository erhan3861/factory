
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 14, 6,  6,  6,  6,  14, 14, 0],
					    [0,  14, 1,  1,  1,  12, 101,12, 14, 0],
					    [0,  6,  1,  1,  1,  12, 15, 12, 6,  0],
					    [0,  6,  1,  1,  1,  12, 15, 12, 6,  0],
		    			[0,  6,  1,  1,  1,  12, 100,12, 6,  0],
					    [0,  6,  1,  1,  1,  12, 12, 12, 6,  0],
					    [0,  14, 1,  1,  1,  1,  1,  1,  14, 0],
					    [0,  14, 14, 6,  6,  6,  6,  14, 14, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:6, y:2 }; 
	var destinationPosition = { x:6, y:5 };
	var targetedBlockNumber = 3;

	var headerMessage = Space3Level1;
	var explanationMessage = "";

	var jewelnumber = 0;

	jewelSignExist = false;
	jewelSignX = 6;
	jewelSignY = 4;
