$(document).ready(function() {
	console.log('Document ready');
  
	$('#btnExample').click(function() {
    console.log('Click: Example');
		$('#txaInput').val('<Cell RepeatableCondition=\"Satz@@i@@ == \'true\'\">\n\t<Properties />\n</Cell>');
	})
  
  $('#btnClear').click(function() {
    console.log('Click: Clear');
		$('#txaInput').val('');
    $('#txaOutput').val('');
	})
  
  $('#btnRepeat').click(function() {
    console.log('Click: Repeat');
    
    var inputText = $('#txaInput').val();
    var outputText = '';
    var repeatTimes = parseInt($('#inpTimes').val());
    var repeatOffset = parseInt($('#inpOffset').val());
    
    for(var i = repeatOffset; i <= (repeatTimes + repeatOffset); i++) {
      outputText = outputText.concat(inputText.replace(/@@i@@/g, i) + '\n');
    }
    
    $('#txaOutput').val(outputText);
  })
  
  $('#ordStandard').click(function() {
    console.log('Click: Radio Standard');
    $('#fdsCustom').hide();
    $('#fdsStandard').show();
  });
  
  $('#ordCustom').click(function() {
    console.log('Click: Radio Custom');
    $('#fdsStandard').hide();
    $('#fdsCustom').show();
  });
})
