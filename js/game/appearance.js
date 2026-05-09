var panelName = "Blockly";
var playedlevels = "000000000000000";
var hint = false;
var playSpeed = 1;
var fullscreenmode = 0;
var preloaderFadeOutTime = 1000;
var ASSET_MANAGER;

var worldTemp  = [
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
		    			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
					    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
				];

var getUrlParameter = function getUrlParameter(sParam) {
  	var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('?'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function hidePreloader() {
	var preloader = $('.spinner-wrapper');
	preloader.fadeOut(preloaderFadeOutTime);
}

function onLoadPage() {
	GetReadyMedia();
	GetReadyImages();
	CreateTempMatris();
}

function CreateTempMatris()
{
	  for(i = 0; i < 10; i++)
			for(j = 0; j < 10; j++)
			    worldTemp[i][j] = world[i][j];
}

function GetReadyImages(argument) {
    ASSET_MANAGER = new AssetManager();

	  for(i = 0; i < numberOfPlayerImages; i++)
		{
			ASSET_MANAGER.queueDownload("images/player/player" + (i + 1) + ".png");
		}

		for(i = 0; i < worldImages.length; i++)
		{
			ASSET_MANAGER.queueDownload("images/world/world" + worldImages[i] + ".png");
		}

		ASSET_MANAGER.queueDownload("images/runcode.png");
		ASSET_MANAGER.queueDownload("images/repeatcode.png");

		ASSET_MANAGER.queueDownload("js/lang/tr.js");
		ASSET_MANAGER.queueDownload("js/lang/en.js");
		ASSET_MANAGER.queueDownload("js/lang/az.js");
		ASSET_MANAGER.queueDownload("js/lang/de.js");

		ASSET_MANAGER.downloadAll(function() {
				hidePreloader();
		    HighLightLevels();
				startGame();
				ShowInfoMessage();
				generateCodeAndLoadIntoInterpreter();
		});	

		var sound = localStorage.getItem("codemankosound");

		if(sound !== null)
		{
			if(sound == "on")
			{
				backgroundmusic.play();
				$("#btPlaySound").attr('src', 'images/soundon.png');
				isBackgroundMusicPlay = true;
			}
			else
			{
				backgroundmusic.pause();
				$("#btPlaySound").attr('src', 'images/soundoff.png');
				isBackgroundMusicPlay = false;
			}
		}

		var speed = localStorage.getItem("speed");
		if(speed !== null)
		{
			if(speed == "1")
			{
				playSpeed = 1;
				$("#btSetSpeed").attr('src', 'images/speed1.png');
			}
			else if(speed == "2")
			{
				playSpeed = 2;
				$("#btSetSpeed").attr('src', 'images/speed2.png');
			}
			else if(speed == "3")
			{
				playSpeed = 3;
				$("#btSetSpeed").attr('src', 'images/speed3.png');
			}
		}
}

function GetReadyMedia(argument) {
	foodsteps = new Audio('media/footsteps.mp3');
	rock = new Audio('media/rock.mp3');
	getjewel = new Audio('media/collect.mp3');

	if(backgroundmusic == null)
	{
		backgroundmusic = new Audio('media/space.mp3');
		backgroundmusic.volume = 0.25;
		backgroundmusic.loop = true;
		backgroundmusic.play();
		isBackgroundMusicPlay = true;
	}
}

var sidebarWidth = $("#leftSide").width();
$("#BlocksPannel").css("width", sidebarWidth);	
$("#blocklyDiv").css("width", sidebarWidth);

$("#editorJavaScript").css("height", "35vw");
$("#editorPython").css("height", "35vw");

 ace.require("ace/ext/language_tools");

var editorJavaScript= ace.edit("editorJavaScript");
editorJavaScript.session.setMode("ace/mode/javascript");
editorJavaScript.setFontSize(20);
editorJavaScript.setHighlightActiveLine(true);

// enable autocompletion and snippets
editorJavaScript.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});

var editorPython= ace.edit("editorPython");
	editorPython.session.setMode("ace/mode/python");  
  editorPython.setFontSize(20);
  editorPython.setHighlightActiveLine(true);

	var editorType = localStorage.getItem("editorType");

editorPython.setTheme("ace/theme/chrome");
editorJavaScript.setTheme("ace/theme/chrome");

// enable autocompletion and snippets
editorPython.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});
  
var workspaceCode = "";

var part = String(window.location).split("?")[1];

if(lang != null)
{	
	$("#comboImg").attr("src", "images/flags/" + lang + ".png");
}
else
{
	$("#comboImg").attr("src", "images/flags/tr.png");
}

$(document).ready(function(){
  $(".close").click(function(){
    $(".alert").alert("close");
  });
});

	$("#blocklyDiv").height($("#BlocksPannel").height() * 0.85);

  const scriptLang = document.createElement('script');

  scriptLang.src = "js/lang/" + lang + ".js";
  scriptLang.addEventListener('load', function() {

	$("#btnJSStart").text(`${Start}`);
	$("#btnJSWalkForward").text(`${WalkForward}`);
	$("#btnJSTurnRight").text(`${TurnRight}`);
	$("#btnJSTurnLeft").text(`${TurnLeft}`);
	$("#btnJSSmash").text(`${Smash}`);
	$("#btnJSCollect").text(`${Collect}`);
	$("#btnJSLoop").text(`${Loop}`);

	$("#btnPYStart").text(`${Start}`);
	$("#btnPYWalkForward").text(`${WalkForward}`);
	$("#btnPYTurnRight").text(`${TurnRight}`);
	$("#btnPYTurnLeft").text(`${TurnLeft}`);
	$("#btnPYSmash").text(`${Smash}`);
	$("#btnPYCollect").text(`${Collect}`);
	$("#btnPYLoop").text(`${Loop}`);

	$('#buttonMainPage').attr('data-original-title', `${MainPage}`);
	$('#buttonPlaySound').attr('data-original-title', `${Sound}`);
	$('#buttonSetSpeed').attr('data-original-title', `${Speed}`);
	$('#buttonFullScreen').attr('data-original-title', `${FullScreen}`);

	let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "js/levels/" + pageName + "/level" + part + ".js");
    document.head.appendChild(script);
  });

  document.head.appendChild(scriptLang);

	for (var i = 0; i <= 20; i++) {
		var strNumber = AddZeroString(i);

		$("#pgn" + strNumber).removeClass("active");
		
		if(part == strNumber)
  		$("#pgn" + strNumber).addClass("active");
	}

  jQuery('.lang-select').click(function() {
  var theLang = jQuery(this).attr('data-lang');
  
  ChangeLanguage(theLang);
});

function ChangeLanguage(lang)
{	
	var newUrl = String(window.location).split("?")[0] + "?" + String(window.location).split("?")[1] + "?" + lang;

	window.location = newUrl;
}

function GotoPage(pageId)
{	
	var lang = String(window.location).split("?")[2];
	var user = getUrlParameter("user");
  var game = getUrlParameter("game");
  var stage = getUrlParameter("stage");

	window.location = String(window.location).split("?")[0] + "?" + pageId + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage;
}

function GotoHome()
{
	window.location = "";
}

function HighLightLevel()
{
	var level = GetLevel();
	playedlevels = playedlevels.replaceAt(level - 1, '1');

	if(level < 10)
		$("#pgn0" + level).css("color", "#5271ff");
	else
		$("#pgn" + level).css("color", "#5271ff");

	localStorage.setItem(pageName + "levels", playedlevels);
}

function HighLightLevels()
{
	var storedlevels = localStorage.getItem(pageName + "levels");

	if(storedlevels !== null)
	{
		playedlevels = storedlevels;

		for(i = 0; i < playedlevels.length; i++)
		{
			if(playedlevels.charAt(i) == '1')
			{
				if((i + 1) < 10)
					$("#pgn0" + (i + 1)).css("color", "#5271ff");
				else
					$("#pgn" + (i + 1)).css("color", "#5271ff");
			}
		}	
	}	
}

function PlaySound()
{
	if(isBackgroundMusicPlay)
	{
		backgroundmusic.pause();
		isBackgroundMusicPlay = false;
		$("#btPlaySound").attr('src', 'images/soundoff.png');
		localStorage.setItem("codemankosound", "off");
	}
	else
	{
		backgroundmusic.play();
		isBackgroundMusicPlay = true;
		$("#btPlaySound").attr('src', 'images/soundon.png');
		localStorage.setItem("codemankosound", "on");
	}
}

function SetSpeed()
{
	if(playSpeed == 1)
	{
		playSpeed = 2;
		$("#btSetSpeed").attr('src', 'images/speed2.png');
		localStorage.setItem("speed", "2");
	}
	else if(playSpeed == 2)
	{
		playSpeed = 3;
		$("#btSetSpeed").attr('src', 'images/speed3.png');
		localStorage.setItem("speed", "3");
	}
	else if(playSpeed == 3)
	{
		playSpeed = 1;
		$("#btSetSpeed").attr('src', 'images/speed1.png');
		localStorage.setItem("speed", "1");
	}
}

function FullScreenGame()
  {
  	if(fullscreenmode == 0)
  	{
  		fullscreenmode = 1;
  		$("#btFullScreen").attr('src', 'images/closefullscreen.png');
  		openFullscreen();
  	}
  	else if(fullscreenmode == 1)
  	{
  		fullscreenmode = 0;
  		$("#btFullScreen").attr('src', 'images/fullscreen.png');
  		closeFullscreen();
  	}
  }

function openTab(evt, tabeName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  if(tabeName == 'Blockly')
  {
  	panelName = "Blockly";
  }
  else if(tabeName == 'JavaScript')
  {
  	panelName = "JavaScript";
  	var latestCode = editorPython.getValue();
  	latestCode = PythonToJavaScript(latestCode);
  	editorJavaScript.setValue(latestCode);
  }
  else if(tabeName == 'Python')
  {
  	panelName = "Python";
  }
  
  document.getElementById(tabeName).style.display = "block";
  evt.currentTarget.className += " active";
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function AddZeroString(number)
{
	var strNumber = "";
	if(number < 10)
		strNumber = "0" + number.toString();
	else
		strNumber = number.toString();

	return strNumber;
}

