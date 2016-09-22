var bigTitle = 'CyFuzz - Fuzzing CPS Development Tools';
var littleTitle = 'Differential testing framework for cyber-physical system developmment tools'
var headerLinks= '<br/><a href="index.html">Home</a> | \
<a href="https://github.com/verivital/slsf_randgen/wiki/CyFuzz-Reproduced-Bug-in-Simulink">Reproduced Bug</a> | \
<a href="https://github.com/verivital/slsf_randgen/wiki/Sample-random-models-generated-by-CyFuzz">Sample Models</a>'

var myFooter = '<p style="text-align: left; font-size: 10px;">\
          &copy; 2015, Shafiul Azam Chowdhury. You may not copy contents from this website \
          without prior permission from the author. | \
          <a href="../">Shafiul&apos;s Homepage</a>\
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