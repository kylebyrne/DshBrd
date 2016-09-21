

Template.sidebar.events({
    'click #moduleListSettingsBtn': function(e) {
        e.preventDefault();
        $('#animalsModal').modal('show');
    }
});


Template.moduleIcon.rendered = function() {
    var index = activeIndex();
    var ydisp = 17 + ((index - 1) * 48);
    var listnum = $(".sidebar_module_list_item").length;
    var minh = 60 + ((1 + listnum) * 48) + 48;

    $(".sidebar_module_list_hover_indicator").css('top', ydisp)
    $(".banner").css('min-height', minh)
};

Template.moduleList.events({
    'mouseover': function() {
        $(".sidebar_module_list_item").addClass("hover");
        $(".sidebar_module_list").addClass("hover");
        $(".sidebar_module_list_name").addClass("hover");
    },
    'mouseout': function() {
        $(".sidebar_module_list_item").removeClass("hover");
        $(".sidebar_module_list").removeClass("hover");
        $(".sidebar_module_list_name").removeClass("hover");
    }
});

Template.moduleIcon.events({
    'mouseover': function() {
        var index = this.index - 1;
        var ydisp = 17 + (index * 48);
        $(".sidebar_module_list_hover_indicator").css('top', ydisp)
    },
    'mouseout': function() {
        var index = $(".active").attr('data-value');
        var ydisp = 17 + ((index - 1) * 48);
        $(".sidebar_module_list_hover_indicator").css('top', ydisp)
    }
});

activeIndex = function() {
    return $(".active").attr('data-value');
}

Template.registerHelper("moduleIconPath", function(moduleName) {
    return "imgs/Icons/" + moduleName + ".svg";
});

Template.registerHelper("moduleStyle", function(color) {
    return "background:" + color;
});

Template.registerHelper("titleCase", function(string) {
    string = string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
    });
    return string;
});

Template.registerHelper("moduleIndicatorClass", function(active) {
    if (active) {
        return "sidebar_module_list_item active";
    } else {
        return "sidebar_module_list_item";
    }
});

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
