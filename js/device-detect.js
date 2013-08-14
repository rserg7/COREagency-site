$(document).ready(function(){
    jscssfile();
});

window.onresize = function(event) {
    jscssfile();
}

function jscssfile() {
	ww = $(window).width();
	wh = $(window).height();

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ 
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ 
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

		if (ww > 1099){
			loadjscssfile("js/jquery.sticky.js", "js")
			loadjscssfile("js/script.js", "js")
			//loadjscssfile("js/jquery.mobile-menu.js", "js")
			//loadjscssfile("js/mobile-menu.js", "js")
		}
		
		else if (ww <= 1099){
			loadjscssfile("js/script-medium.js", "js")
		}
		
	}	
