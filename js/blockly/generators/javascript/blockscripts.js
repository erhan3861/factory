	'use strict';

	Blockly.JavaScript['start'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "start();";

	  return code;
	};
	
	Blockly.JavaScript['walk'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "Walk();";

	  return code;
	};

	Blockly.JavaScript['turn_right'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "TurnToRight();";

	  return code;
	};

	Blockly.JavaScript['turn_left'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "TurnToLeft();";

	  return code;
	};

	Blockly.JavaScript['smash_stone'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "BreakRock();";

	  return code;
	};

	Blockly.JavaScript['collect_jewel'] = function(block) {
	  // TODO: Assemble JavaScript into code variable.
	  var code = "CollectCrystal();";

	  return code;
	};

	Blockly.JavaScript['klavye_olay'] = function(block) {
	  var dropdown_klavye = block.getFieldValue('klavye');
	  var statements_klavye_basilinca = Blockly.JavaScript.statementToCode(block, 'klavye_basilinca');
	  // TODO: Assemble JavaScript into code variable.
	  var code = '';

	  if(dropdown_klavye == "37")
	  {
	  	code = 'document.addEventListener("keydown", function(event){if(event.keyCode == 37)' + statements_klavye_basilinca + '} );';
	  }

	  if(dropdown_klavye == "38")
	  {
	  	code = 'document.addEventListener("keydown", function(event){if(event.keyCode == 38)' + statements_klavye_basilinca + '} );';
	  }

	  if(dropdown_klavye == "39")
	  {
	  	code = 'document.addEventListener("keydown", function(event){if(event.keyCode == 39)' + statements_klavye_basilinca + '} );';
	  }

	  if(dropdown_klavye == "40")
	  {
	  	code = 'document.addEventListener("keydown", function(event){if(event.keyCode == 40)' + statements_klavye_basilinca + '} );';
	  }
	  return code;
	};

	
	Blockly.JavaScript['for_dongusu'] = function(block) {
	  // Repeat n times.
	  if (block.getField('TIMES')) {
	    // Internal number.
	    var repeats = String(Number(block.getFieldValue('TIMES')));
	  } else {
	    // External number.
	    var repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
	        Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
	  }
	  var branch = Blockly.JavaScript.statementToCode(block, 'DO');
	  branch = Blockly.JavaScript.addLoopTrap(branch, block);
	  var code = '';
	  var loopVar = Blockly.JavaScript.variableDB_.getDistinctName(
	      'count', Blockly.Variables.NAME_TYPE);
	  var endVar = repeats;
	  if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
	    var endVar = Blockly.JavaScript.variableDB_.getDistinctName(
	        'repeat_end', Blockly.Variables.NAME_TYPE);
	    code += 'var ' + endVar + ' = ' + repeats + ';\n';
	  }
	  code += 'for (var ' + loopVar + ' = 0; ' +
	      loopVar + ' < ' + endVar + '; ' +
	      loopVar + '++) {' +
	      'loopstep();' +
	      branch + '}' + 
	      'loopend();' + 
	      '\n';  
	  return code;
	};