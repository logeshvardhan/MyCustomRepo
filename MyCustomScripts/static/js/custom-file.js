

var a = "hello";
document.getElementById("name").innerHTML = Date();

function sub()
{
if(document.getElementById("t1").value == "")
alert("Please enter your name");
else if(document.getElementById("t2").value == "")
alert("Please enter a password");
else if(document.getElementById("t2").value != document.getElementById("t3").value)
alert("Please enter correct password");
else if(document.getElementById("t4").value == "")
alert("Please enter your address");
else
alert("Form has been submitted");
}


/*copy text*/
function copyText(){
	document.getElementById('field2').value = document.getElementById('field1').value
	}