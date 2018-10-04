refreshContent();
window.onload = removeAd;

function removeAd() {
	body.removeChild(document.querySelector(".cbalink"));
	body.removeChild(document.querySelector(".cumf_bt_form_wrapper"));
}

function refreshContent(content) {
	content = content || "index";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "processor.php?content=" + content);
	xhr.send();

	xhr.onreadystatechange = function() {
		history.pushState(null, null, "");
		if (xhr.readyState != 4) return;

		if (xhr.status != 200)
			document.writeln(xhr.status + ": " + xhr.statusText);
		else
			document.getElementById("main").innerHTML = xhr.responseText;
		
		document.getElementsByClassName("cbalink")[0].remove();
		document.getElementsByClassName("cumf_bt_form_wrapper")[0].remove();
	}
}