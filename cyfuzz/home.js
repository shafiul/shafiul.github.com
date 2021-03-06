function loadPersonalUpdates(){
	// Get a database reference to our posts
	var ref = new Firebase("https://shafiul.firebaseio.com/updates");
	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
	  console.log('Firebase Date Loaded!')
	  console.log(snapshot.val());
	  populatePersonalUpdates(snapshot.val());
	}, function (errorObject) {
	  console.log("Firebase read failed: " + errorObject.code);
	  populatePersonalUpdates(['Loading Failed :-(']);
	});
}

function populatePersonalUpdates(data){
	var markup = '';
	totalPosts = 0;
	for(i = data.length - 1; i >= 0; i--){
		markup += '<p>&bullet; ' + data[i] + '</p>';

		if(++totalPosts > 7){
			break;
		}
	}
	$('#personalUpdates').html(markup);
}

$(document).ready(function(){
	loadPersonalUpdates();
});