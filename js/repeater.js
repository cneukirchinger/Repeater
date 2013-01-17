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
    var repeatTimes = $('#inpTimes').val();
    
    for(var i = 0; i < repeatTimes; i++) {
      outputText = outputText.concat(inputText.replace(/@@i@@/g, i) + '\n');
    }
    
    $('#txaOutput').val(outputText);
  })
})
