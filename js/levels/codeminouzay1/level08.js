
	var world = [
					   	[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  13,  1, 1,  1,  1,  1,  1,  13, 0],
					    [0,  13,  12,101,1,  1,  1,  1,  13, 0],
					    [0,  13,  12,15, 12, 12, 12, 13, 13, 0],
					    [0,  13,  12,15, 15, 15, 12, 13, 13, 0],
		    			[0,  13,  1, 12, 12, 15, 12, 13, 13, 0],
					    [0,  13,  12,100,15, 15, 12, 13, 13, 0],
					    [0,  13,  14,14, 14, 14, 14, 14, 13, 0],
					    [0,  13,  1, 1,  1,  1,  1,  1,  13, 0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:3, y:2 }; 
	var destinationPosition = { x:3, y:6 }; 
	var targetedBlockNumber = 12;

	var headerMessage = Space1Level8;
	var explanationMessage = "";
	
	var jewelnumber = 0;
