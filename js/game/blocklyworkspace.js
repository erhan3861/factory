var workspace;
var startXmlDom;
var startXmlText;
	/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	  collapse : true, 
	  comments : true, 
	  disable : true, 
	  maxBlocks : Infinity, 
	  trashcan : true, 
	  horizontalLayout : false, 
	  toolboxPosition : 'start', 
	  css : true, 
	  media : 'https://blockly-demo.appspot.com/static/media/', 
	  rtl : false, 
	  scrollbars : true, 
	  sounds : true, 
	  oneBasedIndex : true, 
	  move: {
	          scrollbars: true,
	          drag: true,
	          wheel: true,
	        },
	  toolbox: toolbox,
	  toolboxOptions: {
	      color: true,
	      inverted: true
	    },
	  zoom : {
	    controls: true,
	    wheel: false,
	    startScale: 1.0,
	    maxScale: 4,
	    minScale: 0.25,
	    scaleSpeed: 1.1
	  }
	};

/* Inject your workspace */ 
workspace = Blockly.inject('blocklyDiv', options);
Blockly.setTheme(Blockly.Themes.Classic);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */


let pagepart = String(window.location).split("?")[1];
var dom = Blockly.Xml.textToDom(eval("level" + pagepart));


Blockly.Xml.domToWorkspace(workspace, dom);

var workspaceBlocks = document.getElementById("workspaceBlocks"); 
//workspace.toolbox_.flyout_.autoClose = false;

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

startXmlDom = Blockly.Xml.workspaceToDom(workspace);
startXmlText = Blockly.Xml.domToText(startXmlDom);

var codeJavaScript = Blockly.JavaScript.workspaceToCode(workspace);
editorJavaScript.setValue(ShowCode(codeJavaScript));

var codePython = Blockly.Python.workspaceToCode(workspace);
editorPython.setValue((codePython));

function change() {
    var xmlDom = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToText(xmlDom);

    var startID = findCodeminoStartID(xmlText);

    if(startID != "")
    {
	    var block = workspace.getBlockById(startID);

	    if(block.childBlocks_ != null && block.type == "start")
        {
           latestCode = Blockly.JavaScript.blockToCode(block.childBlocks_[0]);
        }
	}

    if (startXmlText != xmlText) {
      window.location.hash = '';

      var codeJavaScript = Blockly.JavaScript.workspaceToCode(workspace);
      editorJavaScript.setValue(ShowCode(codeJavaScript));

      var codePython = Blockly.Python.workspaceToCode(workspace);
      editorPython.setValue((codePython));
    }

    workspaceCode = xmlText;
}

function findCodeminoStartID(xml) {

	var startIndex = xml.indexOf('<block type="start" id="');
	var id = "";

	if(startIndex >= 0)
	{
		startIndex = startIndex + 24;

		var tmp = xml.substring(startIndex);

		var endIndex = tmp.indexOf('"');

		id = tmp.substring(0, endIndex);
	}

	return id;
}

workspace.addChangeListener(change);