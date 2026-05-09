	function ShowCode(code)
	{
		var result = code;
	
		var count = (result.match(new RegExp("highlightBlock", "g")) || []).length;
		
		for(i = 0; i < count; i++)
		{
			result = result.replace(/highlightBlock(.*)/, '');
		}

        if(result.indexOf("\n") == 0)
        {
            result = result.replace("\n", "");
        }

		return result;
	}

    function AddLine(code)
    {
        var result = code;
    
        result = replaceAll(result, "();", "();\n");
        result = replaceAll(result, "}", "}\n");
        result = replaceAll(result, "{", "{\n");

        return result;
    }

    function  AddHighLight(code)
    {
        var result = code;

        try
        {
            result = AddLoopSteps(result);
            
            for(i = 0; i < ActionsList.length; i++)
                result = replaceAll(result, ActionsList[i], "highlightBlock('');" + ActionsList[i]);

            result = replaceAll(result, "for", "highlightBlock('');for");
        }
        catch(err)
        {
            throw err;
        }

        return result;
    }

    function AddLoopSteps(code)
    {
        try
        {
            code = AddLoopStepsFor(code);
        }      
        catch(err)
        {
            throw err;
        }

        return code;
    }

    function AddLoopStepsFor(code)
    {
        var forIndex = 0;
        var indexOpenParen = 0;
        var indexClosingParen = 0;

        /* For */
        var forCount = code.split("for").length - 1;
     
        while(forCount > 0)
        {   
            var arrayCode = code.split('');

            indexOpenParen = findIndexOpenParenFor(code);

            if(indexOpenParen < 0)
            {
                throw new Error('Missing curly brackets');
            }

            indexClosingParen = findClosingParen(arrayCode, indexOpenParen); 

            code = code.insert(indexClosingParen + 1, "loopend();");
            code = code.insert(indexClosingParen - 1, "highlightBlock('');");

            code = code.insert(indexOpenParen + 1, "loopstep();");
     
            forCount = forCount - 1;
        }
   
        return code;
    }

    function findIndexOpenParenFor(code)
    {
        var loopIndex = 0;
        var indexOpenParen = 0;
        var forCount = code.split("for").length - 1;

        for(var i = 0; i < forCount; i++)
        {   
            loopIndex = code.indexOf("for", loopIndex);
           
            indexOpenParen = code.indexOf("{", loopIndex);
            if(code.substr(indexOpenParen + 1 , 11) == "loopstep();")
            {   
                loopIndex = indexOpenParen;
                continue;
            }
        }
        
        return indexOpenParen;
    }

    function findClosingParen(text, openPos) {
        var closePos = openPos;
        var counter = 1;
        while (counter > 0) {
            closePos = closePos + 1;
            var c = text[closePos];
           
            if (c == '{') {
                counter = counter + 1;
            }
            else if (c == '}') {
                counter = counter - 1;
            }
        }

        return closePos;
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

    String.prototype.insert = function (index, string) {
      if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);

      return string + this;
    };

    function JavaScriptBtClick(command)
    {
        var customPosition = editorJavaScript.getCursorPosition();

        if(command == "loop")
        {
            command = "for(var count = 0; count < 10; count++){\n"+ 
                      "\n" +
                      "}\n";
        }
        else
        {
            command = command + "();\n";
        }

        editorJavaScript.session.insert(customPosition , command);

    }

    function PythonBtClick(command)
    {
        var customPosition = editorPython.getCursorPosition();
        
        if(command == "loop")
        {
            command = "for count in range(10):\n";
        }
        else
        {
            command = command + "()\n";
        }

        editorPython.session.insert(customPosition , command);
    }