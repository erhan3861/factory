
	var world = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  1,  1,  13, 12, 12, 12, 12, 13, 0],
					    [0,  1,  1,  13, 12, 15, 15, 101,13, 0],
					    [0,  1,  1,  13, 12, 15, 12, 12, 13, 0],
					    [0,  1,  13, 12, 12, 7,  12, 13, 13, 0],
		    			[0,  1,  13, 100,15, 15, 12, 1,  1,  0],
					    [0,  1,  13, 12, 12, 12, 13, 1,  1,  0],
					    [0,  1,  13, 13, 13, 13, 13, 1,  1,  0],
					    [0,  1,  1,  1,  1,  1,  1,  1,  1,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

	var playerPosition = { x:7, y:2 }; 
	var destinationPosition = { x:3, y:5 };
	var targetedBlockNumber = 11;

	startDirection = "left";

	var headerMessage = Space2Level3;
	var explanationMessage = "";

	var jewelnumber = 0;
	
	ghoststoneexist = true;
	ghoststoneX = 5;
	ghoststoneY = 4;

	stoneSignExist = true;
	stoneSignX = 5;
	stoneSignY = 4;

