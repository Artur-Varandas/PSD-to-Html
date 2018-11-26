$('nav a').click(function(e){
  e.preventDefault();

  var id = $(this).attr('href');

  console.log(id);
});

    	var toggleAffix = function(affixElement, wrapper, scrollElement) {

	    var height = affixElement.outerHeight(),
	        top = wrapper.offset().top;

	    if (scrollElement.scrollTop() >= top){
	        wrapper.height(height);
	        affixElement.addClass("affix");
	    }
	    else {
	        affixElement.removeClass("affix");
	        wrapper.height('auto');
	    }
	  };


	  $('[data-toggle="affix"]').each(function() {
	    var ele = $(this),
	        wrapper = $('<div></div>');

	    ele.before(wrapper);
	    $(window).on('scroll resize', function() {
	        toggleAffix(ele, wrapper, $(this));
	    });

	    // init
	    toggleAffix(ele, wrapper, $(window));
	  });

    
    	$('nav a').click(function(e){
			e.preventDefault();

			var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

			$('html, body').animate({
				scrollTop: targetOffset - menuHeight
			}, 500)
		});

    	// Cache selectors
var lastId,
    topMenu = $("#menu-links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});