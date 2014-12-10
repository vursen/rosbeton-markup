$(window).load(function() {

  var $portfolio = $('.b-portfolio');

  $portfolio.find('.b-portfolio__slider').sly({
    horizontal: 1,
    itemNav: 'centered',
    smart: 1,
    prevPage: $portfolio.find('.b-portfolio__controls__prev'),
    nextPage: $portfolio.find('.b-portfolio__controls__next')
  })   

});