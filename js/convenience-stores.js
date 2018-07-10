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

    $('.hero').append('<div style="width: ' + w + 'px; height: ' + h + 'px; position: absolute; top: 0; left: 0; right: 0; margin: auto;"><img class="ac-card" src="/img/ac-card.png" style="display: none;" /><img class="drink-card" src="/img/drink-card.png" style="display: none;" /><img class="ice-card" src="/img/ice-card.png" style="display: none;" />');
    $('.hero').append('<style>.ac-card,.drink-card,.ice-card{width:20%;position:absolute;}.ac-card{left:6.2%;top:29%;}.drink-card{top:4%;left:55%;}.ice-card{top:43%;left:55%;}</style>');
    showCard();
    
    setInterval(function() {
      showCard();
    }, 4000);
  });
};

function showCard() {
  var visible = '.' + $('.ice-card:visible, .drink-card:visible, .ac-card:visible').attr('class');

  $('.ice-card, .drink-card, .ac-card').fadeOut();

  var selectors = ['.ice-card', '.drink-card', '.ac-card'].filter(function(s) { return s !== visible; }),
      selector = selectors[Math.floor(Math.random() * selectors.length)];

  $(selector).fadeIn();
};
