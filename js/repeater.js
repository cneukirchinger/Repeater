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
    $('#txaCustom').val('');
	})
  
  $('#btnRepeat').click(function() {
    console.log('Click: Repeat');
    
    var repeatBehavior = $('input:checked').val();
    var inputText = $('#txaInput').val();
    var workingLine = '';
    var outputText = '';
    
    switch(repeatBehavior) {
      case 'standard':
        console.log('Behavior: standard');
        var repeatTimes = parseInt($('#inpTimes').val());
        var repeatOffset = parseInt($('#inpOffset').val());
        var repeatOffsetJ = parseInt($('#inpOffsetJ').val());
        var Numbers = new Array();
        for(i = 0; i <= repeatTimes; i++) {
          Numbers[i] = i + repeatOffset;
        }
        break;
        
      case 'custom':
        console.log('Behavior: custom');
        var Numbers = $('#txaCustom').val().split(/\n|\r/);
        var repeatTimes = Numbers.length;
        var repeatOffset = 0;
    }
    
    for(var i = 0; i < Numbers.length; i++) {
      workingLine = inputText.replace(/@@i@@/g, Numbers[i]);
      workingLine = workingLine.replace(/@@j@@/g, (Numbers[i] + repeatOffsetJ));
      outputText = outputText.concat(workingLine + '\n');
    }
    
    $('#txaOutput').val(outputText);
  })
  
  $('#ordStandard').click(function() {
    console.log('Click: Radio Standard');
    $('#fdsCustom').hide('slow');
    $('#fdsStandard').show('slow');
  });
  
  $('#ordCustom').click(function() {
    console.log('Click: Radio Custom');
    $('#fdsStandard').hide('slow');
    $('#fdsCustom').show('slow');
  });
})
