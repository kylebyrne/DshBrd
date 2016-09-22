Router.configure({
  layoutTemplate: 'dshbrd'
});

Router.route('/',function () {
    this.redirect('/login');
})

Router.route('/login',  {
template: 'login',
layoutTemplate: null
});

Router.route('/:module', function () {
    Session.set('currentModule', this.params.module);
    this.render(this.params.module + '-module');
});
