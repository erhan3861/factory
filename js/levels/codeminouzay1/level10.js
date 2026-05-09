
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  1,  1,  15, 101,15, 15, 15, 1,  0],
					    [0,  1,  15, 15,12, 12, 12,  15, 1,  0],
					    [0,  1,  15, 12, 12, 12, 12, 15, 1,  0],
		    			[0,  1,  100,15, 15, 15, 15, 1,  1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];
				
	var playerPosition = { x:4, y:2 }; 
	var destinationPosition = { x:2, y:5 };
	var targetedBlockNumber = 10;

	var headerMessage = Space1Level10;
	var explanationMessage = "";

	var jewelnumber = 0;