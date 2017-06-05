
 /**
 * 
 *
 */
function ajaxSuccessClear(selector, classToRemove) {
	console.log('function called');
	 jQuery(selector).addClass('fadeOutDown').removeClass('bounceInDown');


}

(function ($) {
	  Drupal.behaviors.ec_task_credits = {
		attach: function (context, settings) {
			
		$(window).load(function() {
			console.log('EC Take Credits Module loaded');
		});

    }
  };
})(jQuery);
