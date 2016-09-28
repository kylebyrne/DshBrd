if(Meteor.isClient){

Accounts.onLogin(function(){
  console.log("logged in");
   Router.go('/dashboard');
});

Accounts.onLogout(function(){
  console.log("logged in");
   Router.go('/login');
});

}

Router.configure({
  layoutTemplate: 'dshbrd'
});

Router.route('/',function () {
    if(!Meteor.userId()){
      this.redirect('/login');
    }else{
      this.redirect('/dashboard');
    }
})

Router.route('/login',  {
  onBeforeAction: function() {
      if (Meteor.userId() && this.ready()){
        return this.redirect('/dashboard');
      }else{
        this.next();
      }},
  template: 'login',
  layoutTemplate: null
});

Router.route('/:module', function () {
    Session.set('currentModule', this.params.module);
    if(Meteor.userId()){
      this.render(this.params.module + 'Module');
    }else{
      Router.go('/login');
    }
});
