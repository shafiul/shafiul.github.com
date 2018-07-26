var bigTitle = 'Shafiul Azam Chowdhury';
var littleTitle = '<b>PhD Student and <a title=\"Graduate Research Assistant\">GRA</a></b> at <a title=\"Computer Science and Engineering Department at The University of Texas at Arlington\" href=\"http://cse.uta.edu\">CSE @ UTA</a>'
var headerLinks= '<br/><a href="index.html">Home</a> | \
<a href="bio.html">Bio</a> | \
<a href="https://scholar.google.com/citations?user=F8DuEVMAAAAJ&hl=en">Publications</a> | \
<a href="thikana.html">Contact</a> | \
<a href="https://www.linkedin.com/in/shafiulazam">LinkedIn Profile</a>'

var myFooter = '<p style="text-align: left; font-size: 10px;">\
          &copy; Shafiul Azam Chowdhury. You may not copy contents from this website \
          without prior permission from the author. | \
          <a href="https://github.com/shafiul">GitHub</a> |\
          <a href="thikana.html">Contact</a> |\
          <a href="https://www.linkedin.com/in/shafiulazam">LinkedIn Profile</a>\
        </p>';

function commonDecoration(){
	$("#bigTitle").html(bigTitle);
	// $("#littleTitle").html(littleTitle);
	$("#headerLinks").html(headerLinks);
	$("#myFooter").html(myFooter);
}


function gotoURL(url){
  window.location = url;
}

$(document).ready(function(){
	commonDecoration();
});