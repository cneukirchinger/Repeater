// console.log("Hello World");

// function doRepeat() {
//   console.log("Repeater Job started");
//   var repeatInput;
//   var repeatResult = '';
  
//   repeatInput = document.getElementById('txaInput').value;
//   repeatTimes = document.getElementById('inpTimes').value;
  
//   for(var i = 0; i < repeatTimes; i++) {
//     repeatResult = repeatResult.concat(i + ': ' + repeatInput.replace("@@i@@", i) + '\n');
//   }
//   document.getElementById('txaOutput').value = repeatResult;
// }
$(document).ready(function() {
	console.log("Hello");
	$("#btnExample").click(function() {
		$("textarea#txaOutput").html = "Test";
		console.log("Click");
	})
})
