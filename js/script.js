function getDocHeight(){
	var d = document;
	return Math.max(
			d.body.scrollHeight, d.documentElement.scrollHeight,
			d.body.offsetHeight, d.documentElement.offsetHeight,
			d.body.clientHeight, d.documentElement.clientHeight
		)
}

function amountscrolled(){
	var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
	var docheight = getDocHeight();
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var trackLength = docheight - winheight;
	var pctScrolled = Math.floor(scrollTop/trackLength * 100);
	return pctScrolled;
}

window.addEventListener("scroll",
	function(){
		if(amountscrolled() >= 8)
		{
			document.getElementById("skills").checked = "checked";
		}
		if(amountscrolled() >= 22)
		{
			document.getElementById("works_btn").checked = "checked";
		}
		if(amountscrolled() >= 85)
		{
			document.getElementById("more").checked = "checked";
		}
		if(amountscrolled() < 8)
		{
			document.getElementById("accueil").checked = "checked";
		}

	},

	false);
