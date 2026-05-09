
	var world = [
					   	[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  14, 14, 13, 13, 13, 13, 14, 14, 0],
					    [0,  1,  12, 101,12, 1,  1,  1,  1,  0],
					    [0,  1,  12, 15, 12, 12, 12, 1,  1,  0],
					    [0,  1,  12, 15, 15, 15, 12, 1,  1,  0],
		    			[0,  1,  12, 12, 12, 15, 12, 1,  1,  0],
					    [0,  1,  1,  1,  12, 100,12, 1,  1,  0],
					    [0,  1,  1,  13, 13, 13, 13, 1,  1,  0],
					    [0,  14, 14, 13, 13, 13, 13, 14,  14,0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0] 
				];
				
	var playerPosition = { x:3, y:2 }; 
	var destinationPosition = { x:5, y:6 }; 
	var targetedBlockNumber = 8;

	var headerMessage = Space1Level7;
	var explanationMessage = "";
	
	var jewelnumber = 0;

	//201
	jellyexist = false;
	jellyX = 2;
	jellyY = 4;

	//202
	wellexist = false;
	wellX = 5;
	wellY = 7;