/**
 * @file
 * This file contains all jQuery for the forms used in ec_app
 */



 /**
 *
 * Calculates extended prices of service line items on opportunities
 * Attached to the form controls in ec_app//ec_app_form_alter()
 */
 function servicePrice(thisval, pricekey, testid) {
		var strVal = thisval.options[thisval.selectedIndex].text;
		var price = strVal.slice(strVal.indexOf('$')+1);
		price = price.trim();

		//price edit-field-opportunity-services-und-2-field-service-amount-und-0-value
		priceid = 'edit-field-opportunity-services-und-' + pricekey + '-field-service-amount-und-0-value';
		document.getElementById(priceid).value = price.trim();

		//qty field edit-field-opportunity-services-und-2-field-quantity-und-0-value
		qtyfield = 'edit-field-opportunity-services-und-' + pricekey + '-field-quantity-und-0-value';
		qty = parseInt(document.getElementById(qtyfield).value);
		//line total edit-field-opportunity-services-und-2-field-amount-und-0-value
		linetotal = 'edit-field-opportunity-services-und-' + pricekey + '-field-amount-und-0-value';

		if (qty > 0) {
			document.getElementById(linetotal).value = parseInt(price) * qty;
		} else {
			document.getElementById(linetotal).value = '';
		}
}

 /**
 *
 * Calculates extended prices of service line items on opportunities
 * Attached to the form controls in ec_app//ec_app_form_alter()
 */
 function updatePrice(pricekey) {
			//price edit-field-opportunity-services-und-2-field-service-amount-und-0-value
			priceid = document.getElementById('edit-field-opportunity-services-und-' + pricekey + '-field-service-amount-und-0-value').value;

			//qty field edit-field-opportunity-services-und-2-field-quantity-und-0-value
			qtyfield = 'edit-field-opportunity-services-und-' + pricekey + '-field-quantity-und-0-value';
			qty = parseInt(document.getElementById(qtyfield).value);

			//line total edit-field-opportunity-services-und-2-field-amount-und-0-value
			linetotal = 'edit-field-opportunity-services-und-' + pricekey + '-field-amount-und-0-value';
			if (qty > 0) {
				document.getElementById(linetotal).value = priceid * qty;
			} else {
				document.getElementById(linetotal).value = '';
			}

}

(function ($) {
	  Drupal.behaviors.ec_app = {
		attach: function (context, settings) {

		$(window).load(function() {
			console.log('EC APP Module loaded');
		});

		//accounts node form
		$(function() {
			$("#mycancel").click(function() {
				history.back(1);
			});
		});

		//selectize controls
		if ($('.ec-selectize').length > 0) {

			$.getScript("/sites/all/libraries/selectize/dist/js/standalone/selectize.min.js", function(){
				 $('.ec-selectize').selectize({
					 maxItems: 10
				 });
			});

		}
				//selectize controls used on map and projects page
		if ($('.test-selectize').length > 0) {
			$.getScript("/sites/all/libraries/selectize/dist/js/standalone/selectize.min.js", function(){
				 $('.test-selectize').selectize({
					 maxItems: 10
				 });
			});
		}


			//COMMENTED OUT ON 9/2 - ADDING TEST-SELECTIZE CLASS TO THIS CONTROL LOADS THE SELECTIZE LIBRARIES ONTO IT.
			// ALTER THE FORM AND ADD TEST-SELECTIZE
		//on the projects map page this shows/displays the multi select filter
		// if ($('.page-map-of-projects').length > 0 && ('#edit-field-project-status-tid').length > 0 && $('#tid_select').length > 0) {
		//	 var x=document.getElementById("edit-field-project-status-tid");
		//	 $('#tid_select').addClass('tid-select-cont');
		//	 x.style.display = "none";
		//	 var tname = "";
		//	 var p=0;
		//	 for (var i = 0; i < x.options.length; i++) {
		//		 if(x.options[i].selected){
		//			 p=p+1;
		//			 if(p==1){
		//				 tname += (x.options[i].text);
		//			 } else {
		//				 tname += ', ' + (x.options[i].text);
		//			 }
        //
		//		 }
		//	 }
		//	 if (tname == ""){tname="Displaying All";}
		//	 document.getElementById("tid_select").innerHTML = tname;
		//	 document.getElementById("tid_select").onclick = function() {
        //
		//		 if(x.style.display == "block"){
		//			 x.style.display = "none";
		//		 } else {
		//			 x.style.display = "block";
		//		 }
        //
		//	 };
		// }

		//MAP OF PROJECTS PAGE
		//if ($('.page-map-of-projects').length > 0) {
			$(window).load(function() {
				$(".loadergif").fadeOut("slow");
			});
		//}


		//PROJECTS NODE FORM
		if ($('.node-type-projects').length > 0 || $('.node-type-opportunities').length > 0) {

			if (!$('body').hasClass('page-node-edit')) {

				//if this class is there, the page needs to jump to the tasks anchor
				if ($('.JumpToTaskViewBlock').length > 0) {
					window.location.hash="task-view-block";
				}

				//html in ec_app hook node view
				var btnedittaskview = document.getElementById('btn-edit-task-view');
				btnedittaskview.onclick = function() {
					var edittaskview = document.getElementById('edit-task-view');
					var taskview = document.getElementById('task-view-block');
					edittaskview.style.display = "block";
					taskview.style.display = "none";
				};
				var btntaskview = document.getElementById('btn-task-view');
				btntaskview.onclick = function() {
					var edittaskview = document.getElementById('edit-task-view');
					var taskview = document.getElementById('task-view-block');
					edittaskview.style.display = "none";
					taskview.style.display = "block";
				};
			}
		}


		//CONFIG TASKS PAGE
		if ($('.page-config-tasks').length > 0) {
			$('#set-order').click(function() {
				if($('#config-tasks').is(':visible')) {
					$("#config-tasks").fadeOut("fast");
					$("#order-container").fadeIn("slow")
					$('#order-link').html('Cancel');
				} else {
					$('#order-link').html('Reorder');
					$("#config-tasks").fadeIn("slow");
					$("#order-container").fadeOut("fast");
				}


			});
		}
		if ($('.page-config-opp-tasks').length > 0) {
			$('#set-order').click(function() {
				if($('#config-tasks').is(':visible')) {
					$("#config-tasks").fadeOut("fast");
					$("#order-container").fadeIn("slow")
					$('#order-link').html('Cancel');
				} else {
					$('#order-link').html('Reorder');
					$("#config-tasks").fadeIn("slow");
					$("#order-container").fadeOut("fast");
				}


			});
		}

    //FIELD COLLECTION UNITS FORM CHANGE LAST UPDATED DATE
    if ($('.page-field-collection-field-units').length > 0) {
      $('.update-check input, .update-check select').change(function() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        var d = new Date();
        var strDate = monthNames[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
        $('input[id^="edit-field-fc-last-updated-und"]').val(strDate);
      });
		}


		//ACCOUNTS PAGE SWITCH BETWEEN ACCOUNT AND SUB CONTRACTOR VIEW. GIES WITH TPL
		if ($('.page-accounts').length > 0) {
			$('#view-accounts').click(function() {
				$("#sub-container").fadeOut("fast");
				$("#accounts-container").fadeIn("slow");
				$('#view-accounts').addClass("active");
				$('#view-subs').removeClass("active");
			});
			$('#view-subs').click(function() {
				$("#accounts-container").fadeOut("fast");
				$("#sub-container").fadeIn("slow");
				$('#view-accounts').removeClass("active");
				$('#view-subs').addClass("active");
			});
		}

		//CHOOSE DISPLAY PAGE WHERE USER CHOOSES DASHBOARD DISPLAY. CORRESPONDS WITH MENU CALLBACK IN EC_APP.MODULE
		if ($('.page-node-26274').length > 0) {
			$('#display-click').click(function() {
				var myClass = $(this).attr("class");
				var myAjax = "/get/ajax/node/" + myClass;
				$("#ajax-target").load(myAjax);
			});
			$('#display-click2').click(function() {
				var myClass = $(this).attr("class");
				var myAjax = "/get/ajax/node/" + myClass;
				$("#ajax-target").load(myAjax);
			});
			$('#display-click3').click(function() {
				var myClass = $(this).attr("class");
				var myAjax = "/get/ajax/node/" + myClass;
				$("#ajax-target").load(myAjax);
			});
			$('#display-click4').click(function() {
				var myClass = $(this).attr("class");
				var myAjax = "/get/ajax/node/" + myClass;
				$("#ajax-target").load(myAjax);
			});
		}


		//ALL PAGE NODE FORMS
		if ($('.page-node-edit').length > 0 || $('.page-node-add').length > 0) {

			//html from ec_app
			//gives user a projected End Date based on their calculations
			$('.ex_msg').click(function() {
				var tt = document.getElementById('edit-field-intake-date-und-0-value-datepicker-popup-0').value;
				if(tt == '') {
					tt = Date();
				}
				var date = new Date(tt);
				var newdate = new Date(date);

				newdate.setDate(newdate.getDate() + 450);

				var dd = newdate.getDate();
				var mm = newdate.getMonth() + 1;
				var y = newdate.getFullYear();

				var someFormattedDate = mm + '/' + dd + '/' + y;
				document.getElementById('edit-field-close-date-und-0-value-datepicker-popup-0').value = someFormattedDate;

			});


			//gotta var this so we can set the text from field_address focusout
			$(function () {
				var text = $("label[for=jquery_msg]").text();
			});

			//This is utilizing a label suffix that is provided by ec_app.module
			$('#edit-field-address-und-0-value').bind('focusout', function() {

				var msg = 'Remember to abbrieviate street suffixes and direction';
				var text2 = $('#edit-field-address-und-0-value').val().toLowerCase();

				//STRINGS TO TEST FOR IN ADDRESS FIELD
				var mylist = 'drive, avenue, street, boulevard, place, north, south, east, west';
				var things = mylist.split(',');
				for(var i = 0; i < things.length; i++) {
                    if(text2.indexOf(things[i]) != -1) {
						$("label[for='jquery_msg']").text(msg);//BUT INSIDE THIS LOOP IT WILL NOT WORK EVEN WHEN THIS IF TESTS TRUE AND RETURNS THE CONSOLE MESSAGE
						return;
                    } else if (text2.indexOf(things[i]) == -1)  {
						$("label[for='jquery_msg']").text(''); //BUT INSIDE THIS LOOP IT WILL NOT WORK

					} else {

					}
				}
			});
	//PREVENT SPECIAL CHARACTERS IN ADDRESS FIELD
			$('#edit-field-address-und-0-value').bind('keypress', function (event) {
				var regex = new RegExp("^[a-z A-Z0-9]+$");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					event.preventDefault();
					return false;
				}

			});
			$('#edit-field-city-und-0-value').bind('keypress', function (event) {
				var regex = new RegExp("^[a-z A-Z0-9]+$");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					event.preventDefault();
					return false;
				}
			});
			$('#edit-field-state-und-0-value').bind('keypress', function (event) {
				var regex = new RegExp("^[a-z A-Z0-9]+$");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					event.preventDefault();
					return false;
				}
			});
			$('#edit-field-zip-und-0-value').bind('keypress', function (event) {
				var regex = new RegExp("^[a-z A-Z0-9]+$");
				var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
				if (!regex.test(key)) {
					event.preventDefault();
					return false;
				}
			});

			//Title of nodes are the addresses typically
			$('#edit-title').bind('focusout', function() {
				// set one value from another
				$myval = $('#edit-title').val()
				$('#edit-field-address-und-0-value').val($myval);

			});


		}
    }
  };
})(jQuery);
