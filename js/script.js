$(document).ready(function() {			
	PositionWidthHeight();
	Filters();
	Scroller();
	Share();
});
		
window.onresize = function(event) {
	PositionWidthHeight();
	Filters();
	Scroller();
	Share();
}

function PositionWidthHeight() {
	w = $(window).width(); 
	h = $(window).height(); 

	$('#main-img').css({'height': h - 50 + 'px'});
	$('#last-work').css({'top': h - 50 + 'px'});
	$('#last-work').css({'height': w / 2.5 + 50 + 'px'});
	$('#who-we-are, #face-to-face, #contacts').css({'top': h + 'px'});
	$('#who-we-are, #face-to-face, #contacts').css({'height': w / 2.5 + 'px'});
	$('.box1').css({'height': w / 5 + 25 + 'px'});
	$('.box2').css({'height': w / 2.5 + 'px'});
	$('.box3').css({'height': w / 2.5 + 'px'});
	//$('#web, #seo').css({'height': w / 2.5 + 'px'});
	$('.item').css({'height': w / 5 + 'px'});							
	$('.item.h2').css({'height': w / 2.5 + 'px'});							


}		

function Filters() {
	$('#filters').animate({width: '382px'}, 1000 );
}

function Scroller() {
	$('#scroller').animate({width: '409px'}, 1000 );
}


function Share() {
	$('#share').stop(true, true).hover(function () {
		$('#share > a').stop(true, true).animate({width: 'toggle'}, 150);
		$('#social').stop(true, true).animate({width: '170px'}, 300 ); },
	function () {
		$('#social').animate({width: '0px'}, 100 );
		$('#share > a').stop(true, true).delay(200).animate({width: 'toggle'}, 150);}
	);
}

		$(window).bind('scroll',function(e){
		    parallaxScroll();
		});
 
		function parallaxScroll(){
		    var scrolled = $(window).scrollTop();
		    $('#main-img').css('top',(0-(scrolled*.25))+'px');
		    $('#main-logo').css('top',(0-(scrolled*.25))+'px');
		    $('#main-logo img:nth-child(1)').css('margin-right',(0+(scrolled*.25))+'px');
		    $('#main-logo img:nth-child(3)').css('margin-left',(0+(scrolled*.25))+'px');
		    $('#horiz-line').css('margin-top',(0-(scrolled*.25))+'px');
		    $('#horiz-line').css('margin-left',(0-(scrolled*2))+'px');
		    $('#horiz-line').css('width',(0+(scrolled*4))+'px');
		}
