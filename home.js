function workDecorator(data){
	markup = "<h5 class='card-title'>" + data.title + " at " + data.company + "</h5>";
	markup += "<p class='card-text'>";
	markup += "<i class='protech'>" + data.duration + " at " + data.location + "</i> <br><br> " + data.description + "<br><br>";

	for(var i in data.technologies){
		markup += "<span class='badge badge-secondary'>" + data.technologies[i] + "</span> ";
	}

	return markup + "<br><br> </p>";
}


$(document).ready(function(){
	loadFire("https://shafiul.firebaseio.com/updates2");
	loadFire("https://shafiul.firebaseio.com/work");
	loadFire("https://shafiul.firebaseio.com/skills");
});