$('saveBtn').onclick = function(e){

	title = $('title').value;
	tag = $('tag').value;
	when = $('when').value;

	db_open(callable);

	function callable(){
		add_article({
			title: title,
			tag: tag,
			when: when
		});
	}
}