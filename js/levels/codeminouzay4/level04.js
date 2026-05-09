
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0, 14,  8,  8,  8,  8,  8,  8,  14, 0],
					    [0, 13,  8,  8,  8,  8,  8,  8,  13, 0],
					    [0, 13,  8,  8,  8,  12, 101,12, 13, 0],
					    [0, 13,  8,  8,  1,  12, 3,  12, 13, 0],
		    			[0, 13,  8,  1,  1,  12, 7,  12, 13, 0],
					    [0, 13,  1,  1,  1,  12, 3,  12, 13, 0],
					    [0, 13,  1,  1,  1,  12, 100,12, 13, 0],
					    [0, 14,  1,  1,  1,  1,  1,  1,  14, 0],
					    [0, 0,   0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:6, y:3 }; 
	var destinationPosition = { x:6, y:7 };  
	var targetedBlockNumber = 0;

	var headerMessage = Space4Level4;
	var explanationMessage = "";

	var jewelnumber = 2;
