$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 1) {
				$(".bg-dkblue").addClass("bg-dkblue-shdw");}
				else {
					$(".bg-dkblue").removeClass("bg-dkblue-shdw")
				}
							});


var publicSpreadsheetUrl = '12jMwpmqdbUUfcMHWg2GwGvu-d9BhaJOEsWjK1eoqHRc';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    console.log('Successfully processed!')
  d3.select("#requests")
    .selectAll('h1')    
      .data(data) 
      .append("h1")
      .style("color", "#387284")
      .text(function(d) {
        return d.rqt_count;
      });
   d3.select("#agencies")
    .selectAll('h1')    
      .data(data) 
      .append("h1")
      .style("color", "#387284")
      .text(function(d) {
        return d.agency_cnt;
      });
    d3.select("#records")
    .selectAll('h1')    
      .data(data) 
      .append("h1")
      .style("color", "#387284")
      .text(function(d) {
        return d.records_obt_cnt;
      });
    d3.select("#pages")
    .selectAll('h1')    
      .data(data) 
      .append("h1")
      .style("color", "#387284")
      .text(function(d) {
        return d.pg_cnt;
      })
      ;
  }

window.addEventListener('DOMContentLoaded', init)



// external js: masonry.pkgd.js

var msnry = new Masonry( '.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  stagger: 10
});


