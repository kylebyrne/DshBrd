

Template.module_list.helpers({
  modules: Modules.find({})
});

Template.module_icon.rendered= function(){
  var index = activeIndex();
  var ydisp = 17 + ((index - 1) * 48);
  var listnum = $(".module_list_div").length;
  var minh = 60 + ((1+ listnum) * 48) + 48;

  $(".module_hover_indicator").css('top', ydisp)
  $(".banner").css('min-height', minh )
};

Template.module_list.events({
  'mouseover': function(){
    $(".module_list_div").addClass("hover");
    $(".module_list").addClass("hover");
    $(".module_list_text").addClass("hover");
  },
  'mouseout': function()
  {
    $(".module_list_div").removeClass("hover");
    $(".module_list").removeClass("hover");
    $(".module_list_text").removeClass("hover");
  }
});

Template.module_icon.events({
  'mouseover': function() {
    var index = this.index-1;
    var ydisp = 17 + (index * 48);
    $(".module_hover_indicator").css('top', ydisp)
  },
  'mouseout': function() {
    var index = $( ".active" ).attr('data-value');
    var ydisp = 17 + ((index - 1) * 48);
    $(".module_hover_indicator").css('top', ydisp)
  }
});

activeIndex = function(){
  return $( ".active" ).attr('data-value');
}

Template.registerHelper("moduleIconPath", function(moduleName){
  return "imgs/Icons/"+moduleName+".svg";
});

Template.registerHelper("moduleStyle", function(color){
  return "background:" + color;
});

Template.registerHelper("titleCase", function(string){
  string = string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  return string;
});

Template.registerHelper("moduleIndicatorClass", function(active){
  if(active){
    return "module_list_div active";
  }else{
    return"module_list_div";
  }
});
