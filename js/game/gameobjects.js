var numberOfPlayerImages = 38;

function GameObject(width, height, image, x, y) {
    
    if(image.indexOf("player/player") > 0
		|| image.indexOf("world/world") > 0)
	{
		this.image = ASSET_MANAGER.getAsset(image);
	}
	else
	{
		this.image = new Image();
    	this.image.src = image;
	}

    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.matrisX = 0;
    this.matrisY = 0;
    this.type = 1;

    this.update = function() {
        ctx = gameArea.context;
        ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
    }
}

function CreateGameObject(i, j, worldImageNumber, objectSize)
{
	var worldObjectPositionX = 0;
	var worldObjectPositionY = gameArea.canvas.height / 2 - gameArea.squareSizeY * 130 / 100; 

	for(k = 0; k < j; k++)
	{
		worldObjectPositionX = worldObjectPositionX + gameArea.squareSizeX / 2;
		worldObjectPositionY = worldObjectPositionY - gameArea.squareSizeY / 2;
	}

	for(k = 0; k < i; k++)
	{
		worldObjectPositionX = worldObjectPositionX + gameArea.squareSizeX / 2;
		worldObjectPositionY = worldObjectPositionY + gameArea.squareSizeY / 2;
	}

	var gameObject = new GameObject(objectSize, objectSize, "images/world/world" + worldImageNumber + ".png", worldObjectPositionX , worldObjectPositionY);

	return gameObject;
}

function AnimatedObject(width, height, image, x, y, name) {

	GameObject.call(this, width, height, image, x, y);
	this.delay = 0;
	this.images = ["1", "2", "1", "3"];
	this.imageIndex = 0;
	this.type = 100;
	this.img = [];

	this.loadImages = function(numberOfImages)
	{
		for(i = 0; i < numberOfImages; i++)
		{
			this.img[i] = new Image();
			this.img[i].src = "images/animatedobjects/" + name + "/object" + (i + 1) + ".png";
		}
	}

    this.animate = function()
    {
		this.delay++;

		if(this.delay == 5)
   		{
   			this.delay = 0;
   			this.image = this.img[Number(this.images[this.imageIndex]) - 1];

   			this.imageIndex++;

			if(this.imageIndex >= this.images.length)
   				this.imageIndex = 0;
    	}
    }
}

function DestinationObject(width, height, image, x, y) {

	GameObject.call(this, width, height, image, x, y);
	this.delay = 0;
	this.images = ["1", "1", "1", "1", "1", "1", "2" ,"2", "2", "2" ,"2", "2"];
	this.imageIndex = 0;
	this.type = 100;

	this.numberOfImages = 2;
	this.img = [];

	for(i = 0; i < this.numberOfImages; i++)
	{
		this.img[i] = new Image();
		this.img[i].src = "images/player/destination" + (i + 1) + ".png";
	}

    this.animate = function()
    {
		this.delay++;

		if(this.delay == 5)
   		{
   			this.delay = 0;
   			this.image = this.img[Number(this.images[this.imageIndex]) - 1];

   			this.imageIndex++;

			if(this.imageIndex >= this.images.length)
   				this.imageIndex = 0;
    	}
    }
}

function CreateDestination(objectSize)
{
	var destPositionX = 0;
	var destPositionY = gameArea.canvas.height / 2 - gameArea.squareSizeY * 130 / 100; 

	for(i = 0; i < destinationPosition.x; i++)
	{
		destPositionX = destPositionX + gameArea.squareSizeX / 2;
		destPositionY = destPositionY - gameArea.squareSizeY / 2;
	}

	for(i = 0; i < destinationPosition.y; i++)
	{
		destPositionX = destPositionX + gameArea.squareSizeX / 2;
		destPositionY = destPositionY + gameArea.squareSizeY / 2;
	}

	var destination = new DestinationObject(objectSize, objectSize, "images/player/destination1.png", destPositionX, destPositionY);
	
	return destination;
}

function Player(width, height, image, x, y) {

	GameObject.call(this, width, height, image, x, y);
	this.DestTaken = false;
	this.DestArray = [];
	this.Dest = 0;
	this.Direction = "";
	this.normalImageIndex = 0;
	this.runningImageIndex = 0;
	this.type = 101;
	this.animationDelay = 0;
	this.waitingDelay = 0;

	this.numberOfImages = numberOfPlayerImages;
	this.img = [];

	for(i = 0; i < this.numberOfImages; i++)
	{
		this.img[i] = new Image();
		this.img[i] = ASSET_MANAGER.getAsset("images/player/player" + (i + 1) + ".png");
	}

	this.xDestTemp = this.x;
	this.yDestTemp = this.y;

    this.newPos = function() {

        if(this.DestArray.length > 0)
	   	{
	   		if(this.DestTaken == false)
	   		{	
	   			var destObj = this.DestArray.shift();
	       	    this.Dest = destObj.destination;
	       	    this.Direction = destObj.direction;

	       		this.DestTaken = true;
	   		}
	   	}

	   	if(this.DestTaken == true)
	   	{
	   		this.isRunning = true;

	   		if(this.Direction == "right")
	   		{
	   		   this.normalImages = ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"];
			   this.runningImages = ["11"]; //, "12", "13", "14" ,"15"
			   this.normalImageIndex = 0;
	   		   
			   if(Math.round(this.x) < Math.round(this.Dest))
			   {
			   		this.x += 3;
			   		this.y -= 2;
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX + 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "left")
	   		{
			   this.normalImages = ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25"]; //, "26", "27", "28"
			   this.runningImages = ["6"];  //"7", "8", "9", "10"
			   this.normalImageIndex = 0;

			   if(Math.round(this.x) > Math.round(this.Dest))
			   {
			   		this.x -= 3;
			   		this.y += 2;
			   }
			   else
			   {
			   		this.isRunning = false;
			   		
			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisX = this.matrisX - 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "up")
	   		{
	   		   this.normalImages = ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"];
			   this.runningImages = ["16"]; //, "17", "18", "19", "20"
			   this.normalImageIndex = 0;

			   if(Math.round(this.y) > Math.round(this.Dest))
			   {
			   		this.x -= 3;
			   		this.y -= 2;
			   }
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{
						this.waitingDelay = 0;
						this.matrisY = this.matrisY - 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{
							StepCode();
						}
			   		}
			   }
			}

			if(this.Direction == "down")
	   		{
	   		   this.normalImages = ["21", "21", "21", "21", "21", "21", "21", "21", ]; //"21", "21", "22", "23", "24"
			   this.runningImages = ["1"]; //, "2", "3", "4", "5"
			   this.normalImageIndex = 0;

			   if(Math.round(this.y) < Math.round(this.Dest))
			   {
			   		this.x += 3;
			   		this.y += 2;
			   }	  
			   else
			   {
			   		this.isRunning = false;

			   		this.waitingDelay++;
			   		if(this.waitingDelay == 20)
			   		{	
						this.waitingDelay = 0;
						this.matrisY = this.matrisY + 1;
						this.DestTaken = false;

						StateControl();
						if(hasMoreCode == true && isCodeRunning == true)
						{	
							StepCode();
						}
			   		}			   		
			   }
			}	
		}
    }

    this.animate = function()
    {
		this.animationDelay++;

		if(this.animationDelay == 5)
   		{
   			this.animationDelay = 0;

   			if(this.isRunning == true)
   			{
   				foodsteps.play();
   				//this.image.src = "images/player/player" + this.runningImages[this.runningImageIndex] + ".png";
   				this.image = this.img[Number(this.runningImages[this.runningImageIndex]) - 1];

   				this.runningImageIndex++;

   				if(this.runningImageIndex >= this.runningImages.length)
   					this.runningImageIndex = 0;
   			}
   			else
   			{
   				//this.image.src = "images/player/player" + this.normalImages[this.normalImageIndex] + ".png";
   				this.image = this.img[Number(this.normalImages[this.normalImageIndex]) - 1];

   				this.normalImageIndex++;

				if(this.normalImageIndex >= this.normalImages.length)
   					this.normalImageIndex = 0;
   			}
    	}
    }

     this.crashWith = function() {
	    if(world[this.matrisY][this.matrisX] == 0
	    	|| world[this.matrisY][this.matrisX] == 1
	    	|| world[this.matrisY][this.matrisX] == 7
	    	|| world[this.matrisY][this.matrisX] == 12
	    	|| world[this.matrisY][this.matrisX] == 13
	    	|| world[this.matrisY][this.matrisX] == 14
	    	|| world[this.matrisY][this.matrisX] > 101)
	    {	
	    	return true;
	    }
	    else
	    {
	    	return false;
	    }
	  }

      this.reachDestination = function() {

     	var result = false;

	    if(world[this.matrisY][this.matrisX] == 100)
	    	result = true;
	    else
	    	result = false;

	    if(world[this.matrisY][this.matrisX] == 6 
	    	&& this.matrisX == destinationPosition.x 
	    	&& this.matrisY == destinationPosition.y)
	    	result = true;
		
	    return result;
	  }

	  this.outOfBorders = function() {
	    var myleft = this.x;
	    var myright = this.x + (this.width);
	    var mytop = this.y;
	    var mybottom = this.y + (this.height);
		var out = false;

	    if (
		    (mybottom > gameArea.canvas.height + objectSize / 2) ||
		    (mytop < 0 - objectSize / 2) ||
		    (myright > gameArea.canvas.width + objectSize / 2) ||
		    (myleft < 0 - objectSize / 2)
	    ) 
	    {
	      out = true;
	    }
	    
	    return out;
	  }
}

function CreatePlayer(objectSize)
{
	var playerSize = objectSize * 0.75;

	var playerPositionX = 0 + (gameArea.squareSizeX - playerSize) / 4;
	var playerPositionY = gameArea.canvas.height / 2 - playerSize * 1.75;

	for(i = 0; i < playerPosition.x; i++)
	{
		playerPositionX = playerPositionX + gameArea.squareSizeX / 2;
		playerPositionY = playerPositionY - gameArea.squareSizeY / 2;
	}

	for(i = 0; i < playerPosition.y; i++)
	{
		playerPositionX = playerPositionX + gameArea.squareSizeX / 2;
		playerPositionY = playerPositionY + gameArea.squareSizeY / 2;
	}

	var player = new Player(playerSize, playerSize, "images/player/player1.png", playerPositionX, playerPositionY);

	player.matrisX = playerPosition.x;
	player.matrisY = playerPosition.y;
	player.Direction = startDirection;

	if(player.Direction == "left")
	{		
		player.normalImages = ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", 
							   "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"];//, "26", "26", "26", "26", "26", "26", "26", "26", "26", "27", "27", "27", "28", "28", "28"
		player.runningImages = ["6"]; //, "7", "8", "9", "10"
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "right")
	{
		player.normalImages = ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"];
	    player.runningImages = ["11"]; 	// "12", "13", "14" ,"15"
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "down")
	{
		player.normalImages = ["21", "21", "21", "21", "21", "21", "21", "21", "21", "21",
							   "21", "21", "21", "21", "21", "21", "21", "21", "21", "21", 
							   "22", "22", "22", "22", "22", "22", "22", "22"]; //, "22", "23", "23", "23", "24", "24", "24"
		player.runningImages = ["1"]; // , "2", "3", "4", "5"
		player.normalImageIndex = 0;
	}
	else if(player.Direction == "up")
	{
		player.normalImages = ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"];
		player.runningImages = ["16"]; //"17", "18", "19", "20"
		player.normalImageIndex = 0;
	}

	return player;
}

function CreateJewelSign(jewelSingX, jewelSingY, objectSize)
{
	var size = objectSize;

	var positionX = objectSize;
	var positionY = gameArea.canvas.height / 2 - gameArea.squareSizeY * 130 / 100 - objectSize / 2;


	for(i = 0; i < jewelSingX; i++)
	{
		positionX = positionX + gameArea.squareSizeX / 2;
		positionY = positionY - gameArea.squareSizeY / 2;
	}
	for(i = 0; i < jewelSingY; i++)
	{
		positionX = positionX + gameArea.squareSizeX / 2;
		positionY = positionY + gameArea.squareSizeY / 2;
	}

	var jewelSign = new AnimatedObject(size, size, "images/animatedobjects/jewelsign/object1.png", positionX, positionY, "jewelsign");
	jewelSign.images = ["1", "1", "1", "1", "2", "2", "2", "2"];
	jewelSign.loadImages(2);
	
	return jewelSign;
}

function CreateStoneSign(stoneSignX, stoneSignY, objectSize)
{
	var size = objectSize;

	var positionX = objectSize;
	var positionY = gameArea.canvas.height / 2 - gameArea.squareSizeY * 130 / 100 - objectSize / 2;

	for(i = 0; i < stoneSignX; i++)
	{
		positionX = positionX + gameArea.squareSizeX / 2;
		positionY = positionY - gameArea.squareSizeY / 2;
	}

	for(i = 0; i < stoneSignY; i++)
	{
		positionX = positionX + gameArea.squareSizeX / 2;
		positionY = positionY + gameArea.squareSizeY / 2;
	}

	var stoneSign = new AnimatedObject(size, size, "images/animatedobjects/stonesign/object1.png", positionX, positionY, "stonesign");
	stoneSign.images = ["1", "1", "1", "1", "2", "2", "2", "2"];
	stoneSign.loadImages(2);
	
	return stoneSign;
}

function CreateStartPosition(objectSize)
{
	var startPositionX = 0;
	var startPositionY = gameArea.canvas.height / 2 - gameArea.squareSizeY * 130 / 100; 

	for(i = 0; i < playerPosition.x; i++)
	{
		startPositionX = startPositionX + gameArea.squareSizeX / 2;
		startPositionY = startPositionY - gameArea.squareSizeY / 2;
	}

	for(i = 0; i < playerPosition.y; i++)
	{
		startPositionX = startPositionX + gameArea.squareSizeX / 2;
		startPositionY = startPositionY + gameArea.squareSizeY / 2;
	}

	var startPosition = new GameObject(objectSize, objectSize, "images/world/world2.png", startPositionX , startPositionY)

	return startPosition;
}

function CreateDrone(objectSize)
{
	var starSize = objectSize;
	var drone = new AnimatedObject(starSize, starSize, "images/animatedobjects/drone/object1.png", gameArea.canvas.width * 0.75, 50, "drone");
	drone.images = [
					"1",
					"2",
					"3",
					"4",
					"5", 
					"6", 
					"7", 
					"8", 
					"9", 
					"10",  
					"11", 
					"12",  
					"13",  
					"14",  
					"15", "15", "15", "15","15", "15","15", "15","15", "15",
					"14", 
					"13",  
					"12", 
					"11",  
					"10", 
					"9", 
					"8", 
					"7", 
					"6", 
					"5",
					"4", 
					"3",  
					"2",
					"1", "1", "1", "1", "1", "1", "1", "1", "1"
	        		];

	drone.loadImages(15);
	return drone;
}