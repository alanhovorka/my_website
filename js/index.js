$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 1) {
				$(".bg-dkblue").addClass("bg-dkblue-shdw");}
				else {
					$(".bg-dkblue").removeClass("bg-dkblue-shdw")
				}
							});

d3.csv("https://docs.google.com/spreadsheets/d/12jMwpmqdbUUfcMHWg2GwGvu-d9BhaJOEsWjK1eoqHRc/pub?output=csv", function(error, data) {
	data.forEach(function(d) {
    d.rqt_count = d.rqt_count;
  	});

		console.log(data[1]);
		
		d3.select("#records").append("h3").text(data.rqt_count);


	});

