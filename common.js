var bigTitle = 'Shafiul Azam Chowdhury';
var littleTitle = '<b>PhD Student and <a title=\"Graduate Research Assistant\">GRA</a></b> at <a title=\"Computer Science and Engineering Department at The University of Texas at Arlington\" href=\"http://cse.uta.edu\">CSE @ UTA</a>'
var headerLinks= '<br/><a href="index.html">Home</a> | \
<a href="bio.html">Bio</a> | \
<a href="presentations.html">Presentations</a> | \
<a href="projects.html">Projects</a>'

var myFooter = '<p style="text-align: left; font-size: 10px;">\
          &copy; 2015, Shafiul Azam Chowdhury. You may not copy contents from this website \
          without prior permission from the author. | \
          <a href="http://twitter.com/ishafiul">@ishafiul</a> |\
          <a href="http://bdhacker.wordpress.com">Blog</a> |\
          <a href="presentations.html">Presentations</a> |\
          <a href="projects.html">Projects</a>\
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