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

    $('.hero').append('<div style="width: ' + w + 'px; height: ' + h + 'px; position: absolute; top: 0; left: 0; right: 0; margin: auto;"><img class="bathroom-card" src="/img/bathroom-card.png" style="display: none;" /><img class="foot-traffic-card" src="/img/foot-traffic-card.png" style="display: none;" /><img class="ac-card-2" src="/img/ac-card-2.png" style="display: none;" />');
    $('.hero').append('<style>.bathroom-card,.foot-traffic-card,.ac-card-2{width:20%;position:absolute;}.bathroom-card{left: 57.2%;top: 1%;}.foot-traffic-card{top: 32%;left: 58%;}.ac-card-2{top: 26%;left: 3%;}</style>');
    showCard();
    
    setInterval(function() {
      showCard();
    }, 4000);
  });
};

function showCard() {
  var visible = '.' + $('.ac-card-2:visible, .foot-traffic-card:visible, .bathroom-card:visible').attr('class');

  $('.ac-card-2, .foot-traffic-card, .bathroom-card').fadeOut();

  var selectors = ['.ac-card-2', '.foot-traffic-card', '.bathroom-card'].filter(function(s) { return s !== visible; }),
      selector = selectors[Math.floor(Math.random() * selectors.length)];

  $(selector).fadeIn();
};
