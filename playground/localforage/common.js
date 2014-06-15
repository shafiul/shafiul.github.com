function $(elementID){
	// A shortcut for document.getElementById
	return document.getElementById(elementID)
}

var key = 'articles';

function add_article(articleOb){

	localforage.getItem(key, function(result){

		all_data = [];

		if(result != null){
			all_data = result;
		}

		all_data.push(articleOb);

		localforage.setItem(key, all_data, function(e){
			console.log(e);
			alert('Saved new article!');
		});

	});
	
}

function get_all(){

	localforage.getItem(key, function(result){

		console.log(result);

		if(result){

			markup = '<ul>';

			for(var i=0; i<result.length; i++){
				current = result[i];

				markup += '<li><b>' + current.title + '</b>(' + current.tag + ') on ' + current.when + '</li>';
			}

			markup += '</ul>';

			$('all').innerHTML = markup;
		}else{
			alert('No Result');
		}
	});
}