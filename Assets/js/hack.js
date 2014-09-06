/* Adapted from
 * http://untame.net/2013/04/how-to-integrate-simple-parallax-with-twitter-bootstrap/
 */
$(document).ready(function(){
   $.localScroll({
      // target: '#content', // could be a selector or a jQuery object too.
      axis: 'y',
      duration:1000,
      hash:true,
      onBefore:function( e, anchor, $target ){
        // The 'this' is the settings object, can be modified
      },
      onAfter:function( anchor, settings ){
        // The 'this' contains the scrolled element (#content)
      }
    });

   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function
});