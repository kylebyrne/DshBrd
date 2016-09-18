  $(window).load(function() {
    var index = activeIndex();
    var ydisp = 17 + ((index - 1) * 48);
    var listnum = $(".module_list_div").length;
    var minh = 60 + ((1+ listnum) * 48) + 48;

    $(".module_hover_indicator").css('top', ydisp)
    $(".banner").css('min-height', minh )
  });
