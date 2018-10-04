window.onload = removeAd;

function removeAd() {
	body.removeChild(document.querySelector(".cbalink"));
	body.removeChild(document.querySelector(".cumf_bt_form_wrapper"));
	setTimeout(function() {
		document.getElementsByClassName("cbalink")[0].remove();
		document.getElementsByClassName("cumf_bt_form_wrapper")[0].remove();
	}, 50);
}