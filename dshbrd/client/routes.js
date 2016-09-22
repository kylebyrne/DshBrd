Router.configure({
  layoutTemplate: 'dshbrd'
});

Router.route('/',function () {
    this.redirect('/dashboard');
})

Router.route('/:module', function () {
    Session.set('currentModule', this.params.module);
    console.log(Session.get('currentModule'));
    this.render(this.params.module + '-module');
});
