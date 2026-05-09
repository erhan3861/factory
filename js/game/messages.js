function InfoMessage(headerMessage, explanationMessage, hint)
{
	$("#messageInfoBody").html(headerMessage);	
}

function ErrorMessage()
{
	$("#messageErrorModalImage").attr("src","images/error/" + lang + "-error.png");
	$("#messageErrorModal").modal("show");

	GameFailure();
}

function SuccessMessage(score)
{	
    $("#messageSuccessModal").modal("show");

	if(score == 1)
	{
		$("#messageSuccessModalImage").attr("src","images/success/" + lang +"-1star.png");
		$("#hfScore").val("1");
	}
	else if(score == 2)
	{
		$("#messageSuccessModalImage").attr("src","images/success/" + lang +"-2star.png");
		$("#hfScore").val("2");
	}
	else if(score == 3)
	{
		$("#messageSuccessModalImage").attr("src","images/success/" + lang +"-3star.png");
		$("#hfScore").val("3");
	}

	var part = String(window.location).split("?")[1];

	GameSuccess();

	$("#btnSuccessNext").click(function() {

	if(part == levelcount)
	{
	  	window.location = "";
	}
	else
	{
		var pageIndex = Number(part);
		pageIndex = pageIndex + 1;
		  
		var lang = String(window.location).split("?")[2];

		let game = getUrlParameter("game");
			console.log("URL GAME:",game)

		if(game){
			try {
				game = Number(game) + 1;
				
			} catch (error) {
				alert("Game url'den okunamadı!")
			}
		}
			
  		var user = getUrlParameter("user");
  		var stage = getUrlParameter("stage");
  		var competition = getUrlParameter("competition");
  		var homework = getUrlParameter("homework");
  		var roadmap = getUrlParameter("roadmap");

		if(pageIndex < 10)
		  	window.location = pageName + ".html?0" + String(pageIndex) + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage + "?competition=" + competition + "?homework=" + homework + "?roadmap=" + roadmap;
		else
		  	window.location = pageName + ".html?" + String(pageIndex) + "?" + lang + "?user=" + user + "?game=" + game + "?stage=" + stage + "?competition=" + competition + "?homework=" + homework + "?roadmap=" + roadmap;
	}
	  
	});
}

function GameSuccess()
{
	GameResult("success");
}

function GameFailure()
{
	GameResult("failure");
}

function GameResult(result)
{
  	var serviceUrl = "";
	
  	var user = getUrlParameter("user");
  	var game = getUrlParameter("game");
  	var stage = getUrlParameter("stage");
  	var competition = getUrlParameter("competition");
  	var homework = getUrlParameter("homework");
  	var roadmap = getUrlParameter("roadmap");

var dataToSend = {
    "user": user,
    "game": game,
    "status": result
};
if (competition && competition !== "null") {
	dataToSend["context_type"] = "competition";
	dataToSend["context_id"] = competition;
}
if (homework && homework !== "null") {
	dataToSend["context_type"] = "homework";
	dataToSend["context_id"] = homework;
}
if (roadmap && roadmap !== "null") {
	dataToSend["context_type"] = "roadmap";
	dataToSend["context_id"] = roadmap;
}

  	if(stage.toUpperCase() == "DEV")
  		serviceUrl = "https://app-dev.talent14.com/api/integrations/codemino/user_game_status/";
  	else
  		serviceUrl = "https://app.talent14.com/api/integrations/codemino/user_game_status/";
  	
    $.ajax({ url: serviceUrl,
        type: "POST",
        contentType: "application/json; charset=utf-8", 
        dataType: "json",
		
		data: JSON.stringify(dataToSend),
        // data: JSON.stringify({
		// 	"user": user,
		// 	"game": game,
		// 	"competition": competition,
		// 	"status": result
        // }),
				
		
		success: (data) => {
			// Burada mesajı parent (React uygulaması) sayfasına gönderiyoruz.
			window.parent.postMessage({ gameData:data }, "*");
            // console.log("Sunucuya başarılı bir şekilde ulaşıldı:", data);
			// console.log("homework",homework);
			// console.log("competition",competition);
			// console.log("window.location",window.location);
            handleHtml(data);
        },
        error: (xmlRequest) => {
            console.error("Sunucuya ulaşma hatası:", xmlRequest);
            ajaxFailed(xmlRequest);
        }
        // success: handleHtml,
        // error: ajaxFailed
    });
}

function handleHtml(data, status) {
    //alert(status);
}

function ajaxFailed(xmlRequest) {
    //alert(xmlRequest.status + ' \n\r ' + 
    //      xmlRequest.statusText + '\n\r' + 
    //      xmlRequest.responseText);
}
