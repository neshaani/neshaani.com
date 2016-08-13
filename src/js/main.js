var logger = require('./LoggerModule');

logger.log('Project Home: https://github.com/neshaani/neshaani');

$(function() {

    $query = $('input.query');
    $result = $('input.result');
    $logoBtn = $('a#logoBtn');

    $query.keypress(function(event) {

        if (event.which == 13) { // on Pressing Enter
            event.preventDefault();

            $result.val('Loading...');

            var inputVal = $query.val().trim();
            
            if (inputVal == "" || inputVal.length == 0) {
                $query.val("");
                $query.attr("placeholder", "URL Could not be Empty!");
                return false;
            }

            if (!/^https?:\/\//i.test(inputVal)) {
                inputVal = 'http://' + inputVal;
            }

            var req = {
                "url" : inputVal
            };

            $.ajax({
                type: "POST",
                url: "https://api.neshaani.com/api/generate",
                data: JSON.stringify(req),
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){
                    var url = data.generate.url;
                    $result.val(url);
                    $logoBtn.attr("href", url).attr("title", "Visit: " + url);
                    console.log(url);
                },
                failure: function(errMsg) {
                    console.log(errMsg);
                }
            });

            $result.fadeIn();
            $result.css("opacity", "1");
        }

    });


});
