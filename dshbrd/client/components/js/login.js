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

Template.login.events({

    'click #loginBtn': function() {
      console.log($('[name=loginUsername]').val());

      var email = $('[name=loginUsername]').val();
      var password = $('[name=loginPassword]').val();
      Meteor.loginWithPassword(email, password, function(err){
            if(err){
              console.log("login-failed");
            }
          })
    },

    'click #facebookLoginBtn': function() {
      Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    }

});
