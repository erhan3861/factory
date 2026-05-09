
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  6,  1,  1,  1,  1,  12, 12, 12, 0],
					    [0,  14, 6,  1,  1,  1,  12, 101,12, 0],
					    [0,  1,  14, 6,  1,  1,  12, 15, 12, 0],
					    [0,  1,  1,  14, 6,  1,  12, 15, 12, 0],
		    			[0,  1,  1,  14, 6,  1,  12, 5,  12, 0],
					    [0,  1,  14, 6,  1,  1,  12, 12, 12, 0],
					    [0,  14, 6,  1,  1,  1,  1,  13, 13, 0],
					    [0,  6,  1,  1,  1,  1,  1,  13, 13, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:7, y:2 }; 
	var destinationPosition = { x:7, y:5 };
	var targetedBlockNumber = 5;

	var headerMessage = Space3Level6;
	var explanationMessage = "";

	var jewelnumber = 3;
