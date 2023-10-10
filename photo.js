var main = function () {
  $('.lightbox_trigger').click(function (e) {
    e.preventDefault();

    var aliens_title = 'Aliens';
    var aliens_date = 2015;
    var ohwhatlovely_title = 'Oh What A Lovely War';
    var ohwhatlovely_date = 2016;
    var stagereading_title = 'Stage Reading';
    var stagereading_date = 2015;
    var failure_title = 'Failure: A Love Story';
    var failure_date = 2017;
    var ndcity_title = 'The Second City';
    var ndcity_date = 2018;
    var lettershome_title = 'Letters Home';
    var lettershome_date = 2019;
    var grapes_title = 'Grapes of Wrath';
    var grapes_date = 2017;
    var headshot_title = 'Headshots by Ian Mclaren Photography';

    var imagesrc = $(this).attr('src');

    if (imagesrc.includes('ohwhatlovely')) {
      $('#image_title').text(ohwhatlovely_title);
      $('#image_date').text(ohwhatlovely_date);
    } else if (imagesrc.includes('aliens')) {
      $('#image_title').text(aliens_title);
      $('#image_date').text(aliens_date);
    } else if (imagesrc.includes('grapes')) {
      $('#image_title').text(grapes_title);
      $('#image_date').text(grapes_date);
    } else if (imagesrc.includes('letter')) {
      $('#image_title').text(lettershome_title);
      $('#image_date').text(lettershome_date);
    } else if (imagesrc.includes('stage')) {
      $('#image_title').text(stagereading_title);
      $('#image_date').text(stagereading_date);
    } else if (imagesrc.includes('failure')) {
      $('#image_title').text(failure_title);
      $('#image_date').text(failure_date);
    } else if (imagesrc.includes('city')) {
      $('#image_title').text(ndcity_title);
      $('#image_date').text(ndcity_date);
    } else if (imagesrc.includes('headshot')) {
      $('#image_title').text(headshot_title);
    } else {
      $('#image_title').text('Wow guess I forgot a title ... :|');
      $('#image_date').text(
        'I can assure you this happened in the ballpark of 1995 until now.'
      );
    }

    $('#lightboximg').attr('src', imagesrc);
    $('#lightbox').show();
    $('.close').hide();
  });

  $('.closer').click(function () {
    $('#lightbox').hide();
    $('.close').show();
  });
};

$(document).ready(main);
