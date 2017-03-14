$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 1) {
				$(".bg-dkblue").addClass("bg-dkblue-shdw");}
				else {
					$(".bg-dkblue").removeClass("bg-dkblue-shdw")
				}
							});

d3.csv("https://docs.google.com/spreadsheets/d/12jMwpmqdbUUfcMHWg2GwGvu-d9BhaJOEsWjK1eoqHRc/pub?output=csv", 
       function(error, data) {
  d3.select("#requests")
    .selectAll('h3')    
      .data(data) 
      .enter()
      .append("h3")
      .text(function(d) {
        return d.rqt_count;
      });
   d3.select("#agencies")
    .selectAll('h3')    
      .data(data) 
      .enter()
      .append("h3")
      .text(function(d) {
        return d.agency_cnt;
      });
    d3.select("#records")
    .selectAll('h3')    
      .data(data) 
      .enter()
      .append("h3")
      .text(function(d) {
        return d.records_obt_cnt;
      });
    d3.select("#pages")
    .selectAll('h3')    
      .data(data) 
      .enter()
      .append("h3")
      .text(function(d) {
        return d.pg_cnt;
      })
      .attr('position', );
});