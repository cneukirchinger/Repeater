$(document).ready(function() {
	console.log('Document ready');
  
	$('#btnExample').click(function() {
    console.log('Click: Example');
		$('#txaOutput').val('Test');
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
