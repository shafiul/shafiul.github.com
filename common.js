var bigTitle = 'Shafiul Azam Chowdhury';
var littleTitle = '<b>Senior Software Engineer</b> at ZS Solutions Ltd.'
var headerLinks= '<br/><a href="index.html">Home</a> | \
<a href="http://bdhacker.wordpress.com">Blog</a>'

var myFooter = '<p style="text-align: left; font-size: 10px;">\
          &copy; Nothing | \
          <a href="http://twitter.com/ishafiul">@ishafiul</a> |\
          <a href="http://bdhacker.wordpress.com">Blog</a> |\
          <a href="http://shafiul.users.sf.net">Old Site</a>\
        </p>';

function commonDecoration(){
	$("#bigTitle").html(bigTitle);
	$("#littleTitle").html(littleTitle);
	$("#headerLinks").html(headerLinks);
	$("#myFooter").html(myFooter);
}

$(document).ready(function(){
	commonDecoration();
});