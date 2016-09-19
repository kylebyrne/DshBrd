Template.moduleList.helpers({
    modules: function() {return Modules.find({}, {sort: {index: 1}})}
});

Template.sidebar.events({
    'click #moduleListSettingsBtn': function(e) {
        e.preventDefault();
        $('#animalsModal').modal('show');
        var cache = $("#moduleListSort").html();
        Session.set('moduleSortingCache', cache);
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
