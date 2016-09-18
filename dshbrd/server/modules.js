Meteor.startup(function(){
  Modules.remove({});
  var data = JSON.parse(Assets.getText("data/modules.json"));

        _.forEach(data , function (item, index, array) {
            Modules.insert(item);
        })
});
