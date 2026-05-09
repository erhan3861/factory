	function PythonToJavaScript(code)
	{
		var result = code;
		result = replaceAll(result, "True", "true");
     	result = replaceAll(result, "==", "===");
     	result = replaceAll(result, "False", "false");
     	result = replaceAll(result, "None", "0");
     	result = replaceAll(result, "pass", "");

	    var lines = result.split("\n");

	    /* For Convert */

	    var forLines = [];
	    var forIndexes = [];
	    var forIndex;
	    var forLineIndex;
	 
    	for (var i = 0; i < lines.length; i++) {
	      if(lines[i].indexOf("for") >= 0)
	      {
	        forIndexes.push(lines[i].indexOf("for"));
	        forLines.push(i);    
	        lines[i] = forConvert(lines[i]);
	      } 
    	}

    	for (var i = 0; i < forIndexes.length; i++)
    	{
    		forIndex = forIndexes[i];
	        forLineIndex = forLines[i];

	        for (var j = forLineIndex + 1; j < lines.length; j++)
	        {
			    if(lines[j].search(/\S/) <= forIndex
			    	&& lines[j].substring(lines[j].search(/\S/), 1) != "#"
			    	&& lines[j].trim() != "")
			    {
			    	var spaceCount = lines[j].search(/\S/);
			    	var space = "";

			    	for(var k = 0; k < spaceCount; k++)
			    	{
			    		space = space + " ";
			    	}

				    lines[j] = space + "}\n" + lines[j];
				    break;
			    }
			}
    	}

    	result = lines.join("\n");

    	/* While Concert */

    	lines = result.split("\n");

    	var whileLines = [];
	    var whileIndexes = [];
	    var whileIndex;
	    var whileLineIndex;
	 
    	for (var i = 0; i < lines.length; i++) {
	      if(lines[i].indexOf("while") >= 0)
	      {
	        whileIndexes.push(lines[i].indexOf("while"));
	        whileLines.push(i);    
	        lines[i] = whileConvert(lines[i]);
	      } 
    	}

    	for (var i = 0; i < whileIndexes.length; i++)
    	{
    		whileIndex = whileIndexes[i];
	        whileLineIndex = whileLines[i];

	        for (var j = whileLineIndex + 1; j < lines.length; j++)
	        {
			    if(lines[j].search(/\S/) <= whileIndex
			    	&& lines[j].substring(lines[j].search(/\S/), 1) != "#"
			    	&& lines[j].trim() != "")
			    {
			    	var spaceCount = lines[j].search(/\S/);
			    	var space = "";

			    	for(var k = 0; k < spaceCount; k++)
			    	{
			    		space = space + " ";
			    	}

				    lines[j] = space + "}\n" + lines[j];
				    break;
			    }
			}
    	}
    	
     	result = lines.join("\n");

     	/* If Concert */

    	lines = result.split("\n");

    	var ifLines = [];
	    var ifIndexes = [];
	    var ifIndex;
	    var ifLineIndex;
	 
    	for (var i = 0; i < lines.length; i++) {
    	  if(lines[i].indexOf("elif") >= 0)
	      {
	        ifIndexes.push(lines[i].indexOf("elif"));
	        ifLines.push(i);    
	        lines[i] = elifConvert(lines[i]);
	      }
	      else if(lines[i].indexOf("if") >= 0)
	      {
	        ifIndexes.push(lines[i].indexOf("if"));
	        ifLines.push(i);    
	        lines[i] = ifConvert(lines[i]);
	      }
    	}

    	for (var i = 0; i < ifIndexes.length; i++)
    	{
    		ifIndex = ifIndexes[i];
	        ifLineIndex = ifLines[i];

	        for (var j = ifLineIndex + 1; j < lines.length; j++)
	        {
			    if(lines[j].search(/\S/) <= ifIndex
			    	&& lines[j].substring(lines[j].search(/\S/), 1) != "#"
			    	&& lines[j].trim() != "")
			    {
			    	var spaceCount = lines[j].search(/\S/);
			    	var space = "";

			    	for(var k = 0; k < spaceCount; k++)
			    	{
			    		space = space + " ";
			    	}

				    lines[j] = space + "}\n" + lines[j];
				    break;
			    }
			}
    	}

		result = lines.join("\n");

    	/* Function Concert */

    	lines = result.split("\n");

    	var functionLines = [];
	    var functionIndexes = [];
	    var functionIndex;
	    var functionLineIndex;
	 
    	for (var i = 0; i < lines.length; i++) {
	      if(lines[i].indexOf("def") >= 0)
	      {
	        functionIndexes.push(lines[i].indexOf("def"));
	        functionLines.push(i);    
	        lines[i] = functionConvert(lines[i]);
	      } 
    	}

    	for (var i = 0; i < functionIndexes.length; i++)
    	{
    		functionIndex = functionIndexes[i];
	        functionLineIndex = functionLines[i];

	        for (var j = functionLineIndex + 1; j < lines.length; j++)
	        {
			    if(lines[j].search(/\S/) <= functionIndex
			    	&& lines[j].substring(lines[j].search(/\S/), 1) != "#"
			    	&& lines[j].trim() != "")
			    {
			    	var spaceCount = lines[j].search(/\S/);
			    	var space = "";

			    	for(var k = 0; k < spaceCount; k++)
			    	{
			    		space = space + " ";
			    	}

				    lines[j] = space + "}\n" + lines[j];
				    break;
			    }
			}
    	}
    	
    	for(var i = 0; i < lines.length; i++)
    	{
    		if(
    			(lines[i].indexOf("for") >= 0)
    			|| (lines[i].indexOf("while") >= 0)
    			|| (lines[i].indexOf("if") >= 0)
    			|| (lines[i].indexOf("function") >= 0)
    			|| (lines[i].indexOf("{") >= 0)
    			|| (lines[i].indexOf("}") >= 0)
    			|| (lines[i].trim() === "")
    		   )
    		{
				
    		}
    		else
    		{
    			lines[i] = lines[i] + ";";
    		}
    	}

     	result = lines.join("\n");

     	result = replaceAll(result, "#", "//");

     	var nonClosingParenCount = findNonClosingParenCount(result);

     	if(nonClosingParenCount > 0)
    	{
    		for(var i = 0; i < nonClosingParenCount; i++)
    		{
    			result = result + "\n}";
    		}
    	}

		return result;
	}

    function forConvert(code)
    {	
    	var spaceCount = code.search(/\S/);
    	var space = "";

    	for(var i = 0; i < spaceCount; i++)
    	{
    		space = space + " ";
    	}

    	var forParts = code.trim().split(" ");
	    for(var j = 0; j < forParts.length; j++)
	    {
	        if(forParts[j] == "")
	        {
	        	forParts.splice(j, 1);
	        	j--;
	        }
	    }   

	    var range = code.substring(code.indexOf("(") + 1, code.indexOf(")"));
	
	    if(range.indexOf(",") > 0)
	    {
	    	var ranges = range.trim().replace(" ", "").split(",");
	    	var result = space + "for(var " + forParts[1] + " = "+ ranges[0] +"; " + forParts[1] + " < " + ranges[1] + "; " + forParts[1] + "++)";
	    }

	    else
	    {
	    	var result = space + "for(var " + forParts[1] + " = 0; " + forParts[1] + " < " + range + "; " + forParts[1] + "++)";
		}

	    if(code.trim().indexOf(":") == code.trim().length - 1)
	    	result = result + "{";

	    return result;
    }

    function whileConvert(code)
    {	
    	var spaceCount = code.search(/\S/);
    	var space = "";

    	for(var i = 0; i < spaceCount; i++)
    	{
    		space = space + " ";
    	}
  
  		var startIndex = code.indexOf("while") + 5;
  		var endIndex = code.indexOf(":");

	    var result = space + "while(" +  code.substring(startIndex, endIndex) + ")";

	    if(code.trim().indexOf(":") == code.trim().length - 1)
	    	result = result + "{";

	    return result;
    }

    function functionConvert(code)
    {	
    	var spaceCount = code.search(/\S/);
    	var space = "";

    	for(var i = 0; i < spaceCount; i++)
    	{
    		space = space + " ";
    	}

    	code = code.replace("def", "function");
    	code = code.replace(":", "{");

	    return code;
    }

    function ifConvert(code)
    {	
    	code = code.replace("and", " && ");
    	code = code.replace("or", " || ");

    	var spaceCount = code.search(/\S/);
    	var space = "";

    	for(var i = 0; i < spaceCount; i++)
    	{
    		space = space + " ";
    	}

    	var startIndex = code.indexOf("if") + 2;
  		var endIndex = code.indexOf(":");

	    var result = space + "if(" +  code.substring(startIndex, endIndex) + ")";

	    if(code.trim().indexOf(":") == code.trim().length - 1)
	    	result = result + "{";

	    return result;
    }

    function elifConvert(code)
    {	
    	var spaceCount = code.search(/\S/);
    	var space = "";

    	for(var i = 0; i < spaceCount; i++)
    	{
    		space = space + " ";
    	}

    	var ifParts = code.trim().split(" ");
	    for(var j = 0; j < ifParts.length; j++)
	    {
	        if(ifParts[j] == "")
	        {
	        	ifParts.splice(j, 1);
	        	j--;
	        }
	    }   

	    var result = "";

	    if(ifParts.length == 2)
	    {
		    result = space + "else ";

		    if(code.trim().indexOf(":") == code.trim().length - 1)
	    		result = result + "{";
		}
		else if(ifParts.length == 5)
		{
	 		result = space + "else if(" + ifParts[1] + ifParts[2] + ifParts[3] + ")";

		    if(code.trim().indexOf(":") == code.trim().length - 1)
	    		result = result + "{";
		}

	    return result;
    }

    function findNonClosingParenCount(code) {

        var openCount = code.split("{").length - 1;
        var closeCount = code.split("}").length - 1;

        return openCount - closeCount;
    }

    /* Define function for escaping user input to be treated as 
    a literal string within a regular expression */
    function escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
     
    /* Define functin to find and replace specified term with replacement string */
    function replaceAll(str, term, replacement) {
      return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
    }