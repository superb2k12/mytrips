/*
This is the instructions on how to build your own social share toolbar using jQuery and CSS3. The toolbar should be visible at the bottom right corner of your browser. If you hover over the toolbar it will slide up, click the minimize button it will all but disappear, click one of the icons and you will be taken to either the login page or the share page of that social site.

http://www.jquery4u.com/tutorials/jquery-socialize-sharing-tool

*/
(function( $ ) {
  $(document).ready(function() { 
    var url = window.location.href;
    var host =  window.location.hostname;
    var title = $('title').text();
    title = escape(title); //clean up unusual characters
 
    var twit = 'http://twitter.com/home?status='+title+'%20'+url;
    var facebook = 'http://www.facebook.com/sharer.php?u='+url
    var google = 'https://plus.google.com/share?url='+url
 
    var tbar = '<div id="socializethis"><span>Share<br /><a href="#min" id="minimize" title="Minimize"> <img src="images/minimize.png" /> </a></span><div id="sicons">';
    tbar += '<a href="'+twit+'" id="twit" title="Share on twitter"><img src="images/twitter.png"  alt="Share on Twitter" width="32" height="32" /></a>';
    tbar += '<a href="'+facebook+'" id="facebook" title="Share on Facebook"><img src="images/facebook.png"  alt="Share on facebook" width="32" height="32" /></a>';
	tbar += '<a href="'+google+'" id="google" title="Share on Google Plus"><img src="images/plus.png"  alt="Share on facebook" width="32" height="32" /></a>';
    tbar += '</div></div>';
 
    // Add the share tool bar.
    $('body').append(tbar); 
    $('#socializethis').css({opacity: .7}); 
    // hover.
    $('#socializethis').bind('mouseenter',function(){
      $(this).animate({height:'35px', width:'260px', opacity: 1}, 300);
      $('#socializethis img').css('display', 'inline');   
    });
    //leave
    $('#socializethis').bind('mouseleave',function(){
      $(this).animate({ opacity: .7}, 300);
    });  
    // Click minimize
    $('#socializethis #minimize').click( function() { 
      minshare(); 
      $.cookie('minshare', '1');  
    }); 
 
    if($.cookie('minshare') == 1){
      minshare();
    }  
 
    function minshare(){
      $('#socializethis').animate({height:'15px', width: '40px', opacity: .7}, 300); 
      $('#socializethis img').css('display', 'none');
      return false;
    }  
  });
})(jQuery);