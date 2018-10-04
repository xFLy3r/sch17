window.onload = removeAd;

function removeAd() {
	body.removeChild(document.querySelector(".cbalink"));
	body.removeChild(document.querySelector(".cumf_bt_form_wrapper"));
	setTimeout(function() {
		document.getElementsByClassName("cbalink")[0].remove();
		document.getElementsByClassName("cumf_bt_form_wrapper")[0].remove();
	}, 50);
}

var cont = "index";
var xhr = new XMLHttpRequest();
xhr.open("GET", "processor.php?content=" + cont);
xhr.send();

xhr.onreadystatechange = function() {
	if (xhr.readyState != 4) return;

	if (xhr.status != 200)
		//var response = JSON.parse(xhr.responseText);
		document.writeln(xhr.status + ": " + xhr.statusText);
	else
		document.getElementById("main").innerHTML = xhr.responseText;
}