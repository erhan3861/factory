
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 14, 14, 14, 14, 14, 14, 14, 0],
					    [0,  13, 1,  1,  1,  12, 101,12, 13, 0],
					    [0,  13, 1,  1,  1,  12, 15, 12, 13, 0],
					    [0,  13, 13, 1,  1,  12, 15, 12, 13, 0],
		    			[0,  13, 13, 13, 1,  100,15, 12, 13, 0],
					    [0,  13, 13, 1,  1,  12, 12, 12, 13, 0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  13, 0],
					    [0,  13, 1,  1,  1,  1,  1,  1,  13, 0],
					    [0 , 0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:6, y:2 }; 
	var destinationPosition = { x:5, y:5 };
	var targetedBlockNumber = 6;

	var headerMessage = Space1Level4;
	var explanationMessage = "";
	var jewelnumber = 0;
