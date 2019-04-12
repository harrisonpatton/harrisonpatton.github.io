var main = function() {
  $('.lightbox_trigger').click(function(e){
    e.preventDefault();

    var aliens_title = "Aliens";
    var aliens_date = 2015;
    var ohwhatlovely_title = "Oh What A Lovely War";
    var ohwhatlovely_date = 2016;
    var stagereading_title = "Stage Reading";
    var stagereading_date  = 2015;
    var failure_title = "Failure: A Love Story";
    var failure_date = 2017;
    var ndcity_title = "The Second City";
    var ndcity_date = 2018;
    var lettershome_title = "Letters Home";
    var letterhome_date = 2019;
    var grapes_title = "Grapes of Wrath";
    var grapes_date = 2017;

    var title = "";
    var date = 0;

    var imagesrc= $(this).attr('src');

    $('#lightboximg').attr('src', imagesrc);
    var newlightbox = $('#lightboximg').attr('src');

    var lightboxdescription = '<p><b>'+title+'</b>'+' '+'||'+' '+date+'</p>';

    //$('#lightbox').append(lightboxdescription);
    $('#lightbox').show();
    $('.close').hide();
  });

  $('.closer').click(function(){
    $('#lightbox').hide();
    $('.close').show();
  });

}

$(document).ready(main);
