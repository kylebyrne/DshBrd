Template.moduleListSort.helpers({
    modules: function() {return Modules.find({}, {sort: {index: 1}})}
});

//Once the Template is rendered, run this function which
//  sets up JQuery UI's sortable functionality
Template.moduleListSort.rendered = function() {
    Session.set('moduleListUpdate', []);
    this.$('#moduleListSort').sortable({
        stop: function(e, ui) {
            // get the dragged html element and the one before
            //   and after it

            //ITEM IS THE FUCKING PROPERTY NAME AND IS NO RELATION TO THE CLASS item
            //DUMBEST SHIT IVE EVER SEEN
            el = ui.item.get(0)
            before = ui.item.prev().get(0)
            after = ui.item.next().get(0)

            if (!before) {
                //if it was dragged into the first position grab the
                // next element's data context and subtract one from the rank
                newIndex = Blaze.getData(after).index - 1
            } else if (!after) {
                //if it was dragged into the last position grab the
                //  previous element's data context and add one to the rank
                newIndex = Blaze.getData(before).index + 1
            } else
            //else take the average of the two ranks of the previous
            // and next elements
                newIndex = (Blaze.getData(after).index + Blaze.getData(before).index) / 2

            //update the dragged Item's rank
            update = Session.get('moduleListUpdate');
            update.push([Blaze.getData(el)._id, newIndex]);
            Session.set('moduleListUpdate', update);
        }
    })
}

Template.moduleListModal.events({
  'click #save' : function(e){
    e.preventDefault();
    update = Session.get('moduleListUpdate');
    updateLength = update.length;
    for (var i = 0; i < updateLength; i++) {
      id = update[i][0];
      newIndex = update[i][1];
      Modules.update({ _id: id}, {$set: {index: newIndex}});
    }
    $('#animalsModal').modal('hide');
  },

  'click #cancel': function(e){
    $('#animalsModal').modal('hide');
    var cache = Session.get('moduleSortingCache');
    console.log(cache);
    $("#moduleListSort").html(cache).sortable("refresh");
  }
});
