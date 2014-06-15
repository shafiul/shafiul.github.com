function $(elementID){
	// A shortcut for document.getElementById
	return document.getElementById(elementID)
}

var db = null;

var db_name = 'third_db';
var db_version = 1;

var table_name = 'articles';

function db_open(callable){

	if(db != null){
		callable();
		return;
	}

	var openRequest = indexedDB.open(db_name, db_version);

	openRequest.onupgradeneeded = function(e){
		console.log('Upgrading Database...');

		db = e.target.result;

		if(!db.objectStoreNames.contains(table_name)){
			console.log('Creating data store and Index...');
			articles_store = db.createObjectStore(table_name, {autoIncrement:true});
			articles_store.createIndex('tag', 'tag', {unique:false});
		}
	}

	openRequest.onsuccess = function(e){
		console.log('DB open successfull');
		db = e.target.result;
		callable();
	}

	openRequest.onerror = function(e){
		alert('Failed opening DB!')
	}
}

function add_article(articleOb){

	if(db == null){
		alert('DB NULL!');
		return;
	}

	var transaction = db.transaction([table_name],'readwrite');
	var articles_store = transaction.objectStore(table_name);

	var request = articles_store.add(articleOb);

	request.onerror = function(e) {
	    alert('Adding article failed: ' + e.target.error.name);
	}
	 
	request.onsuccess = function(e) {
	    alert('Adding article successfull');
	}
}

all_markup = '';

function cursor_success_handler(e) {

	    var res = e.target.result;

	    console.log('iterating...');

	    if(res) {

	    	data = res.value;

	    	all_markup += '<li>' + res.key + '. <b>' + data.title + '</b> (' + data.tag + ') on ' + data.when  +'</li>';

	        console.log("Key", res.key);
	        console.log("Data", res.value);
	        res.continue();
	    }

	    $('all').innerHTML = '<ul>' + all_markup + '</ul>';
	}

function get_all(){

	console.log('Will get all!');

	all_markup = '';

	var transaction = db.transaction([table_name], 'readonly');
	var objectStore = transaction.objectStore(table_name);
	 
	var cursor = objectStore.openCursor();
	 
	cursor.onsuccess = cursor_success_handler;
}

function get_for_index(search_text){
	console.log('Searching for index');

	all_markup = '';

	var transaction = db.transaction([table_name],"readonly");
	var store = transaction.objectStore(table_name);
	var index = store.index('tag');

	var singleKeyRange = IDBKeyRange.only(search_text);

	var cursor = index.openCursor(singleKeyRange);
	 
	cursor.onsuccess = cursor_success_handler;
}