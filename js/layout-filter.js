$(window).load(function(){
	
  var $container = $('#container'),
      // create a clone that will be used for measuring container width
      $containerProxy = $container.clone().empty().css({ visibility: 'hidden' }); 
      $checkboxes = $('#filters button');
  
    
  $container.after( $containerProxy );  

    // get the first item to use for measuring columnWidth
  var $item = $container.find('.item').not('.w2').eq(0);

  $(window).smartresize( function() {
    // calculate columnWidth
    var colWidth = Math.floor( $containerProxy.width() / 4 );
    // set width of container based on columnWidth
    $container.css({
        width: colWidth * 4
    })
    .isotope({
      // other options...
      // disable automatic resizing when window is resized
      resizable: false,
      // set columnWidth option for masonry
      masonry: {
        columnWidth: colWidth
      }
    });
    // trigger smartresize for first time
  }).smartresize();

	
	$('button').on('click', function () {
		var val = $(this.value)
		$container.isotope({ filter: val });
		$('button').removeClass('active');
		$(this).toggleClass('active');
	});

});
