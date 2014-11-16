jQuery(document).ready(function($) {
    jQuery("#product-thumbnails").tinycarousel({
        axis   : "y"
    });
    
    
    
    var name = $('#product-image img').attr("src");
    var filename = name.replace(/^.*?([^\/]+)\..+?$/, '$1');
    $('#product-image img').attr('id', filename);
    imgz(filename);

    jQuery(document).on('click','#product-thumbnails li img', function() {
        var name = $(this).attr("data-src");
        var filename = name.replace(/^.*?([^\/]+)\..+?$/, '$1');
        $('#product-image img').fadeOut(100,function(){
        $('#product-image img').remove();
        $('.zoomstatus').remove();
        $('.zoomtracker').remove();
        var img = $('<img />',{ id: filename, src: name, alt:'MyAlt', class: 'img-responsive'}).appendTo($('#product-image'));
        imgz(filename);
        });
    $('#product-image img').fadeIn(100);
      
    });
    function imgz(id) {
        $('#' + id).addimagezoom({// single image zoom
            zoomrange: [3, 8],
            magnifiersize: [500, 600],
            magnifierpos: 'right',
        });
    };
});
