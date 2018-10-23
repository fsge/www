(function() {
  // Load the script
  var script = document.createElement("SCRIPT");
  script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
  script.type = 'text/javascript';
  script.onload = function() {
    onload($);
  };
  document.getElementsByTagName("head")[0].appendChild(script);
})();

function onload($) {
  $('.hero > img:first-child').ready(function() {
    var w = $('.hero > img:first-child').width(),
        h = $('.hero > img:first-child').height();

    $('.hero').append('<div style="width: ' + w + 'px; height: ' + h + 'px; position: absolute; top: 0; left: 0; right: 0; margin: auto;"><img class="plug-card" src="/img/plug-card.png" style="display: none;" /><img class="freezer-card" src="/img/freezer-card.png" style="display: none;" /><img class="ac-card-2" src="/img/ac-card-2.png" style="display: none;" />');
    $('.hero').append('<style>.plug-card,.freezer-card,.ac-card-2{width:20%;position:absolute;}.plug-card{left: 32.2%;top: -2%;}.freezer-card{top: -5%;left: 40%;}.ac-card-2{top: 25%;left: 74%;}</style>');
    showCard();
    
    setInterval(function() {
      showCard();
    }, 4000);
  });
};

function showCard() {
  var visible = '.' + $('.ac-card-2:visible, .freezer-card:visible, .plug-card:visible').attr('class');

  $('.ac-card-2, .freezer-card, .plug-card').fadeOut();

  var selectors = ['.ac-card-2', '.freezer-card', '.plug-card'].filter(function(s) { return s !== visible; }),
      selector = selectors[Math.floor(Math.random() * selectors.length)];

  $(selector).fadeIn();
};
