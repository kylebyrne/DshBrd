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
