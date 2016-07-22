var logger = require('./LoggerModule');

logger.log('Project Home: https://github.com/neshaani/neshaani');

(function($) {
	$('input#state').on('click', function() {
		var req = {
			"url" : "http://google.com"
		};

		$.ajax({
			type: "POST",
			url: "https://api.neshaani.com/api/generate",
			data: JSON.stringify(req),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data){
				alert(data);
			},
			failure: function(errMsg) {
				alert(errMsg);
			}
		});

		$('p.result').fadeIn();

	});
})(jQuery);