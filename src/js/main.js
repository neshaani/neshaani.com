var logger = require('./LoggerModule');

logger.log('Project Home: https://github.com/neshaani/neshaani');

(function($) {

	$('input#state').keypress(function(event) {
		
		if (event.which == 13) { // on Pressing Enter
			event.preventDefault();

			var inputVal = $('input#state').val().toLowerCase();

			if (!/^https?:\/\//i.test(inputVal)) {
			    inputVal = 'http://' + inputVal;
			}

			var req = {
				"url" : inputVal
			};

			$.ajax({
				type: "POST",
				url: "http://api.neshaani.app/api/generate",
				data: JSON.stringify(req),
				crossDomain: true,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(data){
					var url = data.generate.url;
					$('p.result').text(url);
					console.log(url);
				},
				failure: function(errMsg) {
					console.log(errMsg);
				}
			});

			$('p.result').fadeIn();
		}


	});


})(jQuery);