Template.registerForm.events({
    'submit form': function(event) {
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            username: usernameVar,
            email: emailVar,
            password: passwordVar
        });
    }
});

Template.loginForm.events({
    'submit form': function(event){
        event.preventDefault();
        var usernameVar = event.target.loginUsername.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(usernameVar, passwordVar , function(err){
            if (err) {
              console.log('login failed');
              console.log(err);
            } else {
              console.log('login success');
            }
          });

    }
});

Template.header.onCreated( function() {
  Session.set("temp","loginForm");
})

Template.header.events({
    'click .profile_pic': function(e) {
        e.preventDefault();
        if( $(".profile_menu").css('opacity') == 0){
          $('.profile_menu').css('opacity', 1);
        }
        else
        {
          $('.profile_menu').css('opacity', 0);
        }
    },

    'click #registerBtn': function(e) {
        e.preventDefault();
        Session.set("temp", "registerForm");
    },

    'click #signinBtn': function(e) {
        e.preventDefault();
        Session.set("temp", "loginForm");
    },

    'click #logoutBtn': function(e) {
        e.preventDefault();
        Meteor.logout();
    },

    'click #facebookLoginBtn': function(e) {
        e.preventDefault();
        Meteor.loginWithFacebook({});
    },

    'click #twitterLoginBtn': function(e) {
        e.preventDefault();
        Meteor.loginWithTwitter({});
    }
});

Template.header.helpers({
    temp: function(){
        return Session.get('temp');
    }
});
