Template.login.onRendered(function(){
  var panelOne = $('.form-panel.two').height(),
    panelTwo = $('.form-panel.two')[0].scrollHeight;

  $('.form-panel.one').addClass('active');


  $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
    e.preventDefault();

    $('.form-panel.one').removeClass('active');
    $('.form-panel.one').addClass('behind');
    $('.form-panel.two').addClass('active');
    $('.form').animate({
      'height': panelTwo
    }, 200);
  });

  $('.form-panel.one').not('.form-panel.two.hidden').on('click', function(e) {
    e.preventDefault();
    $('.form-panel.one').removeClass('behind');
    $('.form-panel.two').removeClass('active');
    $('.form-panel.one').addClass('active');
  });
});
