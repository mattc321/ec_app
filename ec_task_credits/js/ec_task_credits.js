
 /**
 * 
 *
 */

(function ($) {
	  Drupal.behaviors.ec_task_credits = {
		attach: function (context, settings) {
			
		$(window).load(function() {
			console.log('EC Take Credits Module loaded');
		});

		/**Called in ec_task_credits.module during the ajax success
		* First the html is replaced by ajax. Then this function is
		* called, which adds a fadeOut and then completely removes the html by
		* replacing it with the original html that it had.
	 	*/
		$.fn.creditSuccessAnimation = function($term_id, $argument2) {
			if ($('.task-credit-complete').length > 0) {
				$('.task-credit-complete').delay(2500).queue(function(){
					$('.task-credit-complete').addClass("fadeOutDown");
					//$('#ajax-credit-replace-' + $term_id).delay(1000).replaceWith('<div id="task-credit-ajax-response-' + $term_id + '" class="hide-field"></div>');
					$('.task-credit-complete').dequeue();
				});

				$('.task-credit-complete').delay(3500).queue(function(){
					$('#ajax-credit-replace-' + $term_id).replaceWith('<div id="task-credit-ajax-response-' + $term_id + '" class="hide-field"></div>');
					$('.task-credit-complete').dequeue();
				});

			}
		};

		$('#download-images-btn').click(function() {
			$(this).html('Preparing Download');
			var taskNid = $(this).data('id');
			var myAjax = "/download/task-credits/" + taskNid;

			$(this).delay(2000).queue(function(){
				$("#download-zip-target").load(myAjax);
				$(this).dequeue();
				$(this).html('Done Zipping');
			});
		});

		$('#download-zip-target').click(function() {
			$(this).addClass('animated zoomOutLeft').delay(2000).queue(function(){
				$(this).replaceWith('<div id="download-zip-target"></div>');
				$('#download-images-btn').html('Download Images');
			});
		});


		if ($('.remove-image-js').length > 0) {
			$('.remove-image-js').click(function() {
				console.log('poo it');
				//console.log(this.attribute('data'));
				//console.log(this.attr('data'));
			});
		}

    }
  };
})(jQuery);
