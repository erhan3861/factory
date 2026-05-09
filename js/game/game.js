var player;
var destination;
var startPosition;
var startCode = false;
var worldobjects;
var objectSize;
//var drone;

// jewelSign
var jewelSign;
var jewelSignExist = false;
var jewelSignX;
var jewelSignY;

// stoneSign
var stoneSign;
var stoneSignExist = false;
var stoneSignX;
var stoneSignY;

var foodsteps;
var getjewel;
var rock;
var isBackgroundMusicPlay;
var backgroundmusic;
var myInterpreter = null;
var highlightPause = false;
var code = '';
var hasMoreCode = false;
var isCodeRunning = false;
var collectedjewels = 0;
var isRestartRequired = false;
var highlightblockid;

var startDirection = "down";
var editorJavaScript;
var editorPython;
var editorline = 0;
var isRunCode = true;
var latestCode = "";

var worldImages = ["1", "2", "3", "4", "5", "6", "7", "8", "12", "13", "14","15"];
var ActionsList = ["start", "Walk", "TurnToRight", "TurnToLeft", "BreakRock", "CollectCrystal"];

function restartGame() {
	isRestartRequired = false;
	collectedjewels = 0;
	startCode = false;
	hint = true;
	editorline = 0;

	gameArea.stop();
	startGame();
	generateCodeAndLoadIntoInterpreter();
}

function startGame() {
	isCodeRunning = false;

	gameArea.start();

	objectSize = gameArea.squareSizeX * 90 / 100;

	player = CreatePlayer(objectSize);
		
	startPosition = CreateStartPosition(objectSize);

    destination = CreateDestination(objectSize);

    if(jewelSignExist)
    {
    	jewelSign = CreateJewelSign(jewelSignX, jewelSignY, objectSize);
	}

	for(i = 0; i < 10; i++)
	{
		for(j = 0; j < 10; j++)
		{
		    world[i][j] = worldTemp[i][j];
		}
	}

	AddGameObjects();
	//drone = CreateDrone(objectSize);
}

function AddGameObjects()
{
	worldobjects = [];

	for(i = 0; i < 10; i++)
	{
		for(j = 9; j >= 0; j--)
		{
		    var worldImageNumber = world[i][j];
		    
			if(worldImageNumber > 0 && worldImageNumber < 100) // 100: destination
			{	
			 	worldobjects.push(CreateGameObject(i, j, worldImageNumber, objectSize));
			}
		}
	}
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {

    	var innerWidth = window.innerWidth;
    	var innerHeight = window.innerHeight;

    	var canvasWidth = $("#divGameArea").width();
    	var canvasHeight = canvasWidth * 2 / 3;

    	$("#pageHeader").height(innerHeight / 15);

    	var workingAreaHeight = canvasHeight + $("#pageHeader").height() + 50;
    	var divOuterGameAreaHeight = innerHeight - $("#pageHeader").height();
    	$("#divOuterGameArea").height(divOuterGameAreaHeight);
    	//$("#divGameTop").height(innerHeight / 10);

    	$("#blocklyDiv").height($("#BlocksPannel").height() * 95 / 100);
    	$("#editorJavaScript").height($("#BlocksPannel").height() * 95 / 100);
    	$("#editorPython").height($("#BlocksPannel").height() * 95 / 100);

    	var buttonTop = $("#BlocksPannel").height() / 2;
    	var buttonLeft = $("#BlocksPannel").width() - $("#btRunCode").width() / 2;

    	$("#btRunCode").css({top: buttonTop, left: buttonLeft, position:'absolute'}); 

    	if(workingAreaHeight > window.innerHeight)
    	{
    		var excess = workingAreaHeight - window.innerHeight;
    		var rate = 100 - ((excess / workingAreaHeight) * 100) - 5;

    		canvasWidth = canvasWidth * rate / 100;
    		canvasHeight = canvasHeight * rate / 100;
    		$("#blocklyDiv").height($("#blocklyDiv").height() * rate / 100);
    	}

    	this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;

        this.squareSizeX = this.canvas.width / 10;
        this.squareSizeY = this.canvas.height / 10;

        this.context = this.canvas.getContext("2d");
        $( "#divGameArea" ).append(this.canvas);

        this.interval = setInterval(updateGameArea, 18 / playSpeed);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function updateGameArea() {

	gameArea.clear();

	//drone.animate();
	//drone.update();

	var worldobjectIndex = 0;

	for(i = 0; i < 10; i++)
	{
		for(j = 9; j >= 0; j--)
		{
		    var worldImageNumber = world[i][j];
		    
			if(worldImageNumber > 0 && worldImageNumber < 100) // 100: destination
			{	
			 	worldobjects[worldobjectIndex].update();
				worldobjectIndex++;
			}

			if(world[i][j] == 101)
			{
				startPosition.update();
			}

			if(world[i][j] == 100)
			{
				destination.animate();
				destination.update();
			}
		}
	}

	if(jewelSignExist)
	{
		jewelSign.animate();
		jewelSign.update();
	}

	player.newPos();
	player.animate();
	player.update();   
}

function StateControl()
{
	if (player.outOfBorders()) {
		Unsuccess();
	}
	else if(player.crashWith()){
	  	Unsuccess();
	}
	else if (player.reachDestination()) {
		if(collectedjewels == jewelnumber)
		{
			Successful();
			HighLightLevel();
		}
		else
		{
			Unsuccess();
		}
	}
	else if(hasMoreCode == false){
		Unsuccess();
	}
}

function FatalError(error)
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;

    resetStepUi();
   
	$("#messageErrorModal").modal("show");

	var error = new Audio('media/error.mp3');
	error.volume = 0.15;
	error.play();
}

function Unsuccess()
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;

    resetStepUi();

	ErrorMessage();
	var error = new Audio('media/error.mp3');
	error.volume = 0.15;
	error.play();
}

function WorkspaceBlocksCount()
{
	if(panelName == "Blockly")
	{
		var countBlocks = (workspaceCode.match(new RegExp("<block ", "g")) || []).length;
		return countBlocks;
	}
	else if(panelName == "JavaScript")
	{
        var editor = ace.edit("editorJavaScript");
		var countBlocks = 0;
						  
		for (var i = 0; i < ActionsList.length; i++) {
			countBlocks += (editor.getValue().match(new RegExp(ActionsList[i], "g")) || []).length;
		}

		countBlocks += (editor.getValue().match(new RegExp("for", "g")) || []).length;
		
		return countBlocks;
	}
	else if(panelName == "Python")
	{
		var editor = ace.edit("editorPython");
		var countBlocks = 0;
						  
		for (var i = 0; i < ActionsList.length; i++) {
			countBlocks += (editor.getValue().match(new RegExp(ActionsList[i], "g")) || []).length;
		}

		countBlocks += (editor.getValue().match(new RegExp("for", "g")) || []).length;

		return countBlocks;
	}
}

function Successful()
{
	isRestartRequired = true;
	gameArea.stop();
	isCodeRunning = false;
    resetStepUi();

    var blocksCount = WorkspaceBlocksCount();
    var score = 0;

    if(targetedBlockNumber == 0)
		score = 3;
    else if(blocksCount <= (targetedBlockNumber + 1))
    	score = 3;
    else if(blocksCount == (targetedBlockNumber + 2))
		score = 2;
    else
		score = 1;
   
	SuccessMessage(score);

	var victory = new Audio('media/victory.mp3');
	victory.volume = 0.15;
	victory.play();
}

function WalkToUp() {
  	player.xDestTemp -= gameArea.squareSizeX / 2;
  	player.yDestTemp -= gameArea.squareSizeY / 2;

  	var dest = {
		  	      destination : player.yDestTemp, 
		  		  direction : "up"
		  	};
	player.DestArray.push(dest);
}

function WalkToDown() {
   	player.xDestTemp +=  gameArea.squareSizeX / 2;
   	player.yDestTemp +=  gameArea.squareSizeY / 2;
	
	var dest = {
		  		destination : player.yDestTemp, 
		  		direction : "down"
		  	};
	player.DestArray.push(dest);
}

function WalkToLeft() {
	player.xDestTemp -= gameArea.squareSizeX / 2;
  	player.yDestTemp += gameArea.squareSizeY / 2;

	var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "left"
		  	};

	player.DestArray.push(dest);
}

function WalkToRight() {
	player.xDestTemp += gameArea.squareSizeX / 2;
  	player.yDestTemp -= gameArea.squareSizeY / 2;

    var dest = {
		  		destination : player.xDestTemp, 
		  		direction : "right"
		  	};
	player.DestArray.push(dest);
}

function TurnToRight() {
	if(player.Direction == "")
	{
		player.Direction = "left";
		player.normalImages = ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "26", "27", "28"];
		player.runningImages = ["6", "7", "8", "9", "10"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "up")
	{
		player.Direction = "right";
		player.normalImages = ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"];
		player.runningImages = ["11", "12", "13", "14" ,"15"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "right")
	{
		player.Direction = "down";
		player.normalImages = ["21", "21", "21", "21", "21", "21", "21", "21", "21", "21", "22", "23", "24"];
		player.runningImages = ["1", "2", "3", "4", "5"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "down")
	{
		player.Direction = "left";
		player.normalImages = ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "26", "27", "28"];
		player.runningImages = ["6", "7", "8", "9", "10"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "left")
	{
		player.Direction = "up";
		player.normalImages = ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"];
		player.runningImages = ["16", "17", "18", "19", "20"];
		player.normalImageIndex = 0;
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}
}

function TurnToLeft() {
	if(player.Direction == "")
	{
		player.Direction = "right";
		player.normalImages = ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"];
		player.runningImages = ["11", "12", "13", "14" ,"15"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "up")
	{
		player.Direction = "left";
		player.normalImages = ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "26", "27", "28"];
		player.runningImages = ["6", "7", "8", "9", "10"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "left")
	{
		player.Direction = "down";
		player.normalImages = ["21", "21", "21", "21", "21", "21", "21", "21", "21", "21", "22", "23", "24"];
		player.runningImages = ["1", "2", "3", "4", "5"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "down")
	{
		player.Direction = "right";
		player.normalImages = ["11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11"];
		player.runningImages = ["11", "12", "13", "14" ,"15"];
		player.normalImageIndex = 0;
	}

	else if(player.Direction == "right")
	{
		player.Direction = "up";
		player.normalImages = ["16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16", "16"];
		player.runningImages = ["16", "17", "18", "19", "20"];
		player.normalImageIndex = 0;
	}

	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}
}

function loopstep() {
	setTimeout(function() {
      		StepCode();
    }, 100);
}

function loopend() {

	if(hasMoreCode == true && isCodeRunning == true)
	{
		AddGameObjects();

		if(hasMoreCode == true && isCodeRunning == true)
		{				
			setTimeout(function() {
		          StateControl();     
		          StepCode();  
		    }, 100);
		}
	}
}

function CollectCrystal()
{
	if(world[player.matrisY][player.matrisX] == 5)
	{
		getjewel.play();
		world[player.matrisY][player.matrisX] = 4;
		collectedjewels++;
	}
	else if(world[player.matrisY][player.matrisX] == 4)
	{
		getjewel.play();
		world[player.matrisY][player.matrisX] = 3;
		collectedjewels++;
	}
	else if(world[player.matrisY][player.matrisX] == 3)
	{
		getjewel.play();
		world[player.matrisY][player.matrisX] = 6;
		collectedjewels++;
	}
	else
	{
		Unsuccess();
	}

	AddGameObjects();

	if(hasMoreCode == true && isCodeRunning == true)
	{			
		setTimeout(function() {
	          StateControl();     
	          StepCode();  
	    }, 200);
	}
}

function BreakRock()
{
	rock.play();
	
	if(player.Direction == "")
	{
		if(world[player.matrisY + 1][player.matrisX] == 7)
		{
			world[player.matrisY + 1][player.matrisX] = 8;
			player.normalImages = ["29", "30", "31", "32"];
			player.normalImageIndex = 0;
		}
		else
		{
			Unsuccess();
		}
	}
	else if(player.Direction == "down")
	{
		if(world[player.matrisY + 1][player.matrisX] == 7)
		{
			world[player.matrisY + 1][player.matrisX] = 8;
			player.normalImages = ["29", "30", "31", "32"];
			player.normalImageIndex = 0;
		}
		else
		{
			Unsuccess();
		}
	}
	else if(player.Direction =="up")
	{
		if(world[player.matrisY - 1][player.matrisX] == 7)
		{
			world[player.matrisY - 1][player.matrisX] = 8;
			player.normalImages = ["38", "38", "38", "38"];
			player.normalImageIndex = 0;
		}
		else
		{
			Unsuccess();
		}
	}
	else if(player.Direction == "right")
	{
		if(world[player.matrisY][player.matrisX + 1] == 7)
		{
			world[player.matrisY][player.matrisX + 1] = 8;
			player.normalImages = ["37", "37", "37", "37"];
			player.normalImageIndex = 0;
		}
		else
		{
			Unsuccess();
		}
	}
	else if(player.Direction == "left")
	{
		if(world[player.matrisY][player.matrisX - 1] == 7)
		{
			world[player.matrisY][player.matrisX - 1] = 8;
			player.normalImages = ["33", "34", "35", "36"];
			player.normalImageIndex = 0;
		}
		else
		{
			Unsuccess();
		}
	}

	AddGameObjects();

	if(hasMoreCode == true && isCodeRunning == true)
	{			
		setTimeout(function() {
	          StateControl();     
	          StepCode();  
	    }, 500);
	}
}

function Walk()
{
	if(player.Direction == "")	
		WalkToDown();

	if(player.Direction == "up")	
		WalkToUp();

	else if(player.Direction == "down")	
		WalkToDown();

	if(player.Direction == "right")	
		WalkToRight();

	if(player.Direction == "left")	
		WalkToLeft();
}

function clearmove() {
    player.speedX = 0; 
    player.speedY = 0; 
}

function runCode(){	
	if(panelName == "Blockly")
	{
		try
		{
	    	if(latestCode.length > 0)
	    	{	
		    	if(isCodeRunning == false && isRestartRequired == false)
		    	{	
		    		isCodeRunning = true;
					CreateInterpreter();
					StepCode();
					
					setTimeout(function() {
			          StepCode();
			        }, 500);
				}
			}
			else
			{	
				Unsuccess();
			}
		}
		catch(err)
		{
			FatalError(err.message);
		}
	}
	else if(panelName == "JavaScript")
	{
		try
		{
    		var editorJavaScript = ace.edit("editorJavaScript");

    	    SyntaxControl();

    		latestCode = editorJavaScript.getValue();
    		if(latestCode.indexOf("start();") > 1)
    			startCode = true;

    		latestCode = AddHighLight(editorJavaScript.getValue());

    		if(latestCode.length > 0)
	    	{	
		    	if(isCodeRunning == false && isRestartRequired == false)
		    	{			    		
		    		isCodeRunning = true;
					CreateInterpreter();
					StepCode();
					
					setTimeout(function() {
			          StepCode();
			        }, 500);
				}
			}
			else
			{
				Unsuccess();
			}
		}
		catch(err)
		{
			FatalError(err.message);
		}
	}    
	else
	{
		try
		{
    		var editorPython = ace.edit("editorPython");
    		var editorJavaScript = ace.edit("editorJavaScript");

    		SyntaxControl();

    		latestCode = editorPython.getValue();
    		latestCode = PythonToJavaScript(latestCode);

    		if(latestCode.indexOf("start();") > 1)
    			startCode = true;

    		latestCode = AddHighLight(latestCode);

    		if(latestCode.length > 0)
	    	{	
		    	if(isCodeRunning == false && isRestartRequired == false)
		    	{			    		
		    		isCodeRunning = true;
					CreateInterpreter();
					StepCode();
					
					setTimeout(function() {
			          StepCode();
			        }, 500);
				}
			}
			else
			{
				Unsuccess();
			}
		}
		catch(err)
		{
			FatalError(err.message);
		}
	}	
}

function SyntaxControl()
{
	var editorJavaScript = ace.edit("editorJavaScript");
	var annotations = editorJavaScript.getSession().getAnnotations();
    if(annotations.length > 0)
    {
    	if(lang == "tr")
    	{
    		var errorMessage = annotations[0].row + ". satır " + annotations[0].column + ". sütun" + " sözdizim hatası";
    		FatalError(errorMessage);
    	}
    	else if(lang == "en")
    	{
    		var errorMessage = annotations[0].row + ". row " + annotations[0].column + ". column" + " syntax error";
    		FatalError(errorMessage);
    	}
    }
}

function controlCode(code)
{
	if(code.indexOf("for")>= 0)
		return true;
	else
		return false;
}

function start()
{
	if(hasMoreCode == true && isCodeRunning == true)
	{				
		setTimeout(function() {
		         StateControl();     
		         StepCode();  
		}, 500);
	}

    startCode = true;
}

window.addEventListener("resize", function(event) {
    restartGame();
});

function ShowInfoMessage()
{
	InfoMessage(headerMessage, explanationMessage);
}

function initApi(interpreter, scope) {
   for(var i = 0; i < ActionsList.length; i++)
   {
    var initCode = " var wrapper = function() { " +
        " return " + ActionsList[i] + "()" +
      " };" +
      " interpreter.setProperty(scope, '" + ActionsList[i] + "', " +
      "    interpreter.createNativeFunction(wrapper)); ";
    eval(initCode);
  }

  var wrapper = function(id) {
     return highlightBlock(id);
   };
   interpreter.setProperty(scope, 'highlightBlock',
     interpreter.createNativeFunction(wrapper));

  var wrapper = function() {
     return loopstep();
   };
   interpreter.setProperty(scope, 'loopstep',
     interpreter.createNativeFunction(wrapper));

   var wrapper = function() {
     return loopend();
   };
   interpreter.setProperty(scope, 'loopend',
     interpreter.createNativeFunction(wrapper));
}

function highlightBlock(id) {
  highlightblockid = id;
  highlightPause = true;
}

function generateCodeAndLoadIntoInterpreter() {
  // Generate JavaScript code and parse it.
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.JavaScript.addReservedWords('highlightBlock');
  latestCode = Blockly.JavaScript.workspaceToCode(workspace);
  resetStepUi();
}

function resetStepUi() {
  workspace.highlightBlock(null);
  highlightblockid = "";
  highlightPause = false;
}

function CreateInterpreter()
{
    myInterpreter = null;
    resetStepUi();
    myInterpreter = new Interpreter(latestCode, initApi);
}

    function StepCode() { 
	    try
	    	{
	    	workspace.highlightBlock(highlightblockid);
	    	
	     	if(myInterpreter)
	     	{
		     	var editorPython = ace.edit("editorPython");
		     	var editorJavaScript = ace.edit("editorJavaScript");

			    var stack = myInterpreter.getStateStack();
			    if (stack.length) {
			      var node = stack[stack.length - 1].node;
			      var start = node.start;
			      var end = node.end;

			      editorPython.selection.moveCursorToPosition({row: node.loc.start.line - 1, column: 0});
			      editorPython.selection.selectLine();

			      editorJavaScript.selection.moveCursorToPosition({row: node.loc.start.line - 1, column: 0});
			      editorJavaScript.selection.selectLine();

			    } else {
			      var start = 0;
			      var end = 0;
			    }

		      highlightPause = false;
		      do {
		        try {
		          hasMoreCode = myInterpreter.step();
		        } finally {
		          if (!hasMoreCode) {
		            return;
		          }
		        }
		        // Keep executing until a highlight statement is reached,
		        // or the code completes or errors.
		      } while (hasMoreCode && !highlightPause);
	  		}
	  	}
	  	catch(err)
	  	{
	  		
	  	}
    }

function GetLevel()
{
	let levelString = String(window.location).split("?")[1];
	var level = parseInt(levelString);
		return level;
}

String.prototype.replaceAt = function(index, replacement) {
	return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function btRunCodeClick()
{
	if(isRunCode == true)
	{
		isRunCode = false;
		$("#btRunCode").toggleClass("runButton repeatButton");
		runCode();
	}
	else
	{
		isRunCode = true;
		$("#btRunCode").toggleClass("repeatButton runButton");
		restartGame();
	}
}
